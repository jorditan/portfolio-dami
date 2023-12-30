import { Button, Popover } from "keep-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function OfertaFlotante() {
     useEffect(() => {
          AOS.init({
               duration: 1000,
          });
     }, [])

     return (
          <div className={`fixed bottom-0 pb-10 left-4 z-10 right-4 ease-in duration-300 flex justify-end`} data-aos='fade-left'>
               <Popover position='right-end' >
                    <Popover.Title>15% de descuento en tus clases</Popover.Title>
                    <Popover.Description>
                         ¿Querés aprender a tocar el piano y/o la guitarra de forma 100% personalizada?
                         No pierdas el tiempo y hablame 😉.
                    </Popover.Description>
                    <Popover.Container>
                         <Button type="outlineGray" size="xs">
                              <Link to="/clases">Ir a la oferta</Link>
                         </Button>
                    </Popover.Container>
                    <Popover.Action>
                         <Button size="xs" className="text-[#fafafa] bg-[#303030] sombra">¡Oferta disponible!</Button>
                    </Popover.Action>
               </Popover>
          </div>
     );
}

export default OfertaFlotante;