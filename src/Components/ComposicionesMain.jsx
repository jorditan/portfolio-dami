import '../CSS/composiciones.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Composiciones() {
     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     const composiciones = [
          {

          },
          {

          },
          {

          },
          {

          },
     ]

     return (
          <section id='composiciones'>
               <div className="contenedorBienvenida" data-aos="fade-right">
                    <h1 className='text-7xl font-bold text-[#303030]'>Mis composiciones</h1>
                    <p className='pt-5 text-[#303030] text-sm w-full'>Trabajos realizados en proyectos personales, 
                    canciones, trabajos universitarios, entre otros.</p>
               </div>

               <div className="contenedorCards">
                    <article >

                    </article>
               </div>
          </section>
     );
}

export default Composiciones;