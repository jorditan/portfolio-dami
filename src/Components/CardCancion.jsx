import ImagenCard from '../assets/img/ImagenCard.webp'
import BotonReproduccion from './BotonReproduccion';
import { Badge } from 'keep-react';
import { IoSchool } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFileMusicFill } from "react-icons/bs";


function CardCancion({ props, sound }) {
     return (
          <div className="card bg-[#f1f1f1] shadow-xl h-[20em] w-full column ">
               <figure className='rounded-t-2xl'><img src={ImagenCard} alt="Guitarra" /></figure>
               <div className="card-body h-3/4">
                    <h2 className="card-title font-bold text-[#303030] text-2xl">{props.titulo}</h2>
                    <p className='text-xs text-[#303030] font-semibold'>
                         {props.materia}
                    </p>
                    <Badge
                         size="xs"
                         colorType="light"
                         color="gray"
                         icon={props.motivo == 'Universidad' ? <IoSchool/> : <BsFileMusicFill/>}
                         iconPosition="right"
                    >
                         {props.motivo}
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
                         <BotonReproduccion sound={sound} />
                    </div>
               </div>
          </div>
     );
}

export default CardCancion;