import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CardInicio() {
     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     return (
          <article id="cardAbout">
               <div className="contenedorCard flex" data-aos="fade-down">
                    <div className="card proyectosPersonales">
                         <div className="contenedorLink flex">
                              <a href="#" className="text-3xl font-bold text-[#fafafa]">Proyectos personales</a>
                         </div>
                    </div>

                    <div className="card clases">
                    <div className="contenedorLink flex">
                              <a href="#" className="text-3xl font-bold text-[#fafafa]">Clases</a>
                         </div>
                    </div>
               </div>
          </article>
     );
}

export default CardInicio;