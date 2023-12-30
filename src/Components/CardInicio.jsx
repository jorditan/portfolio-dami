import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                              <Link to="/composiciones" className="text-3xl font-bold text-[#fafafa]">Proyectos personales</Link>
                         </div>
                    </div>

                    <div className="card clases">
                    <div className="contenedorLink flex">
                              <Link to="/infoClases" className="text-3xl font-bold text-[#fafafa]">Clases</Link>
                         </div>
                    </div>
               </div>
          </article>
     );
}

export default CardInicio;