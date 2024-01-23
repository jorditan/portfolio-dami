import FotoDamiMain from '../assets/img/FotoDamiMain.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Botones from './Botones'

function CardPresentacion() {

     useEffect(() => {
          AOS.init();
     }, [])
     return (
          <div className="contenedorReproductor flex column" data-aos="fade-up">
               <div className="contenedorImagen bg-[#303030] dark:bg-[#fafafa]">
                    <img src={FotoDamiMain} alt="Damián Nahuel Jordán" />
               </div>

               <div className="contenedorTextoRep flex column">
                    <p className='text-lg  font-semibold text-[#303030] dark:text-[#fafafa] '>¡Bienvenidos a mi portfolio!</p>
                    <p className='text-lg font-semibold text-[#303030] dark:text-[#fafafa]'>¿Quéres conocerme más? Deslizá hacia abajo.</p>
               </div>
          </div>
     );
}

export default CardPresentacion;