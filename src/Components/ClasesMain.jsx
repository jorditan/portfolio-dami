import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CardOpinion from './CardOpinion';
import ClasesDetails from './ClasesDetails';

function ClasesMain() {

     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     const opiniones = [
          {
               alumno: 'Federico Negri',
               texto: '"Hacía 4 años no tocaba el piano y con sus clases pude rescatar el amor por el instrumento, la música y disfrutar a medida que voy aprendiendo. La verdad súper recomendado y un gran profesor!"',
               genero: 'Alumno',
          },
          {
               alumno: 'Lautaro Vrech',
               texto: '"Comencé hace unos meses y estoy super entusiasmado! Damián explica muy bien y con mucha paciencia. Se nota el amor y la predisposición con la que lo hace. Clases personalizadas y con precios accesibles. Recomiendo!"',
               genero: 'Alumno',
          },
     ]
     return (
          <main id="clasesMain">
               <section id='bienvenida'>
                    <div className="contenedorBienvenida" data-aos="fade-left">
                         <h1 className='text-6xl font-bold text-[#303030]'>¿Querés aprender a tocar la guitarra y/o el piano?</h1>

                         <p className='text-[#303030] text-sm pt-5 w-full'>Estás en el mejor lugar para aprender. Clases 100% personalizadas, para todas las edades a partir de los 5 años y no requieren experiencia previa</p>
                    </div>

                    <article id='opiniones' className='flex justify-left gap-20 pt-14' data-aos="fade-up">
                         {opiniones.map((opinion, index) => (
                              <CardOpinion key={index} opinion={opinion} />
                         ))}
                    </article>
               </section>

               <ClasesDetails/>
          </main>
     );
}

export default ClasesMain;