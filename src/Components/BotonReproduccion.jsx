import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { Button } from "keep-react";

function BotonReproduccion({ sonando, ponerPausa, ponerPlay, cancionActual, titulo }) {
     return (
          <>
               <Button size="xs" type="gray" className={`bg-[#303030] text-[#fafafa]`} circle={true}>
                    <span >
                         {
                              sonando && cancionActual.titulo == titulo  ? <FaPause onClick={ponerPausa}/>  : <FaPlay onClick={ponerPlay}  />
                         }
                    </span>
               </Button>
          </>
     )
}

export default BotonReproduccion