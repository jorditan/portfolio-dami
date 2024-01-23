import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ClasesDetails from './ClasesDetails';
import ClasesInfo from './ClasesInfo';

function ClasesMain() {

     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     return (
          <>
               <section id='bienvenida'>
                    <div className="contenedorBienvenida" data-aos="fade-left">
                         <h1 className='text-6xl font-bold text-[#303030] dark:text-[#fafafa]'>¿Querés aprender a tocar la guitarra y/o el piano?</h1>

                         <p className='text-[#303030] text-sm pt-5 w-full dark:text-[#fafafa]'>Estás en el mejor lugar para aprender. Clases 100% personalizadas, para todas las edades a partir de los 5 años y no requieren experiencia previa</p>

                         <p className="text-[#303030] text-sm dark:text-[#fafafa]">¿Querés saber por qué? Deslizá y enterate de los valores y principios de las clases😊.</p>
                    </div>
               </section>

               <ClasesDetails/>
               <ClasesInfo/>
          </>
     );
}

export default ClasesMain;