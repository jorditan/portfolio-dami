import { FaChalkboardTeacher } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { Link} from "react-router-dom";


function DropDown() {
     const [estado, setEstado] = useState(false);
     const [dropDown, setDrop] = useState('dropDown');

     const mostrarDrop = (e) => {
          e.preventDefault();
          if (estado == false) {
               setEstado(true);
               setDrop('dropDown visible')
          }
     }

     const ocultarDrop = () => {
          if (estado) {
               setEstado(false);
               setDrop('dropDown invisible');
          }
     };

     let menuRef = useRef()

     useEffect(() => {
          document.addEventListener('mousedown', ocultarDrop);
     })

     useEffect(() => {
          setDrop(estado ? 'dropDown visible' : 'dropDown invisible');
     }, [estado]);


     return (
          <>
               <div className="dropDownMenu">
                    <div className="navItem" onMouseEnter={mostrarDrop}>
                         <FaChalkboardTeacher className="iconNav" />
                         <span className="navLink">Clases</span>
                    </div>

                    <ul className={dropDown} ref={menuRef}>
                         <li>
                              <Link to="/infoClases" className="navLink">Info</Link>
                         </li>

                         <li>
                              <Link to="/presupuestoClases" className="navLink">Presupuesto</Link>
                         </li>
                    </ul>
               </div>
          </>
     );
}

export default DropDown;