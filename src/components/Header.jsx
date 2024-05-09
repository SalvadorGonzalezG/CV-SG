import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import im from '../assets/IMG_0961.jpg'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { RiHtml5Line } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";

import '../index.css'
import { useState } from 'react';
import Popup from './Popup'; // importamos el componente para poder cliquear
import Projects from '../pages/Projects';

const Header = ({ project, setProject, showComponent, setShowComponent }) => {
    // Estado para controlar la visivilidad del popUp.
    const [showPopup, setShowPopup] = useState(false);


    const handleOpen = () => {
        setProject(!project)
        setShowComponent(false) //oculta el componente cv al dar click en proyectos
    }
    const handleClose = () => {
        setShowComponent(false)
    }
    const togglePopup = () => {
        setShowPopup(!showPopup)
    }
    return (
        <>

            <div className="divheader">

                {project ? null : (<Router><Link to='/project'><button onClick={handleOpen} className='btn'>Proyectos</button></Link></Router>)}
                <button className='btn'><FaGithubAlt /></button>
                <button className='btn'><FaLinkedin /></button>
                <button className='btn'><FaFacebook /></button>
            </div>
            {showComponent ? false : project && (<Projects />)}
            <div className="overHeader">
                <div className="im">
                    <img src={im} alt="yo" className='yo' />
                </div>
                <div className="mi">
                    {/**  Boton que cierra mi CV. */}
                    <Router><Link to='/'><button className='top-left-button' onClick={handleClose} >X</button></Link></Router>
                    <div className='txt-ctr'>
                        <h2> GONZÁLEZ GONZÁLEZ SALVADOR.</h2>
                        <p> <strong>PERSONALIDAD:</strong> Soy una persona muy respetuosa, responsable, amable, dedicada y comprometida en mi trabajo,<br/> puedo trabajar solo o en equipo, tengo una gran capacidad de liderazgo, estoy habituado a <br /> trabajar bajo presión y en entornos competitivos.
                        <br /> <strong>OBJETIVO: </strong> Me interesa encontrar un trabajo estable que me permita obtener ingresos
para mis necesidades diarias <br />a través de mis buenos hábitos y habilidades,
ofrecer toda mi experiencia y <br /> optimización desarrolladas en el transcurso 
de mi experiencia laboral y estudios.

                            <br /> <br />Me encanta la tecnologia, desarrollar sofware con JavaScript y react, maquetacion web con HTML y css,
                            
                            </p>
                        <h1 className='icons'>
                            <FaReact /><TbBrandJavascript /><TbBrandCss3 />
                            <RiHtml5Line />
                        </h1>
                    </div>
                    <button onClick={togglePopup} className='btn'>Datos de Contacto <br /> <SlArrowDown /> </button>
                    {/* Mostramos el popup si showPopup es true */}
                    {showPopup && <Popup onClose={togglePopup} />}
                </div>
            </div>

        </>
    )
}

export default Header