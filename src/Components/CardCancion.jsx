import ImagenCard from '../assets/img/ImagenCard.webp'
import BotonReproduccion from './BotonReproduccion';
import { Badge } from 'keep-react';
import { IoSchool } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFileMusicFill } from "react-icons/bs";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { iniciarReproduccion, detenerReproduccion, playPausa } from '../Context/reducer';


function CardCancion({ cancion, titulo, motivo, materia, ancho, id, cancionActual, estaSonando }) {

     const dispatch = useDispatch();

     const ponerPlay = async () => {
          dispatch(iniciarReproduccion({ titulo, id, cancion }))
          dispatch(playPausa(true));
     }

     const ponerPausa = () => {
          dispatch(playPausa(false));
     }

     useEffect(() => {
          const audio = new Audio(cancion);

          if (estaSonando && cancionActual && cancionActual.id === id) {
               audio.play();
          } else {
               audio.pause();
          }

          return () => {
               audio.pause();
               audio.currentTime = 0;
               audio.src = '';
          };
     }, [estaSonando, cancionActual, cancion, id]);


     return (
          <article className={`card bg-[#f1f1f1] h-[20em] w-full column hover:translate-y-[-10px] cursor-pointer ease-in duration-200 ${ancho}`}>
               <figure className='rounded-t-2xl'><img src={ImagenCard} alt="Guitarra" /></figure>
               <div className="card-body h-3/4">
                    <h2 className="card-title font-bold text-[#303030] text-2xl">{titulo}</h2>
                    <p className='text-md text-[#303030] font-semibold'>
                         {materia}
                    </p>
                    <Badge
                         size="xs"
                         colorType="light"
                         color="gray"
                         icon={motivo == 'Universidad' ? <IoSchool /> : <BsFileMusicFill />}
                         iconPosition="right"
                    >
                         {motivo}
                    </Badge>
                    <Badge
                         size="xs"
                         colorType="light"
                         color="gray"
                         icon={<FaUser />}
                         iconPosition="right"
                    >
                         Autor
                    </Badge>
                    <div className="card-actions justify-end">
                         <BotonReproduccion
                              ponerPausa={ponerPausa}
                              ponerPlay={ponerPlay}
                              sonando={estaSonando}
                              cancionActual={cancionActual}
                              titulo={titulo}
                         />
                    </div>
               </div>
          </article>
     );
}

export default CardCancion;