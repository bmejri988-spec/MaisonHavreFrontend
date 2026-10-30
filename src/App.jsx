import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Terrains from './pages/Terrains/Terrains'
import ChaletModels from './pages/ChaletModels/ChaletModels'
import Options from './pages/Options/Options'
import BuildYourOwn from './pages/BuildYourOwn/BuildYourOwn'
import CatalogRail from './components/home/CatalogRail'

const catalogTogglePaths = new Set(['/', '/terrains', '/chalet-models', '/options'])

function nextFrame() {
  return new Promise((resolve) => window.requestAnimationFrame(resolve))
}

function waitForImage(image) {
  if (image.complete) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    const finish = () => {
      image.removeEventListener('load', finish)
      image.removeEventListener('error', finish)
      resolve()
    }

    image.addEventListener('load', finish, { once: true })
    image.addEventListener('error', finish, { once: true })

    if (image.complete) {
      finish()
    }
  })
}

function ScrollToTop({ isRestoringHome, onHomeRestored }) {
  const location = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'

    const requestedTop =
      location.pathname === '/'
        ? location.state?.restoreScrollY ?? 0
        : 0

    const root = document.documentElement
    const restore = () => {
      const maxScrollY = Math.max(0, root.scrollHeight - window.innerHeight)
      window.scrollTo({
        top: Math.min(requestedTop, maxScrollY),
        left: 0,
        behavior: 'instant',
      })
    }

    restore()

    if (location.pathname !== '/' || !isRestoringHome) {
      return undefined
    }

    let cancelled = false
    let completed = false
    let timeout
    const story = document.querySelector('.aurea-story')
    const resizeObserver = new ResizeObserver(restore)
    const onResourceLoad = (event) => {
      if (event.target instanceof HTMLImageElement) {
        restore()
      }
    }

    resizeObserver.observe(root)
    resizeObserver.observe(document.body)
    if (story) {
      resizeObserver.observe(story)
    }
    document.addEventListener('load', onResourceLoad, true)
    window.addEventListener('resize', restore)
    window.visualViewport?.addEventListener('resize', restore)

    const cleanup = () => {
      resizeObserver.disconnect()
      document.removeEventListener('load', onResourceLoad, true)
      window.removeEventListener('resize', restore)
      window.visualViewport?.removeEventListener('resize', restore)
      window.clearTimeout(timeout)
    }

    const finish = () => {
      if (cancelled || completed) {
        return
      }

      completed = true
      restore()
      cleanup()
      onHomeRestored()
    }

    const settleHomeLayout = async () => {
      await document.fonts.ready
      await nextFrame()

      if (story) {
        const viewportHeight = window.visualViewport?.height ?? window.innerHeight
        const relevantImages = [...story.querySelectorAll('img')].filter(
          (image) =>
            image.getBoundingClientRect().top + window.scrollY <
            requestedTop + viewportHeight,
        )
        await Promise.all(relevantImages.map(waitForImage))
      }

      await nextFrame()
      await nextFrame()
      finish()
    }

    timeout = window.setTimeout(finish, 5000)
    settleHomeLayout()

    return () => {
      cancelled = true
      cleanup()
    }
  }, [
    isRestoringHome,
    location.pathname,
    location.state,
    onHomeRestored,
  ])

  return null
}

function AppLayout() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(true)
  const [transitionPhase, setTransitionPhase] = useState('idle')
  const [isHomePreviewVisible, setIsHomePreviewVisible] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const transitionPhaseRef = useRef('idle')
  const transitionTimer = useRef()
  const homeLayoutRef = useRef(null)
  const storyRef = useRef(null)
  const catalogToggleRef = useRef(null)
  const currentPath = location.pathname.replace(/\/+$/, '') || '/'
  const showCatalogToggle = catalogTogglePaths.has(currentPath)
  const isRestoringHome = transitionPhase === 'restoring-home'
  const isReturningHome = transitionPhase === 'returning-home'
  const isCatalogClosing =
    transitionPhase === 'closing-catalog' || isReturningHome
  const homeScrollY =
    location.state?.homeScrollY ?? location.state?.restoreScrollY ?? 0

  const setPhase = useCallback((phase) => {
    transitionPhaseRef.current = phase
    setTransitionPhase(phase)
  }, [])

  const clearTransitionTimer = useCallback(() => {
    window.clearTimeout(transitionTimer.current)
    transitionTimer.current = undefined
  }, [])

  const handleHomeRestored = useCallback(() => {
    if (transitionPhaseRef.current === 'restoring-home') {
      clearTransitionTimer()
      setIsHomePreviewVisible(false)
      setPhase('idle')
    }
  }, [clearTransitionTimer, setPhase])

  useEffect(
    () => () => {
      clearTransitionTimer()
      transitionPhaseRef.current = 'idle'
    },
    [clearTransitionTimer],
  )

  useLayoutEffect(() => {
    if (!isReturningHome && !isRestoringHome) {
      return undefined
    }

    const updatePreviewBounds = () => {
      const layout = homeLayoutRef.current
      const story = storyRef.current
      if (!layout || !story) {
        return
      }

      const layoutLeft = layout.getBoundingClientRect().left
      layout.style.setProperty(
        '--aurea-preview-left',
        `${layoutLeft + story.offsetLeft}px`,
      )
      layout.style.setProperty(
        '--aurea-preview-width',
        `${Number.parseFloat(window.getComputedStyle(story).width)}px`,
      )
    }

    const layout = homeLayoutRef.current
    const observer = new ResizeObserver(updatePreviewBounds)
    if (layout) {
      observer.observe(layout)
    }
    window.addEventListener('resize', updatePreviewBounds)
    window.visualViewport?.addEventListener('resize', updatePreviewBounds)
    updatePreviewBounds()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updatePreviewBounds)
      window.visualViewport?.removeEventListener('resize', updatePreviewBounds)
    }
  }, [isReturningHome, isRestoringHome])

  const handleCatalogToggle = () => {
    if (transitionPhaseRef.current !== 'idle') {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (location.pathname !== '/') {
      const navigateHome = () => {
        setPhase('restoring-home')
        navigate('/', {
          state: { restoreScrollY: location.state?.homeScrollY ?? 0 },
        })
      }

      if (prefersReducedMotion) {
        setIsHomePreviewVisible(true)
        navigateHome()
        return
      }

      const buttonRect = catalogToggleRef.current?.getBoundingClientRect()
      const storyRect = storyRef.current?.getBoundingClientRect()

      if (buttonRect && storyRect) {
        const centerX = buttonRect.left + buttonRect.width / 2
        const centerY = buttonRect.top + buttonRect.height / 2
        homeLayoutRef.current?.style.setProperty(
          '--tunnel-origin-x',
          `${centerX - storyRect.left}px`,
        )
        homeLayoutRef.current?.style.setProperty(
          '--tunnel-origin-y',
          `${centerY - storyRect.top}px`,
        )
      }

      setPhase('returning-home')
      setIsHomePreviewVisible(true)
      transitionTimer.current = window.setTimeout(() => {
        if (transitionPhaseRef.current === 'returning-home') {
          clearTransitionTimer()
          navigateHome()
        }
      }, 1200)
      return
    }

    if (!isCatalogOpen) {
      setIsCatalogOpen(true)
      if (!prefersReducedMotion) {
        setPhase('opening-catalog')
        transitionTimer.current = window.setTimeout(() => {
          if (transitionPhaseRef.current === 'opening-catalog') {
            setPhase('idle')
          }
        }, 500)
      }
      return
    }

    if (prefersReducedMotion) {
      setIsCatalogOpen(false)
      return
    }

    setIsCatalogOpen(false)
    setPhase('closing-catalog')
    transitionTimer.current = window.setTimeout(() => {
      if (transitionPhaseRef.current === 'closing-catalog') {
        setPhase('idle')
      }
    }, 1000)
  }

  const handleCatalogAnimationEnd = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.nativeEvent.pseudoElement ||
      event.animationName !== 'aurea-catalog-suction' ||
      transitionPhaseRef.current !== 'closing-catalog'
    ) {
      return
    }

    clearTransitionTimer()
    setPhase('idle')
  }

  const handleCatalogTransitionEnd = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== 'grid-template-columns' ||
      transitionPhaseRef.current !== 'opening-catalog'
    ) {
      return
    }

    clearTransitionTimer()
    setPhase('idle')
  }

  const handleReturnAnimationEnd = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.animationName !== 'aurea-tunnel-suction' ||
      transitionPhaseRef.current !== 'returning-home'
    ) {
      return
    }

    clearTransitionTimer()
    setPhase('restoring-home')
    navigate('/', {
      state: { restoreScrollY: location.state?.homeScrollY ?? 0 },
    })
  }

  const catalogClassName = [
    'aurea-home',
    !isCatalogOpen && 'aurea-home--catalog-hidden',
    isCatalogClosing && 'aurea-home--catalog-closing',
    isReturningHome && 'aurea-home--returning-home',
    isRestoringHome && 'aurea-home--restoring-home',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <ScrollToTop
        isRestoringHome={isRestoringHome}
        onHomeRestored={handleHomeRestored}
      />
      <main
        className={catalogClassName}
        ref={homeLayoutRef}
        onTransitionEnd={handleCatalogTransitionEnd}
      >
        {isHomePreviewVisible && (
          <div
            className="aurea-home-preview"
            aria-hidden="true"
          >
            <div
              className="aurea-home-preview__content"
              style={{ top: -homeScrollY }}
            >
              <Home />
            </div>
          </div>
        )}

        <div
          className="aurea-story"
          ref={storyRef}
          onAnimationEnd={handleReturnAnimationEnd}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/terrains" element={<Terrains />} />
            <Route path="/chalet-models" element={<ChaletModels />} />
            <Route path="/options" element={<Options />} />
            <Route path="/build-your-own" element={<BuildYourOwn />} />
          </Routes>
        </div>

        <aside className="aurea-configurator" aria-label="Composez votre chalet">
          <div
            className="aurea-configurator__panel"
            aria-hidden={!isCatalogOpen}
            inert={!isCatalogOpen}
            onAnimationEnd={handleCatalogAnimationEnd}
          >
            <CatalogRail />
          </div>
        </aside>

        {showCatalogToggle && (
          <button
            type="button"
            className="aurea-catalog-toggle"
            ref={catalogToggleRef}
            aria-label={
              location.pathname !== '/'
                ? 'Retour à la page d’accueil'
                : isCatalogOpen
                  ? 'Masquer le catalogue'
                  : 'Afficher le catalogue'
            }
            aria-expanded={isCatalogOpen}
            onClick={handleCatalogToggle}
            disabled={transitionPhase !== 'idle'}
          >
            {isCatalogOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        )}
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App