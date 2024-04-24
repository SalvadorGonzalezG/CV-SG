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
  // Icons
import { FcOpenedFolder } from "react-icons/fc";
import { FcOrgUnit } from "react-icons/fc";

function App() {
 
  const[showComponent, setShowComponent] = useState(false);
  const[project, setProject] = useState(false);
  

  const projectClick = () => {
    setProject(!project) // cambia el estado del proyecto
    setShowComponent(false) // oculta el componente relacionado con el CV

  }
  const handleClick = () =>{
    setShowComponent(!showComponent); // cambia el estado del proyecto.
    setProject(false) // oculta el componente de proyectos
  }
  // funcion para cerrar la sección de proyectos.
  const handleCloseProjects=()=>{
    setProject(false) 
  }
  return (
    <>
    
    <div className="mostrarcv">
       {/* Aparece el boton, al dar click aparace toda la section  y el boton desaparece.*/}
      {showComponent ? null: ( <Router><Link to='/cv'><button className="btn" onClick={handleClick}><FcOpenedFolder/>CV Salvador Gonzalez G.</button></Link></Router>)}
      
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
    {/* Mostrar el boton de proyectos. */}
    <div className="mostrarcv">
      {project ? null: (<button className="btn" onClick={projectClick}><FcOrgUnit/>Proyectos.</button>) }
        {/*Mostrar Projects solo si project es true */}
        {project && <Projects onClose={handleCloseProjects}/>}
    </div>
    </>
  )
}

export default App
