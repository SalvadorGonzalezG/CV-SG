import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
 // Archivo de estilos CSS personalizado
import { Carousel } from 'react-responsive-carousel';
import '../index.css'
const Carrou = () => {
  return (
    <div className="carousel-container1">
      <div className="carrousel-content1">
      <Carousel
        autoPlay={true} // Para que el carrusel se reproduzca automáticamente
        infiniteLoop={true} // Para que el carrusel continúe en un bucle infinito
        showStatus={false} // Para ocultar el indicador de estado
        showThumbs={false} // Para ocultar las miniaturas
        interval={2000} // Intervalo de tiempo entre diapositivas (en milisegundos)
        stopOnHover={true} // Para detener la reproducción automática al pasar el ratón por encima
        transitionTime={500} // Tiempo de transición entre diapositivas
          showIndicators={true} 
     >
        <div >
          <img className="imgwork" src="https://i.pinimg.com/400x/65/dd/ba/65ddbadb1dd89ec02aec582f0e73e794.jpg" alt="Imagen 1"/>
          <p className="legend">UAM </p>
        </div>
        <div >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLtD0gYUO2PXXaqq_Icfcl4CRcNvQKtfoRVVOC9ypsg&s" alt="Imagen 1" className='imgwork'/>
          <p className="legend">CINEPOLS </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP6GQsEJxmiPSfvb4R4IwjXr2puhcBKncm2IoKoFKJgZeU99kQ4XZmZdDK1MMvmLTgQA&usqp=CAU" alt="Imagen 2" />
          <p className="legend">CIRSA MEXICO </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY00_Za30PoIrG8OKQYonnrAH7p_pea_1WFbjYv252VVNEArngnXjtfs68ZatpFsPO8VI&usqp=CAU" alt="Imagen 3" />
          <p className="legend">Cirsa </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAHZFb0AE0RRZpL3hhp8aYiVniBXT-FKvJg&usqp=CAU" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO </p>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Carrou