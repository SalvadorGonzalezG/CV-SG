import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
import { RxHeartFilled } from "react-icons/rx";
import { BsFillHeartPulseFill } from "react-icons/bs";
 // Archivo de estilos CSS personalizado
import { Carousel } from 'react-responsive-carousel';

const CarrouCir = () => {
  return (
    <>
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
        <div >
          <img src="https://i.ytimg.com/vi/Q1VZYJf64nA/hqdefault.jpg" alt="Imagen 1" className='imgwork'/>
          <p className="legend">UAM <RxHeartFilled className='icon'/>.</p>
        </div>
        <div >
          <img src="https://i.ytimg.com/vi/ctUgKsSKkpI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAtlNk1xR3lWQa7NvWwYtcOTqiB7w" alt="Imagen 1" className='imgwork'/>
          <p className="legend">UAM <RxHeartFilled className='icon'/>.</p>
        </div>
        <div>
          <img className='imgwork' src="https://fundit.fr/sites/default/files/styles/max_650x650/public/actors/2314-institut-polytechnique-national-mexique-ipn.jpg?itok=fzgZCqbF" alt="Imagen 2" />
          <p className="legend">IPN <RxHeartFilled className='icon'/>.</p>
        </div>
        <div>
          <img className='imgwork' src="https://www.elsoldemexico.com.mx/mexico/sociedad/3bz7cf-ipn/ALTERNATES/LANDSCAPE_1140/IPN" alt="Imagen 3" />
          <p className="legend">IPN <RxHeartFilled className='icon'/>.</p>
        </div>
        <div>
          <img className='imgwork' src="https://noro.mx/wp-content/uploads/2022/09/devf-manuel-morato-logo-medium-desarrolladores.png" alt="Imagen 3" />
          <p className="legend">DEV-F <BsFillHeartPulseFill className='icon' />.</p>
        </div>
      </Carousel>
      </div>
    </div>
    </>
  )
}

export default CarrouCir