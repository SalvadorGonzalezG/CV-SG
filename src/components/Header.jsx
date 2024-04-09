
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

const Header = ({showComponent, setShowComponent}) => {
// Estado para controlar la visivilidad del popUp.
    const [showPopup, setShowPopup] = useState(false);

    const handleClose=()=>{
        setShowComponent(false)
    }
    const togglePopup=()=>{
        setShowPopup(!showPopup)
    }
  return (
    <>

    <div className="divheader">
        <button className='btn'>Proyectos</button>
        <button className='btn'><FaGithubAlt/></button>
        <button className='btn'><FaLinkedin/></button>
        <button className='btn'><FaFacebook/></button>
        <button onClick={handleClose} > Cerrar cv</button>
    </div>
    <div className="overHeader">
        <div className="im">
            <img src={im} alt="yo" className='yo' />
        </div>
        <div className="mi">
            <div className='txt-ctr'>
                <h2> VISTA PROJECT.</h2>
                <p> Soy una persona muy respetuosa, responsable, amable, dedicada y comprometida en mi trabajo, puedo trabajar solo o en equipo, tengo una gran capacidad de liderazgo, estoy habituado a trabajar bajo presión y en entornos competitivos.
                <br /> <br />Me encanta la tecnologia, desarrollar sofware con JavaScript y react, maquetacion web con HTML y css,</p>
                <h1 className='icons'> 
                    <FaReact/><TbBrandJavascript/><TbBrandCss3/> 
                    <RiHtml5Line/>
                </h1>                
            </div>
            <button onClick={togglePopup} className='cont'>Datos de Contacto <br /> <SlArrowDown/> </button>
            {/* Mostramos el popup si showPopup es true */}
            {showPopup && <Popup onClose={togglePopup}/>}
        </div>
    </div>
    
    </>
  )
}

export default Header