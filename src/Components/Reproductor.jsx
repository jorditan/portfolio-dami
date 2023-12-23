import fotoReproductor from '../assets/img/fotoReproductor.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Botones from './Botones'

function Reproductor() {

     useEffect(() => {
          AOS.init();
     }, [])
     return (
          <div className="contenedorReproductor flex column" data-aos="fade-up">
               <div className="contenedorImagen">
                    <img src={fotoReproductor} alt="" />
               </div>

               <div className="contenedorTextoRep flex column">
                    <p className='text-lg  font-semibold text-[#303030] '>¡Bienvenidos a mi portfolio!</p>
                    <p className='text-lg font-semibold text-[#303030]'>¿Quéres conocerme más? Deslizá hacia abajo.</p>
               </div>
               
               {/* <Botones/> */}

               <p className='nombreDeLaCancion'></p>

          </div>
     );
}

export default Reproductor;