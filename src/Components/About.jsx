import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {

     useEffect(() => {
          AOS.init({
               duration: 2000,
          })
     })

     return (
          <section id="about">
               <div className="contenedorInfoAbout flex" data-aos="fade-right">
                    <div className="presentacion flex column">
                         <h1 className="text-5xl font-bold text-[#303030]">Sobre mi</h1>

                         <p className="font-semibold text-[#303030]">
                              ¡Hola a todos 👋! Bienvenidos a mi portfolio. Soy profesor de música, compositor , productor y arreglista.
                         </p>
                         <p className="font-semibold text-[#303030]">
                              Tengo 28 años y estoy estudiando la licenciatura en Música en la UNA (Universida Nacional de las Artes).
                              Tengo experiencia dando clases a pequeños y grandes
                              grupos de alumnos. Se enseñar con diferentes métodos
                              y siempre priorizo el aprendizaje y la comodidad de mis
                              estudiantes.
                         </p>
                    </div>

                    <div className="contenedorImagen flex column">

                    </div>
               </div>
          </section>
     );
}

export default About;