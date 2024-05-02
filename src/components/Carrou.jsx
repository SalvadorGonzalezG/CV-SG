import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
import { GiCardAceHearts, GiCardAceSpades, GiCardAceDiamonds, } from "react-icons/gi";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

import { FaAppleAlt } from "react-icons/fa";




 // Archivo de estilos CSS personalizado
import { Carousel } from 'react-responsive-carousel';
import '../index.css'
const Carrou = () => {
  return (
    <div className="carousel-container">
      <div className="carrousel-content">
      <Carousel
        autoPlay={true} // Para que el carrusel se reproduzca automáticamente
        infiniteLoop={true} // Para que el carrusel continúe en un bucle infinito
        showStatus={false} // Para ocultar el indicador de estado
        showThumbs={false} // Para ocultar las miniaturas
        interval={5000} // Intervalo de tiempo entre diapositivas (en milisegundos)
        stopOnHover={true} // Para detener la reproducción automática al pasar el ratón por encima
      >
        <div>
          <img className='imgwork' src="https://camescom.mx/wp-content/uploads/2022/02/Logos_PROMOCIONES-E-INVERSIONES-DE-GUERRERO.jpg" alt="Imagen 1"/>
          <p className="legend">CIRSA MÉXICO <FaAppleAlt/>.</p>
        </div>
        <div >
          <img src="https://imagenesyogonet.b-cdn.net/data/imagenes/2020/11/24/34001/1625361723-cirsa-mexico-casino-emotion-jai-alai.jpg" alt="Imagen 1" className='imgwork'/>
          <p className="legend">CIRSA MX <GiCardAceHearts/>.</p> 
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLtD0gYUO2PXXaqq_Icfcl4CRcNvQKtfoRVVOC9ypsg&s" alt="Imagen 2" />
          <p className="legend">CASINO LIFE <GiCardAceSpades/>.</p>
        </div>
        <div>
          <img className='imgwork' src="https://cdn.element.com.mx/logo_cirsa_general.png" alt="Imagen 3" />
          <p className="legend">Cirsa <GiCardAceDiamonds/>. </p>
        </div>
        <div>
          <img className='imgwork' src="https://www.jocprivat.com/images/jp-empreses/cirsa/CIRSA_Mexico.jpg" alt="Imagen 3" />
          <p className="legend">CORP CIRSA MÉXICO <HiMiniBuildingOffice2/>.</p>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Carrou