import { LuListMusic } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";

import DropDown from '../Components/DropDown';

function NavBar() {
     
     const [activado, setActivado] = useState(false);
     const [pulsado, setPulsado] = useState(false);
     const [menuNav, setMenuNav] = useState('navList');
     const [colorNav, setColorNav] = useState('transparent');

     const mostrarMenu = () => {
          setActivado(!activado);
          setPulsado(!pulsado);
          if (activado == false) {
               setMenuNav('navList visible');
               setColorNav('navBarNegra');
               setActivado(true);
          }
          else {
               cerrarMenu()
          }
     }

     const cerrarMenu = () => {
          setMenuNav('navList');
          setColorNav('transparent')
          setActivado(false);
          setPulsado(false);
     }

     useEffect(() => {
          document.addEventListener('scroll',() => {
               if (window.scrollY > 0 || activado != false) {
                    setColorNav('navBarNegra');
               } else {
                    setColorNav('transparent')
               }
          })
     },[activado])


     return (
          <>
               <header>
                    <nav className={`navBar ${colorNav}`}>                    
                         <ul className={menuNav}>
                              <li className="navItem"><IoHome className="iconNav"/>
                                   <Link onClick={cerrarMenu}  to="/" className="navLink">Inicio</Link>
                              </li>

                              <li className="navItem"><LuListMusic className="iconNav"/>
                                   <Link onClick={cerrarMenu}  to="/composiciones" className="navLink" >Composiciones</Link>
                              </li>

                              <li className="navItem"><GoInfo className="iconNav"/>
                                   <Link onClick={cerrarMenu} to="/micarrera" className="navLink">Mi carrera</Link>
                              </li>

                              <DropDown menuNav={menuNav} activado={activado} cerrarMenu={cerrarMenu} />
                         </ul>

                         <div className={`menuHamburguesa flex column ${!pulsado ? '' : 'pulsado'}`} onClick={mostrarMenu}>
                              <div className="linea1"></div>
                              <div className="linea2"></div>
                              <div className="linea3"></div>
                         </div>
                    </nav>
               </header>
               <Outlet/>
          </>
     );
}

export default NavBar;