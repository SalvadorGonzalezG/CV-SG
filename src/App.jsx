import Header from "./components/Header"
import Aside from "./components/Aside"
import Carrousel from "./components/Carrousel1"
function App() {

  return (
    <>
      <section className="container">
        <header>
          <Header />
        </header>
        <aside>
          <Carrousel />
        </aside>
        <main>Content</main>
        <footer>Foter</footer>
      </section>
    </>
  )
}

export default App
