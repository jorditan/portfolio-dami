import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CardInicio from '../CardInicio';


function About() {

     useEffect(() => {
          AOS.init({
               duration: 2000,
          })
     })

     return (
          <section id="about">
               <div className="contenedorInfoAbout flex">
                    <div className="presentacion flex column" data-aos="fade-right">
                         <h2 className="text-6xl font-bold text-[#303030] dark:text-[#fafafa]">Sobre mi</h2>

                         <p className="font-semibold text-[#303030] dark:text-[#fafafa]">
                              ¡Hola a todos! 👋 Bienvenidos a mi portfolio. Soy profesor de música, compositor, productor y arreglista.
                         </p>
                         <p className="font-semibold text-[#303030] dark:text-[#fafafa]">
                              Tengo 28 años y estoy estudiando la licenciatura en Música en la UNA (Universida Nacional de las Artes).
                              Tengo experiencia dando clases a <span className='font-bold text-[#1d1d1d] dark:text-[#fff59b]'>pequeños y grandes
                                   grupos de alumnos.</span> Se enseñar con diferentes métodos
                              y siempre priorizo el aprendizaje y la comodidad de mis
                              estudiantes.
                         </p>
                    </div>
               </div>
               <CardInicio />
          </section>
     );
}

export default About;