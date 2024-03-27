import Header from "./components/Header"
import Aside from "./components/Aside"
import Carrousel from "./components/Carrousel1"
import Carrou from "./components/Carrou" //Segundo Carrousel incluido en el aside
import Cslhab from "./components/Cslhab"
import Content from "./components/Content"

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
        <footer>Foter</footer>
      </section>
    </>
  )
}

export default App
