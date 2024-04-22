import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
 // Archivo de estilos CSS personalizado
import { Carousel } from 'react-responsive-carousel';

//icons
import { FcBookmark } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const Carrousel1 = () => {
  return (
    <div className="carousel-container" data-aos="zoom-in-right">
      <div className="carrousel-content" >
      <Carousel
        autoPlay={true} // Para que el carrusel se reproduzca automáticamente
        infiniteLoop={true} // Para que el carrusel continúe en un bucle infinito
        showStatus={false} // Para ocultar el indicador de estado
        showThumbs={false} // Para ocultar las miniaturas
        interval={5000} // Intervalo de tiempo entre diapositivas (en milisegundos)
        stopOnHover={true} // Para detener la reproducción automática al pasar el ratón por encima
      >
        <div>
          <img className='imgwork' src="https://www.menuprecios.mx/img/menu/cinepolis-vip-menu-mexico.jpg" alt="Imagen 1"/>
          <p className="legend">CINEPOLIS.<FcBookmark/></p>
        </div>
        <div >
          <img src="http://www.towncenterelrosario.com.mx/wp-content/uploads/2019/07/cinepolislogo.jpg" alt="Imagen 2" className='imgwork'/>
          <p className="legend">CINEPOLIS <FcBookmark/></p>
        </div>
        <div>
          <img className='imgwork' src="https://mx.web.img3.acsta.net/r_1280_720/newsv7/22/06/22/01/44/1659508.jpg" alt="Imagen 3" />
          <p className="legend">CINEPOLIS MÉXICO <FcFlashOn/></p>
        </div>
        <div>
          <img className='imgwork' src="https://www.cronista.com/files/image/671/671483/64f241ab4c4c0.jpg" alt="Imagen 4" />
          <p className="legend">Cinepolis MÉXICO. <FcFlashOn/></p>
        </div>
        
      </Carousel>
      </div>
    </div>
  )
}

export default Carrousel1