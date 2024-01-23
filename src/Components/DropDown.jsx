import { FaChalkboardTeacher } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { Link} from "react-router-dom";


function DropDown({activado, pulsado, colorNav, menuNav, cerrarMenu}) {
     const [estado, setEstado] = useState(false);
     const [dropDown, setDrop] = useState('dropDown');

     

     const mostrarDrop = () => {
          setEstado(!estado);
          if (estado == false) {
               setDrop('dropDown invisible');
          } else {
               setDrop('dropDown visible')
          }
     }

     const ocultarDrop = (e) => {
          e.preventDefault()
          if (estado) {
               setEstado(false);
               setDrop('dropDown invisible');
          }
     };

     let menuRef = useRef()

     useEffect(() => {
          setDrop(estado ? 'dropDown visible' : 'dropDown invisible');
     }, [estado]);


     return (
          <>
               <div className="dropDownMenu">
                    <div className="navItem text-[#303030] dark:text-[#fafafa]" onClick={mostrarDrop}>
                         <FaChalkboardTeacher className="iconNav" />
                         <span className="navLink">Clases</span>
                    </div>

                    <ul className={`bg-[#303030] dark:bg-[#fafafa] text-[#fafafa] dark:text-[#303030]] ${dropDown}`} ref={menuRef} onMouseLeave={ocultarDrop}>
                         <li>
                              <Link onClick={()=> cerrarMenu()} to="/infoClases" className="navLink text-[#fafafa] dark:text-[#303030]">Info</Link>
                         </li>

                         <li>
                              <Link onClick={()=> cerrarMenu()} to="/presupuestoClases" className="navLink text-[#fafafa] dark:text-[#303030]">Presupuesto</Link>
                         </li>
                    </ul>
               </div>
          </>
     );
}

export default DropDown;