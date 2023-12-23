import { FaChalkboardTeacher } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";


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

     let menuRef = useRef()

     useEffect(() => {
          const ocultarDrop = (e) => {
               if (!menuRef.current.contains(e.target)) {
                    setEstado(false);
                    setDrop('dropDown invisible')
               }
          }
          document.addEventListener('mousedown', ocultarDrop )
     })

     useEffect(() => {
          setDrop(estado ? 'dropDown visible' : 'dropDown invisible');
     }, [estado]);



     return (
          <>
               <div className="dropDownMenu">
                    <div className="navItem">
                         <FaChalkboardTeacher className="iconNav" />
                         <span className="navLink" onClick={mostrarDrop}>Clases</span>
                    </div>

                    <ul className={dropDown} ref={menuRef}>
                         <li>
                              <a href="#" className="navLink">Info</a>
                         </li>

                         <li>
                              <a href="#" className="navLink">Presupuesto</a>
                         </li>
                    </ul>
               </div>
          </>
     );
}

export default DropDown;