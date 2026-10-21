import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Terrains from './pages/Terrains/Terrains'
import ChaletModels from './pages/ChaletModels/ChaletModels'
import Options from './pages/Options/Options'
import BuildYourOwn from './pages/BuildYourOwn/BuildYourOwn'
import CatalogRail from './components/home/CatalogRail'

function App() {
  return (
    <BrowserRouter>
      <main className="aurea-home">
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
          <div className="aurea-configurator__header">
            <span className="aurea-eyebrow">Votre projet</span>
            <h2>Composez votre chalet</h2>
            <p>Choisissez votre terrain, votre modèle et vos options.</p>
          </div>

          <CatalogRail />
        </aside>
      </main>
    </BrowserRouter>
  )
}

export default App