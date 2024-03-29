import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CarreraMain() {
     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     return (
          <>
               <section id="carrera">
                    <div className= "dark:text-[#fafafa] contenedorBienvenida flex column" data-aos="fade-right">
                         <div className="titulo flex column">
                              <h1 className="text-6xl font-bold text-[#303030] dark:text-[#fafafa]">¿Cómo llegué a ser profesor?</h1>

                              <p className="text-sm text-[#303030] pt-4 dark:text-[#fafafa]">Acompañame a darle un vistazo a mi carrera...</p>
                         </div>

                         <div className="parrafos flex column pt-12 gap-5 w-3/4">
                              <p className='text-[#303030] text-md dark:text-[#fafafa]'>Mi pasión por la música comenzó desde muy chico, escuchando música clásica en la radio. Tuve la oportunidad de ver en un club en frente de mi casa una orquesta completa en vivo y poder hablar con ellos. Esta llama interna se intensificó con las <span className='font-bold text-[#1d1d1d dark:text-[#fff59b]'>bandas sonoras de videojuegos</span> como: Final Fantasy y Dragon Quest.</p>

                              <p className='text-[#303030] text-md font-semibold dark:text-[#fafafa]'>Ya adolescente me interesé por la guitarra al escuchar los increíbles solos de <span className='font-bold text-[#1d1d1d] dark:text-[#fff59b] '>David Gilmour.</span> Al poco tiempo mi amor por la música de <span className='font-bold text-[#1d1d1d] dark:text-[#fff59b]'>Charly Garcia</span> me llevó a tocar el piano. </p>

                              <p className='text-[#303030] text-md font-semibold dark:text-[#fafafa]'>Cuando me sentí preparado, empecé a dar clases y descubrí la <span className='font-bold text-[#1d1d1d] dark:text-[#fff59b] '>vocación de mi vida.</span></p>
                         </div>
                    </div>

                    <div className="contenedor pt-12">
                         <h2 className='text-2xl font-bold text-[#303030] dark:text-[#fafafa]'>¡Seguí conociéndome viendo la línea de tiempo!</h2>

                         <p className='text-[#303030] text-sm dark:text-[#fafafa]'>También te invito a descargar mi CV</p>

                         <a href="src/assets/img/CV Damian Nahuel Jordan.pdf" target='blank'>
                              <button className="btn btn-outline mt-5 text-[#303030] hover:bg-[#303030] hover:text-[303030] dark:text-[#fafafa] dark:hover:bg-[#fafafa]">Descarga mi CV</button>
                         </a>
                    </div>
               </section>
          </>
     );
}

export default CarreraMain;