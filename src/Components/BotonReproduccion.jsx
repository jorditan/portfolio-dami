import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Button } from "keep-react";


function BotonReproduccion({ sound }) {

     const [sonando, setSonando] = useState(false);
     const [audio, setAudio] = useState(new Audio(sound));

     const audiosReproducidos = [];

     const handleEstado = () => {
          setSonando(!sonando);
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
               handlePlay()
               audiosReproducidos.push(audio.src);
               console.log(audiosReproducidos);
          } 
          else {
               handlePause()
          }
     }, [sonando, audio])



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