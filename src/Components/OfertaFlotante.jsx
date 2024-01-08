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
          <div className="fixed z-10 right-0 py-8 px-8 bottom-0" data-aos="fade-up">
               <Popover>
                    <Popover.Description>Accede a esta única oferta del 15% de clases de música.</Popover.Description>
                    <Popover.Container>
                         <button className="mt-3 text-body-5 font-medium text-primary-400 underline underline-offset-[3px]">
                              <Link to="/presupuestoClases">Ir a al oferta</Link>
                         </button>
                    </Popover.Container>
                    <Popover.Action>
                         <Button size="xs" className="bg-[#303030] text-[#fafafa]">¡Oferta disponible!</Button>
                    </Popover.Action>
               </Popover>
          </div>
     );
}

export default OfertaFlotante;