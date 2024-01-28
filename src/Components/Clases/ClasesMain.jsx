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
                         <h1 className='text-6xl font-bold w-3/4 text-[#303030] dark:text-[#fafafa]'>¿Querés aprender a tocar la guitarra y/o el piano?</h1>

                         <p className='text-[#303030] text-sm pt-5 w-3/4 dark:text-[#fafafa]'>Estás en el mejor lugar para aprender. Clases 100% personalizadas, para todas las edades a partir de los 5 años y no requieren experiencia previa. 
                         <span className='font-bold text-[#1d1d1d] dark:text-[#fff5b7]'> ¿Querés saber por qué?</span> Deslizá y enterate de los valores y principios de las clases😊.
                         </p>
                    </div>
               </section>

               <ClasesDetails/>
               <ClasesInfo/>
          </>
     );
}

export default ClasesMain;