import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Composiciones() {
     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })


     const informacion = [
          {
               titulo: 'Música electroacústica e incidental',
               texto: 'En mi vida académica he compuseto piezas con distintos medios electro-acústicos y electrónicos, haciendo énfasis en crear ambiente. Me interesa especialmente la búsqueda de sonidos por fuera de lo común, expandiendo las posibilidades sonoras de cada instrumento más allá de lo usual.'
          },
          {
               titulo: 'Música académica para instrumentos de cuerda, viento, percusión y voz',
               texto: 'He creado piezas para cuarteto de cuerdas-tonales y atonales-, clarinete, arreglos corales y piezas únicamente para percusión.'
          },
          {
               titulo: 'Saturnalia',
               texto: 'Mi proyecto personal. Composiciones, arreglos y letra de mi autoría. Es un proyecto que vive en mí, buscando tocar fibras emocionales en quien escucha. Pienso a Saturnalia como una música que debe ser escuchada con atención y amor.'
          },
          {
               titulo: 'Guiñapo',
               texto: 'Grupo de Folklore y fusión. Buscamos que la gente se ponga a bailar con los pañuelos al aire pero que también muevan la cabeza al escuchar un homenaje a Led Zeppelin -¡Todo en una misma canción!'
          },
          {
               titulo: 'Orange High School',
               texto: 'En esta escuela dirigí bandas adolescentes e hice arreglos de canciones de Chicago y La Cage Aux Folles. La presentación de los conciertos se hizo en teatros para más de 500 espectadores. '
          }
     ]


     return (
          <section id='composiciones'>
               <div className="contenedorBienvenida" data-aos="fade-right">
                    <h1 className='text-7xl font-bold text-[#303030]'>Mis composiciones</h1>
                    <p className='pt-5 text-[#303030] text-sm w-full'>A continuación podrán encontrar más información sobre mis composiciones y tendrán la posibilidad de escuchar algunas.</p>

                    <p className='text-[#303030] text-sm font-semibold w-full pt-5'>Con ya más de doce años de experiencia en la industria musical, he explorado diversas facetas
                         del arte sonoro y he trabajado en una amplia gama de proyectos musicales.</p>

                    <p className='text-[#303030] text-sm font-semibold w-full pt-5'>Mi música abarca una variedad de géneros, desde Pop hasta música clásica y contemporánea,
                         fusionando influencias para crear un sonido único.</p>

                    <div className="extra py-6">
                         <h2 className='text-3xl font-bold text-[#303030] pt-5'>Método de trabajo</h2>
                         <p className='text-[#303030] text-xs font-semibold w-3/4 pt-2'>Mi enfoque para componer es principalmente ser introspectivo y sentir las emociones como
                              realmente son. La música será simplemente un canal para llevarlas a la luz. Suelo comezar por
                              improvisaciones que luego van adoptando una forma. Si me piden música por encargo, intento
                              ser bien abierto a la hora de escuchar para así saber que busca cada persona.
                              Por el momento, mi música está disponible en <a href="https://www.youtube.com/@saturnaliamusica" target='blank' className='enfasis cursor-pointer hover:text-[#414141]'>Youtube</a>. Todos los derechos reservados.</p>

                         <h2 className='text-3xl font-bold text-[#303030] pt-5'>Proceso creativo</h2>
                         <p className='text-[#303030] text-xs font-semibold w-3/4 pt-2'>Mis creaciones se inspiran en Rock Británico Psicodélico -Pink Floyd por sobre todas las cosas-
                              Rock Argentino -Serú Girán mi principal inspiración-, música de videojuegos y música clásica,fusionando elementos para dar vida a composiciones auténtica.</p>

                    </div>
               </div>

               <article className={`infoComposiciones flex column`} data-aos="fade-up">
                    {
                         informacion.map((info, index) => {
                              return (
                                   <div key={index} className='flex column pt-6 pb-6' data-aos="fade-up">
                                        <h6 className='text-[#303030] font-bold text-xl w-full'>{info.titulo}</h6>
                                        <p className='text-[#303030] text-xs  w-2/4 pt-4'>{info.texto}</p>
                                   </div>
                              )
                         })
                    }
               </article>
          </section>
     );
}

export default Composiciones;