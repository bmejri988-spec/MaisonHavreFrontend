import Navbar from '../../components/navbar/Navbar'
import PdfHome from '../../sections/home/PdfHome'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <main className="aurea-story">
      <Navbar contained />
      <PdfHome />
      <Footer />

    </main>
  )
}

export default Home