import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { Button } from "keep-react";


function BotonReproduccion({ sound }) {

     const [estaSonando, setEstaSonando] = useState(sound.prop3);
     const [audio, setAudio] = useState(new Audio(sound.prop1));

     const tarjetaActual = useRef({ ...sound, prop3: estaSonando });

     const handleEstado = () => {
          setEstaSonando(!estaSonando);
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

          if (estaSonando) {
               handlePlay();
               tarjetaActual.current = {...sound, prop3: true}
               console.log(tarjetaActual);
          }
          else {
               handlePause();
               tarjetaActual.current ={...sound, prop3: false}
               console.log(tarjetaActual);
          }

     }, [estaSonando, audio, sound]
     )

     useEffect(() => {
          console.log('cambiamos de tarjeta', tarjetaActual);
     }, [tarjetaActual])

     return (
          <>
               <Button onClick={handleEstado} size="xs" type="gray" className="bg-[#303030] text-[#fafafa]" circle={true}>
                    <span >
                         {
                              estaSonando ? <FaPause /> : <FaPlay />
                         }
                    </span>
               </Button>
          </>
     )
}

export default BotonReproduccion;