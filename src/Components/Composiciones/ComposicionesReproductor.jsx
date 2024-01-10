import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CardCancion from '../CardCancion'
import atrapasueñosAudio from '../../assets/sound/atrapasuenos.mp3';
import elHormigueroAudio from '../../assets/sound/elHormiguero.mp3'
import impsAudio from '../../assets/sound/Imps.mp3';
import anxietyAudio from '../../assets/sound/anxiety.mp3';
import instrumentoVAudio from '../../assets/sound/instrumentoV.mp3';

function ComposicionesReproductor() {
     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     class Composicion {
          constructor(titulo, motivo, materia, ancho, soundProps1, soundProps2, soundProps3) {
               this.titulo = titulo;
               this.motivo = motivo;
               this.materia = materia;
               this.sound = {
                    prop1: soundProps1,
                    prop2: soundProps2,
                    prop3: soundProps3,
               };
               this.ancho = ancho;
          }
     }

     const atrapasueños = new Composicion('Atrapasueños', 'Saturnalia', 'Proyecto personal', 'col-span-1', atrapasueñosAudio, 1, false);
     const imp = new Composicion('IMPS', 'Universidad', 'Composición II', 'col-span-1', impsAudio, 2, false);
     const anxiety = new Composicion('Anxiety', 'Universidad', 'Composición II', 'col-span-1', anxietyAudio, 3, false);
     const elHormiguero = new Composicion('El Hormiguero', 'Universidad', 'Composición II', 'col-span-2', elHormigueroAudio, 4, false);
     const instrumentoV = new Composicion('InstrumentoV', 'Universidad', 'Instrumento-V', 'col-span-1', instrumentoVAudio,5, false );


     const composiciones = [atrapasueños, imp, anxiety, elHormiguero, instrumentoV];

     return (
          <section className="contenedorCards grid gap-12">
                    {
                         composiciones.map((composicion, index) => {
                              return (
                                   <article data-aos="fade-up" key={index} className={`${composicion.ancho}`}>
                                        <CardCancion props={composicion} sound={composicion.sound} />
                                   </article>
                              )
                         })
                    }
               </section>
     )
}

export default ComposicionesReproductor;