
import { MdPhone, MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FcContacts } from "react-icons/fc";
import { TiHome } from "react-icons/ti";
import { RiMapPinUserFill, RiPinDistanceFill } from "react-icons/ri";


// importamos los estilos directamente del documento donde se colocaron
import '../index.css';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>Cerrar</button>
        <img className='img' src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Yo" />
    
        <h2><FcContacts/> Datos de contacto.</h2>
        <h4><RiMapPinUserFill/> Direccion:</h4>
        <p> Ciudad Nezahualcoyotl Edo.Méx, Col.Benito Juarez. CP.57000</p>
        <h4><IoIosMail/> Correo(s):</h4>
        <p>salvadorGonzalezG@outlook.com <br /> salvadorsopas@gmail.com</p>
        <h4><MdPhone/> Telefono(s):</h4>
        <p><TiHome/> 55-57-31-47-54 <br /> <MdOutlinePhoneIphone/> 55-73-64-43-77</p>
        {/* Aquí puedes agregar los datos de contacto y la imagen */}
      </div>
    </div>
  );
};

export default Popup;