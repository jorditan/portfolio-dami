import { LuListMusic } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import BotonSwitch from "./BotonSwitch";
import DropDown from '../Components/DropDown';

function NavBar() {

     const [activado, setActivado] = useState(false);
     const [pulsado, setPulsado] = useState(false);
     const [menuNav, setMenuNav] = useState('navList');
     const [colorNav, setColorNav] = useState('transparent');
     const [opacidad, setOpacidad] = useState('');

     const mostrarMenu = () => {
          setActivado(!activado);
          setPulsado(!pulsado);
          if (activado == false) {
               setMenuNav('navList visible');
               setColorNav('navBarNegra');
               setActivado(true);
               setOpacidad('opacidadMaxima')
          }
          else {
               cerrarMenu()
          }
     }

     const cerrarMenu = () => {
          setMenuNav('navList');
          setColorNav('transparent')
          setOpacidad('');
          setActivado(false);
          setPulsado(false);
     }

     useEffect(() => {
          document.addEventListener('scroll', () => {
               if (window.scrollY > 0 || activado != false) {
                    setColorNav('navBarNegra');
               } else {
                    setColorNav('transparent')
               }
          })
     }, [activado])


     return (
          <>
               <header>
                    <nav className={`navBar ${colorNav} ${opacidad}`}>
                    <BotonSwitch />
                         <ul className={menuNav}>
                              <li className="navItem text text-[#303030]"><IoHome className="iconNav text-[#303030] dark:text-[#fafafa]" />
                                   <Link preventScrollReset={true} onClick={cerrarMenu} to="/" className="navLink text-[#303030] dark:text-[#fafafa]">Inicio</Link>
                              </li>

                              <li className="navItem text-[#303030]"><LuListMusic className="iconNav text-[#303030] dark:text-[#fafafa]" />
                                   <Link preventScrollReset={true} onClick={cerrarMenu} to="/composiciones" className="navLink text-[#303030] dark:text-[#fafafa]" >Composiciones</Link>
                              </li>

                              <li className="navItem text-[#303030] dark:text-[#fafafa]"><GoInfo className="iconNav" />
                                   <Link preventScrollReset={true} onClick={cerrarMenu} to="/micarrera" className="navLink text-[#303030] dark:text-[#fafafa]">Mi carrera</Link>
                              </li>

                              <DropDown
                                   menuNav={menuNav}
                                   activado={activado}
                                   cerrarMenu={cerrarMenu}
                                   colorNav={colorNav}
                                   pulsado={pulsado}
                              />
                         </ul>

                         <div className={`menuHamburguesa flex column ${!pulsado ? '' : 'pulsado'}`} onClick={mostrarMenu}>
                              <div className="linea1"></div>
                              <div className="linea2"></div>
                              <div className="linea3"></div>
                         </div>
                    </nav>
               </header>
               <Outlet />
          </>
     );
}

export default NavBar;