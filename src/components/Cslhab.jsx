import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
 // Archivo de estilos CSS personalizado
import { Carousel } from 'react-responsive-carousel';

//icons
import { FcBookmark } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const Cslhab = () => {
  return (
    <div className="carousel-container">
      <div className="carrousel-content1">
      <Carousel
        autoPlay={true} // Para que el carrusel se reproduzca automáticamente
        infiniteLoop={true} // Para que el carrusel continúe en un bucle infinito
        showStatus={false} // Para ocultar el indicador de estado
        showThumbs={false} // Para ocultar las miniaturas
        interval={1000} // Intervalo de tiempo entre diapositivas (en milisegundos)
        stopOnHover={true} // Para detener la reproducción automática al pasar el ratón por encima
      >
        <div >
          <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ucL7YQ2v8aaOy426soLPZA.png" alt="Imagen 1" className='imgwork'/>
          <p className="legend">CINEPOLS <FcBookmark/></p>
        </div>
        <div >
          <img src="https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg" alt="Imagen 1" className='imgwork'/>
          <p className="legend">CINEPOLS <FcBookmark/></p>
        </div>
        <div>
          <img className='imgwork' src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="Imagen 2" />
          <p className="legend">CIRSA MEXICO <FcFlashOn/></p>
        </div>
        <div>
          <img className='imgwork' src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" alt="Imagen 3" />
          <p className="legend">Cirsa <FcFlashOn/></p>
        </div>
        <div>
          <img className='imgwork' src="https://blog.dastasoft.com/_next/image?url=%2Fassets%2Fposts%2Fpreview%2Fredux-toolkit.webp&w=2048&q=75" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO <FcLike/></p>
        </div>
        <div>
          <img className='imgwork' src="https://miro.medium.com/v2/resize:fit:1400/1*9oOlDJKiLq1KhGoOivv51A.png" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO <FcLike/></p>
        </div>
        <div>
          <img className='imgwork' src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/node-mongodb-fundamentals.png" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO <FcLike/></p>
        </div>
        <div>
          <img className='imgwork' src="https://user-images.githubusercontent.com/89209997/143485869-66e4f16b-932b-4a5a-81f7-6f5101f65538.png" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO <FcLike/></p>
        </div>
        <div>
          <img className='imgwork' src="https://www.muylinux.com/wp-content/uploads/2021/07/SQL-Server.jpg" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO <FcLike/></p>
        </div>
        <div>
          <img className='imgwork' src="https://www.muylinux.com/wp-content/uploads/2017/10/postgresql.png" alt="Imagen 3" />
          <p className="legend">CIRSA MEXICO <FcLike/></p>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Cslhab