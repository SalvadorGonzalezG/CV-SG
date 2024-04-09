import Header from "./components/Header"
import Carrou from "./components/Carrou" //Segundo Carrousel incluido en el aside
import Cslhab from "./components/Cslhab"
import Content from "./components/Content"
import Footer from "./components/Footer"
import CarrouCir from "./components/CarrouCir"
import Carrousel1 from "./components/Carrousel1"

function App() {

  return (
    <>
      <section className="container">
        <header>
          <Header />
        </header>
        <aside>
          <Carrousel1/>
          <Carrou/>
          <CarrouCir/>
          <Cslhab/>
        </aside>
        <main>
          <Content/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </section>
      
    </>
  )
}

export default App
