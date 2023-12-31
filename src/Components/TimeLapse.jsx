import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function TimeLapse() {

     const lapse = [
          {
               texto: 'Comienzo de mi carrera docente, dando clases de guitarra y piano en mi hogar',
               año: '2014'
          },
          {
               texto: 'Empiezo a dar clases de lenguaje y teoría musical, funcionando como  apoyo escolar para los alumnos de conservatorio.Luego esta práctica se expandió para el resto de la comunidad.',
               año: '2016'
          },
          {
               texto: 'Durante este año enseñe guitarra en el taller “LiberArte” en Haedo, provincia de Buenos Aires.',
               año: '2017'
          },
          {
               texto: 'Ya a principios de 2018, me incorporé a “Mandala Moviliza” en Ituzaingó, como profesor de piano/teclado para niños. Por ese entonces, comencé a adentrarme en el mundo de la composición y arreglos, escribiendo obras para cuarteto de cuerdas, ensambles musicales y música electroacústica e incidental.',
               año: '2018'
          },
          {
               texto: 'En el contexto de encierro por la pandemia, comencé a dar clases en linea a mis alumnos particulares. De esta forma me permití expandir mis enseñanzas a todas las partes del mundo.',
               año: '2020'
          },
     ]

     useEffect(() => {
          AOS.init({
               duration: 1000,
          });
     }, [])

     return (
          <>
               <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {lapse.map((lap, index) => (
                         <li key={index}>
                              <div className="timeline-middle ">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fafafa" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                              </div>
                              <div className="timeline-start md:text-end mb-10 
                              odd:timeline-end container">
                                   <time className="text-2xl text-[#fafafa] font-bold">{lap.año}</time>
                                   <p className="text-[#fafafa] font-semibold text-lg">
                                        {lap.texto}
                                   </p>
                              </div>
                              <hr />
                         </li>
                    ))}

               </ul>
          </>
     );
}

export default TimeLapse;