import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CardCancion from '../CardCancion'
import atrapasueñosAudio from '../../assets/sound/atrapasuenos.mp3';
import elHormigueroAudio from '../../assets/sound/elHormiguero.mp3'
import impsAudio from '../../assets/sound/Imps.mp3';
import anxietyAudio from '../../assets/sound/anxiety.mp3';
import instrumentoVAudio from '../../assets/sound/instrumentoV.mp3';

function Composiciones() {
     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     class Composicion {
          constructor (titulo, motivo, materia, ancho, sound) {
               this.titulo = titulo;
               this.motivo = motivo;
               this.materia = materia;
               this.sound = sound;
               this.ancho = ancho;
          }
     }

     const atrapasueños = new Composicion ('Atrapasueños', 'Proyecto personal', 'Saturnalia', 'col-span-1', atrapasueñosAudio);
     const imp = new Composicion ('IMPS', 'Universidad', 'Composición II', 'col-span-1', impsAudio);
     const anxiety = new Composicion ('Anxiety', 'Universidad', 'Composición II', 'col-span-1', anxietyAudio  );
     const elHormiguero = new Composicion ('El Hormiguero', 'Universidad', 'Composición II', 'col-span-2', elHormigueroAudio);
     const instrumentoV = new Composicion ('InstrumentoV', 'Universidad', 'Instrumento-V', 'col-span-1', instrumentoVAudio);


     const composiciones = [atrapasueños, imp, anxiety, elHormiguero, instrumentoV];

     return (
          <section id='composiciones'>
               <div className="contenedorBienvenida" data-aos="fade-right">
                    <h1 className='text-7xl font-bold text-[#303030]'>Mis composiciones</h1>
                    <p className='pt-5 text-[#303030] text-sm w-full'>Trabajos realizados en proyectos personales, 
                    canciones, trabajos universitarios, entre otros.</p>
               </div>

               <div className="contenedorCards grid grid-cols-3 gap-12">
                    {
                         composiciones.map((composicion, index) => {
                              return (
                                   <article data-aos="fade-up" key={index} className={`${composicion.ancho}`}>
                                        <CardCancion props={composicion}/>
                                   </article>
                              )
                         })
                    }
               </div>
          </section>
     );
}

export default Composiciones;