import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { Button } from "keep-react";

function BotonReproduccion({ sonando, ponerPausa, ponerPlay, cancionActual, titulo }) {
     return (
          <>
               {
                    sonando && cancionActual.titulo == titulo ? <FaPause onClick={ponerPausa} /> : <FaPlay onClick={ponerPlay} />
               }
          </>
     )
}
export default BotonReproduccion