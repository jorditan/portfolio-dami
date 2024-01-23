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
          {
               texto: 'En este año me incorporé al  Orange High School. como profesor de piano,arreglador orquestal y profesor de ensamble.  Allí aprendí a enseñar a grandes gruposde estudiantes y a poner en práctica mi creatividad en los arreglos para los chicos, en los cuales tenemos que lograr una coordinación perfecta entre música, danza y actuación, ya que se trata de un trabajo en equipo e interdisciplinario.',
               año: '2022'
          },
          {
               texto: 'Para el 2023 yo sabía que mi futuro estaba en el trabajo online,  centrado en la enseñanza y en la creatividad.  Es por eso que me  incorporé a Hemisferio Derecho Artes-Perú, donde doy  clases de piano y guitarra a distancia También trabajé para Montessori Hub (Polonia) siendo maestro guía para chicos de edad pre-escolar.',
               año: '2023'
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
                         <li key={index} data-aos="fade-up">
                              <div className="timeline-middle ">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#303030" className="h-5 w-5 dark:fill-[#fafafa]"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="303030" /></svg>
                              </div>
                              <div className="timeline-start md:text-end mb-10 
                              odd:timeline-end container">
                                   <time className="text-5xl text-[#303030] font-bold dark:text-[#fafafa]">{lap.año}</time>
                                   <p className="text-[#303030] font-medium text-sm dark:text-[#fafafa]">
                                        {lap.texto}
                                   </p>
                              </div>
                              <hr className="color-[#303030]" />
                         </li>
                    ))}

               </ul>
          </>
     );
}

export default TimeLapse;