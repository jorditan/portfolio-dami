import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import LogoDami from '../assets/img/LogoDami.webp';
import { Link } from "react-router-dom";

function Footer() {
     return (
          <footer id="footer" className="flex column">
               <div className="filaSuperior flex pl-24">
                    <section className="contenedorInfoFooter logo">
                         <div className="contenedorImg pt-4">
                              <img src={LogoDami} alt="Logo tus clases de música personalizadas" />
                         </div>

                         <p className="pt-5 text-sm text-[#fafafa]">Tus clases de música personalizadas</p>
                    </section>

                    <section className="contenedorInfoFooter">
                         <div className="contenedor flex pt-2 pl-24 column h-full">
                              <h3 className="text-md text-[#f2f0fc] font-bold">Más información</h3>
                              <ul className="dudasList flex column gap-3 h-full justify-center">
                                   <li className="dudasList">
                                        <Link to="/micarrera" className="redesLink flex items-center text-sm text-[#fafafa] gap-2 text-center hover:text-[#c7c7c7]">Mi experiencia</Link>
                                   </li>

                                   <li className="dudasItem">
                                        <a href="" className="redesLink flex items-center text-sm text-[#fafafa] gap-2 hover:text-[#c7c7c7]">Métodos de pago</a>
                                   </li>
                                   <li className="dudasItem">
                                        <a href="" className="redesLink flex items-center text-sm text-[#fafafa] gap-2 hover:text-[#c7c7c7]">Dudas frecuentes</a>
                                   </li>
                              </ul>
                         </div>
                    </section>

                    <section className="contenedorInfoFooter">
                         <div className="contenedorRedesList flex column pt-2 h-full">
                              <h3 className="text-md text-[#f2f0fc] font-bold">Redes sociales</h3>
                              <ul className="redesList flex column gap-3 h-full justify-center">
                                   <li className="redesItemf">
                                        <a className="redesLink flex items-center text-sm text-[#fafafa] gap-2 hover:text-[#c7c7c7]" href="https://www.facebook.com/damianjmusica" target="blank"><FaFacebook/>Facebook</a>
                                   </li>

                                   <li className="redesItem">
                                        <a className="redesLink flex items-center text-sm text-[#fafafa] gap-2 hover:text-[#c7c7c7]" href="https://www.instagram.com/damianjmusica/" target="blank"><FaInstagram/>Instagram</a>
                                   </li>
                                   <li className="redesItem">
                                        <a className="redesLink flex items-center text-sm text-[#fafafa] gap-2 hover:text-[#c7c7c7]" href="https://www.linkedin.com/in/damiannahueljordan/" target="blank"><FaLinkedin/>linkedIn</a>
                                   </li>
                              </ul>
                         </div>
                    </section>
               </div>

               <div className="filaInferior flex justify-center items-center">
                    <div className="contenedorAuditoria w-3/4 pl-24">
                         <p className="text-[#afaeb4] text-xs">Todos las composiciones y proyectos personales son parte de <span className="font-bold text-[#c7c7c7]">mi autoría.</span> En caso de querer más información contactarse conmigo</p>
                    </div>

                    <div className="contenedorMail w-1/4 flex justify-left items-center">
                         <IoMdMail  id="iconMail"/>
                         <a href="https://mail.google.com/" className="text-xs text-[#afaeb4] hover:text-[#c7c7c7] pl-2">damiannjordan@gmail.com</a>
                    </div>

               </div>
          </footer>
     );
}

export default Footer;