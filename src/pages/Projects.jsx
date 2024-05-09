import { useEffect, useState } from "react";
import axios from 'axios'
import { GrDeploy } from "react-icons/gr";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const Projects = ({onClose}) => {
  // Inicializamos el estado de los proyectos con un array vacion.
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // token de acceso a la api de netlify
    const token = 'nfp_sdnirUEZAPcPsh8KkmDa9LvtSRXKCUu4a6e8'

    axios.get("https://api.netlify.com/api/v1/sites", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        // respuesta de la api.
        console.log('res api', response.data)
        setProjects(response.data);
      })
      .catch((error) => { console.error("Error al obtener la lista de proyectos", error) })
  }, [])

  return (
  
    <div className="projects-container">
      <Router><Link to='/'><button className="close-btn" onClick={onClose}>X</button></Link></Router>
      <h1 className="otro">Proyectos.</h1>
      <div className="div-proyect">
        <p className="parrafo-proyect">Proyectos cargados y estan disponibles desde a la appi de netlify donde se realizo el deploy de cada uno de los proyectos. <GrDeploy/>.</p>
      </div>
      <div className="proyectos">
        {projects.map((project) => (
          <div key={project.id}>
            <img className="imagen" src={project.screenshot_url} alt={project.name} />

            <button className="btn">
              <a href={project.url} target="_black" rel="noopener noreferrer" className="etiqueta">Ver proyecto</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Projects;