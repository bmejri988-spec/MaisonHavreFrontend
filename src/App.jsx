import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Terrains from './pages/Terrains/Terrains'
import ChaletModels from './pages/ChaletModels/ChaletModels'
import Options from './pages/Options/Options'
import BuildYourOwn from './pages/BuildYourOwn/BuildYourOwn'
import CatalogRail from './components/home/CatalogRail'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(true)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className={`aurea-home${isCatalogOpen ? '' : ' aurea-home--catalog-hidden'}`}>
        <div className="aurea-story">
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
            <div className="aurea-configurator__header">
              <span className="aurea-eyebrow">Votre projet</span>
              <h2>Composez votre chalet</h2>
              <p>Choisissez votre terrain, votre modèle et vos options.</p>
            </div>

            <CatalogRail />
          </div>
        </aside>

        <button
          type="button"
          className="aurea-catalog-toggle"
          aria-label={isCatalogOpen ? 'Masquer le catalogue' : 'Afficher le catalogue'}
          aria-expanded={isCatalogOpen}
          onClick={() => setIsCatalogOpen((open) => !open)}
        >
          {isCatalogOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </main>
    </BrowserRouter>
  )
}

export default App