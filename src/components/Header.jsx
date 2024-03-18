import im from '../assets/IMG_0961.jpg'

import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { RiHtml5Line } from "react-icons/ri";
const Header = () => {
  return (
    <>
    <div className="divheader">
        <button className='btn'>Sobre mi</button>
        <button className='btn'>Proyectos</button>
        <button className='btn'><FaGithubAlt/></button>
        <button className='btn'><FaLinkedin/></button>
    </div>
    <div className="overHeader">
        <div className="im">
            <img src={im} alt="yo" className='yo' />
        </div>
        <div className="mi">
            <div className='txt-ctr'>
                <h1> CV Gonzalez Gonzalez Salvador.</h1>
                <p> Soy una persona muy respetuosa, responsable, amable, dedicada y comprometida en mi trabajo, puedo trabajar solo o en equipo, tengo una gran capacidad de liderazgo, estoy habituado a trabajar bajo presión y en entornos competitivos.</p>
                <p>Me encanta la tecnologia, desarrollar sofware con JavaScript y react, maquetacion web con HTML y css,</p>

                <h1 className='icons'> 
                    
                    <FaReact/><TbBrandJavascript/><TbBrandCss3/> 
                    <RiHtml5Line/>
                    
                </h1>

            </div>
        </div>
    </div>
    </>
  )
}

export default Header