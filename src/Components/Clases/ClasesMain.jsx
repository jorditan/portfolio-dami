import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ClasesDetails from './ClasesDetails';
import ClasesInfo from './ClasesInfo';
import ChatBubble from '../ChatBubble';


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
                         <h1 className='text-6xl font-bold text-[#303030]'>¿Querés aprender a tocar la guitarra y/o el piano?</h1>

                         <p className='text-[#303030] text-sm pt-5 w-full'>Estás en el mejor lugar para aprender. Clases 100% personalizadas, para todas las edades a partir de los 5 años y no requieren experiencia previa</p>
                    </div>

                    <article id='opiniones' className='flex column w-full justify-left gap-5 pt-14' data-aos="fade-up">
                         <ChatBubble/>
                    </article>
               </section>

               <ClasesDetails/>
               <ClasesInfo/>
          </>
     );
}

export default ClasesMain;