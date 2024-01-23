import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CardCancion from '../CardCancion'
import atrapasueñosAudio from '../../assets/sound/atrapasuenos.mp3';
import elHormigueroAudio from '../../assets/sound/elHormiguero.mp3'
import impsAudio from '../../assets/sound/Imps.mp3';
import anxietyAudio from '../../assets/sound/anxiety.mp3';
import instrumentoVAudio from '../../assets/sound/instrumentoV.mp3';
import { useDispatch, useSelector } from 'react-redux';

function ComposicionesReproductor() {
     useEffect(() => {
          AOS.init({
               duration: 1000
          })
     })

     const dispatch = useDispatch();
     const { cancionActual, estaSonando } = useSelector((state) => state.reproduccion);

     class Composicion {
          constructor(titulo, motivo, materia, ancho, cancion, id, img) {
               this.titulo = titulo;
               this.motivo = motivo;
               this.materia = materia;
               this.ancho = ancho;
               this.cancion = cancion;
               this.id = id;
               this.estaSonando = false
               this.img = img
          }
     }

     const atrapasueños = new Composicion('Atrapasueños', 'Saturnalia', 'Proyecto personal', 'col-span-1', atrapasueñosAudio, 1, false);
     const imp = new Composicion('IMPS', 'Universidad', 'Composición II', 'col-span-1', impsAudio, 2, false);
     const anxiety = new Composicion('Anxiety', 'Universidad', 'Composición II', 'col-span-1', anxietyAudio, 3, false);
     const elHormiguero = new Composicion('El Hormiguero', 'Universidad', 'Composición II', 'col-span-2', elHormigueroAudio, 4, false);
     const instrumentoV = new Composicion('InstrumentoV', 'Universidad', 'Instrumento-V', 'col-span-1', instrumentoVAudio, 5, false);


     const composiciones = [atrapasueños, imp, anxiety, elHormiguero, instrumentoV];

     return (
          <section className="contenedorCards grid gap-12">
               {
                    composiciones.map((composicion, index) => {
                         return (
                              <CardCancion key={index}
                                   titulo={composicion.titulo}
                                   materia={composicion.materia}
                                   cancion={composicion.cancion}
                                   id={composicion.id}
                                   ancho={composicion.ancho}
                                   motivo={composicion.motivo}
                                   estaSonando={estaSonando}
                                   cancionActual={cancionActual}
                              />
                         )
                    })
               }
          </section>
     )
}

export default ComposicionesReproductor;