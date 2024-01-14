import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { Button } from "keep-react";

function BotonReproduccion({ sonando, ponerPausa, ponerPlay, cancionActual, titulo }) {
     return (
          <>
               {
                    sonando && cancionActual.titulo == titulo ? <FaPause className="cursor-pointer" onClick={ponerPausa} /> : <FaPlay className="cursor-pointer" onClick={ponerPlay} />
               }
          </>
     )
}
export default BotonReproduccion