import { LuListMusic } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import { useEffect, useState } from "react";


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
               setMenuNav('navList');
               setActivado(false);
          }
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
                              <li className="navItem"><LuListMusic className="iconNav"/>
                                   <a href="#" className="navLink">Composiciones</a>
                              </li>

                              <li className="navItem"><GoInfo className="iconNav"/>
                                   <a href="#" className="navLink">Mi carrera</a>
                              </li>

                              <DropDown/>
                         </ul>

                         <div className={`menuHamburguesa flex column ${!pulsado ? '' : 'pulsado'}`} onClick={mostrarMenu}>
                              <div className="linea1"></div>
                              <div className="linea2"></div>
                              <div className="linea3"></div>
                         </div>
                    </nav>
               </header>
          </>
     );
}

export default NavBar;