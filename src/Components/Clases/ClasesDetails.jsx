import Motivo from '../Motivo'
import FotoDamiPortfolio from '../../assets/img/FotoDamiPortfolio.webp'
import FotoDamiCard from '../../assets/img/FotoDamiCard.webp'
import FotoDamiPiano from '../../assets/img/FotoDamiPiano2.webp'
import FotoDamiGuitarra from '../../assets/img/FotoDamiGuitarra.webp'


function ClasesDetails() {
     
     const motivos = [
          {
               texto: 'Priorizamos tus gustos musicales y tenemos en cuenta la razón por la que empezaste. 🎵',
               img: FotoDamiPortfolio
          },
          {
               texto: 'Respetamos tiempos y tus necesidades. Cada cual aprende a su ritmo. ⏳',
               img: FotoDamiCard,
          },
          {
               texto: 'No nos basamos en un método antiguo donde no disfrutas lo que haces. La idea es que aprendas y te diviertas. 😄',
               img: FotoDamiPiano,
          },
          {
               texto: 'Podés elegir la modalidad que te resulte más cómoda. ¡No dejes de hacer tus cosas y aprovechá esta ventaja! 🎸',
               img: FotoDamiGuitarra,
          },
     ]

     return (
          <section id="detailsClases">
               <div className="contenedorMotivos flex column pt-6 gap-40">
                    {motivos.map((motivo, index) => ( 
                         <Motivo motivo={motivo} key={index}/>
                    ))}
               </div>
          </section>
     );
}

export default ClasesDetails;