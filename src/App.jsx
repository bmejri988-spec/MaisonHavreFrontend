import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
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

const catalogTogglePaths = new Set(['/terrains', '/chalet-models', '/options'])

function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    const top =
      location.pathname === '/'
        ? location.state?.restoreScrollY ?? 0
        : 0

    window.scrollTo({ top, left: 0, behavior: 'instant' })
  }, [location.pathname, location.state])

  return null
}

function AppLayout() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(true)
  const [isCatalogClosing, setIsCatalogClosing] = useState(false)
  const [isReturningHome, setIsReturningHome] = useState(false)
  const [isHomePreviewHandoff, setIsHomePreviewHandoff] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const closeTimer = useRef()
  const homeLayoutRef = useRef(null)
  const storyRef = useRef(null)
  const catalogToggleRef = useRef(null)
  const currentPath = location.pathname.replace(/\/+$/, '') || '/'
  const showCatalogToggle = catalogTogglePaths.has(currentPath)
  const homeScrollY =
    location.state?.homeScrollY ?? location.state?.restoreScrollY ?? 0

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  useEffect(() => {
    if (location.pathname !== '/' || !isHomePreviewHandoff) {
      return undefined
    }

    let secondFrame
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setIsHomePreviewHandoff(false)
      })
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      if (secondFrame !== undefined) {
        window.cancelAnimationFrame(secondFrame)
      }
    }
  }, [isHomePreviewHandoff, location.pathname])

  const handleCatalogToggle = () => {
    if (isCatalogClosing) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (location.pathname !== '/') {
      const navigateHome = () => {
        navigate('/', {
          state: { restoreScrollY: location.state?.homeScrollY ?? 0 },
        })
      }

      if (!prefersReducedMotion) {
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
      }

      if (!prefersReducedMotion && document.startViewTransition) {
        document.startViewTransition(() => {
          flushSync(navigateHome)
        })
        return
      }

      setIsCatalogClosing(true)
      setIsReturningHome(true)
      closeTimer.current = window.setTimeout(() => {
        setIsCatalogClosing(false)
        setIsReturningHome(false)
        setIsHomePreviewHandoff(!prefersReducedMotion)
        navigateHome()
      }, prefersReducedMotion ? 0 : 900)
      return
    }

    const closeDelay = prefersReducedMotion ? 0 : 720

    if (!isCatalogOpen) {
      setIsCatalogOpen(true)
      return
    }

    setIsCatalogOpen(false)
    setIsCatalogClosing(true)
    closeTimer.current = window.setTimeout(() => {
      setIsCatalogClosing(false)
    }, closeDelay)
  }

  const catalogClassName = [
    'aurea-home',
    !isCatalogOpen && 'aurea-home--catalog-hidden',
    isCatalogClosing && 'aurea-home--catalog-closing',
    isReturningHome && 'aurea-home--returning-home',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <ScrollToTop />
      <main className={catalogClassName} ref={homeLayoutRef}>
        {(isReturningHome || isHomePreviewHandoff) && (
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

        <div className="aurea-story" ref={storyRef}>
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
            disabled={isCatalogClosing}
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