import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Button } from "keep-react";


function BotonReproduccion({ sound }) {

     const [sonando, setSonando] = useState(false);
     const [audio, setAudio] = useState(new Audio(sound.prop1));
     const [identificacion, setIdentificacion] = useState(sound.prop2);
     const [tarjetas, setTarjetas] = useState([]);


     const handleEstado = () => {
          setSonando(!sonando);
          setIdentificacion(sound.props2);
          setTarjetas(
               [
                    ...tarjetas, sound.props2
               ]
          )
     }

     useEffect(() => {
          const handlePlay = async () => {
               try {
                    await audio.play();
               }
               catch (error) {
                    console.log(error);
               }
          }

          const handlePause = async () => {
               try {
                    await audio.pause();
               }
               catch (error) {
                    console.log(error);
               }
          }

          if (sonando) {
               handlePlay();
          }
          else {
               handlePause();
          }

     }, [sonando, audio, sound]
     )


     useEffect(() => {
          console.log('cambiamos de tarjeta', identificacion);

     }, [identificacion]);


     return (
          <>
               <Button onClick={handleEstado} size="xs" type="gray" className="bg-[#303030] text-[#fafafa]" circle={true}>
                    <span >
                         {
                              sonando ? <FaPause /> : <FaPlay />
                         }
                    </span>
               </Button>
          </>
     )
}

export default BotonReproduccion;