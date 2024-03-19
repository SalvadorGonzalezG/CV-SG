import Header from "./components/Header"
import Aside from "./components/Aside"
function App() {

  return (
    <>
      <section className="container">
        <header>
          <Header />
        </header>
        <aside>
          <Aside />
        </aside>
        <main>Content</main>
        <footer>Foter</footer>
      </section>
    </>
  )
}

export default App
