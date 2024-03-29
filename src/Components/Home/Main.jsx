import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import CardPresentacion from '../CardPresentacion';
import InfoMain from './InfoMain';
import Alerta from '../Alert';
import OfertaFlotante from '../OfertaFlotante';

function Main() {
     useEffect(() => {
          AOS.init({
               duration: 2000,
          });
     }, [])

     const [display, setDisplay] = useState('invisible');

     const mostrarAlerta = () => {
          setDisplay('visible')

          setTimeout(() => {
               setDisplay('invisible')
          }, 2000);
     }

     return (
          <>
               <section id="inicio" className='pt-8'>
                    <div className="contenedorTitulo flex column">
                         <h1 id='titulo' className="text-7xl font-bold text-[#303030] text-center dark:text-[#fafafa]">Damián Nahuel Jordán</h1>
                         <p data-aos="fade-up" className="text-1xl text-[#505050] text-center  dark:text-[#fff5b9]">Profesor de guitarra, piano y teoría musical. Compositor, arreglista y transcriptor.</p>
                    </div>
                    <CardPresentacion />
                    <InfoMain mostrarAlerta={mostrarAlerta} />
                    <Alerta display={display} />
                    <OfertaFlotante/>
               </section>
          </>
     );
}

export default Main;