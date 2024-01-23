import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Motivo({motivo}) {
     useEffect(() => {
          AOS.init({
               duration: 1000,
          })
     })

     return (
          <article className="motivo w-full flex h-64 even:flex-row-reverse even:text-right  odd:text-left items-center justify-between" data-aos="fade-down">
               <div className="textoMotivo w-2/4">
                    <p className="text-[#303030] text-xl dark:text-[#fafafa]">{motivo.texto}</p>
               </div>

               <div className="imagenMotivo w-2/4 flex justify-center items-center sombra">
                    <img src={motivo.img} alt="Foto con alumnos" />
               </div>
          </article>
     );
}

export default Motivo;