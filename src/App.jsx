import Header from "./components/Header"
import Carrou from "./components/Carrou" //Segundo Carrousel incluido en el aside
import Cslhab from "./components/Cslhab"
import Content from "./components/Content"
import Footer from "./components/Footer"
import CarrouCir from "./components/CarrouCir"
import Carrousel1 from "./components/Carrousel1"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from "./pages/Projects"

function App() {
 
  const[showComponent, setShowComponent] = useState(false);
  const[project, setProject] = useState(false);

  const projectClick = () => {
    setProject(!project)
  }
  const handleClick = () =>{
    setShowComponent(!showComponent);
  }
  
  return (
    <>
    
    <div className="mostrarcv">
       {/* Aparece el boton al dar click aparace toda la section  y el boton desaparece.*/}
      {showComponent ? null: ( <Router><Link to='/cv'><button className="btn" onClick={handleClick}>CV Salvador Gonzalez G.</button></Link></Router>)}
      
       {/* Muestra el contenido cuando showComponent es verdadero */} 
      {showComponent && (
      <section className="container">
      <header>
        {/* pasando el prop de forma correcta para que al dar click en el boton el componente se renderice y este xse cierre */}
        <Header project ={project} setProject={setProject} showComponent={showComponent} setShowComponent={setShowComponent} />
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
       )}
    </div>
    <div>
    </div>
        {project ? null : 
        (project && 
        <Projects/>)}

        {project ? null : (<Router><Link to='/project'> <button onClick={projectClick}>proyectos</button> </Link> </Router>
        
        ) }
      {project && (
        
          
          <Projects/>
          
        
      )}
    </>
  )
}

export default App
