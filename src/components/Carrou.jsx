import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
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
          <img className='imgwork' src="https://www.menuprecios.mx/img/menu/cinepolis-vip-menu-mexico.jpg" alt="Imagen 1"/>
          <p className="legend">CINEPOLS </p>
        </div>
        <div >
          <img src="https://ktla.com/wp-content/uploads/sites/4/2023/07/Cinepolis-Hollywood-Park_Exterior-C-Kevin-Korczyk.tif_.jpg?w=1280" alt="Imagen 1" className='imgwork'/>
          <p className="legend">CINEPOLS </p>
        </div>
        <div>
          <img className='imgwork' src="data:image/png;base64,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" alt="Imagen 2" />
          <p className="legend">CIRSA MEXICO </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY00_Za30PoIrG8OKQYonnrAH7p_pea_1WFbjYv252VVNEArngnXjtfs68ZatpFsPO8VI&usqp=CAU" alt="Imagen 3" />
          <p className="legend">Cirsa </p>
        </div>
        <div>
          <img className='imgwork' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAHZFb0AE0RRZpL3hhp8aYiVniBXT-FKvJg&usqp=CAU" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO</p>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Carrou