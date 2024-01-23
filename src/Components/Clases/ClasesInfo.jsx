import { ModalComponent } from "../Modal";
import { Link } from "react-router-dom";

function ClasesInfo() {

     const infoModalidades = [
          {
               preview: 'Mixto',
               texto: '⏳ Si no tenés horarios fijos, esta es tu modalidad ideal. Este método se adecúa a tus tiempos y te da la posibildad de cursar presencialmente y virtual, siempre y cuando sea avisado previamente.',
               titulo: '¿Cómo son las clases mixtas?'
          },
          {
               preview: 'Virtual',
               texto: '📷 Clases vía Google Meet. Se envía material para estudiar de manera extracurricular y acompañar lo visto en la clase.',
               titulo: '¿Cómo son las clases virtuales?'
          },
          {
               preview: 'Presenciales',
               texto: '📍 Clases en Haedo norte, a 4 cuadras de la estación del tren Sarmiento. Recordá que NO es obligatorio contar con el instrumento, aunque es recomendable para la práctica.',
               titulo: '¿Cómo son las clases presenciales?'
          }
     ]
     return (
          <section id="contenedorModalidades">
               <div className="contenedorTexto">
                    <h2 className="text-4xl text-[#303030] font-bold dark:text-[#fafafa]">¡Hacé click en los botones y descubrí las características de cada modalidad!</h2>
                    <p className="pt-6 text-sm text-[#303030] w-3/4 dark:text-[#fafafa]">
                         Pensamos en cada momento en vos, asi que te damos la oportunidad de poder estudiar con la modalidad que te resulte más comoda. Desde tu casa, presencial o mixto. ¿Qué estás esperando? Empezá en el hermoso mundo de la música de la forma más cómoda posible.
                    </p>
               </div>
               <article className="contenedor flex w-full justify-left gap-40 pt-12">
                    {
                         infoModalidades.map((modalidad, index) => (
                              <ModalComponent key={index} info={modalidad} />
                         ))
                    }
               </article>

               <div className="contenedorDetails w-3/4 flex column pt-12">
                    <p className="text-[#303030] font-semibold text-sm dark:text-[#fafafa]">Para empezar a tomar clases de música comunicate conmigo por redes sociales o por mi <a className="font-bold hover:text-[#1d1d1d]" href="https://wa.link/oy03d9" target="blank">WhatsApp</a></p>

                    <p className="text-[#303030] font-semibold text-sm pt-6 dark:text-[#fafafa]">Luego de entablar la conversación de saber que instrumento te interesa aprender, vamos a coordinar los horarios y la modalidad elegida para estudiar. ¡Así de fácil! 😉</p>

                    <h5 className="text-4xl text-[#303030] font-bold pt-12 dark:text-[#fafafa]">¿Y los precios?</h5>
                    <Link to={"/presupuestoClases"}>
                         <button className="btn btn-outline mt-4 hover:bg-[#303030] w-2/4 dark:text-[#fafafa] dark:hover:bg-[#fafafa]">Ver presupuestos</button>
                    </Link>
               </div>
          </section>
     );
}

export default ClasesInfo;