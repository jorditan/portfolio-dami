import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Redes() {
     return (
          <>
               <ul className="redesList flex">
                    <li  className="redesItem">
                         <a href="https://www.instagram.com/damianjmusica/" target="blank"><FaInstagram className="redesIcon"/></a>
                    </li>

                    <li className="redesItem">
                         <a href="https://www.linkedin.com/in/damiannahueljordan/" target="blank"><FaLinkedin className="redesIcon"/></a>
                    </li>

                    <li className="redesItem">
                         <a href="https://www.facebook.com/damianjmusica" target="blank"><FaFacebook className="redesIcon"/></a>
                    </li>
               </ul>
          </>
     );
}

export default Redes;