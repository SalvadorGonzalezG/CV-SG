import Header from "./components/Header"
import Carrousel from "./components/Carrousel1"
import Carrou from "./components/Carrou" //Segundo Carrousel incluido en el aside
import Cslhab from "./components/Cslhab"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <section className="container">
        <header>
          <Header />
        </header>
        <aside>
          <Carrousel />
          <Carrou/>
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
