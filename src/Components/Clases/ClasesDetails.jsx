import Motivo from '../Motivo'
function ClasesDetails() {
     
     const motivos = [
          {
               texto: 'Porque priorizamos tus gustos musicales y tenemos en cuenta la razón por la que empezaste. 🎵',
               img: 'src/assets/img/FotoDamiPortfolio.webp',
          },
          {
               texto: 'Porque respetamos tiempos y tus necesidades. Cada cual aprende a su ritmo. ⏳',
               img: 'src/assets/img/FotoDamiCard.webp',
          },
          {
               texto: 'No nos basamos en un método antiguo donde no disfrutas lo que haces. La idea es que aprendas y te diviertas.',
               img: 'src/assets/img/FotoDamiPiano2.webp',
          },
          {
               texto: 'Podés elegir la modalidad que te resulte más cómoda. ¡No dejes de hacer tus cosas y aprovechá esta ventaja!',
               img: 'src/assets/img/FotoDamiGuitarra.webp',
          },
     ]

     return (
          <section id="detailsClases">
               <h2 className="text-6xl font-bold text-[#303030]">Clases totalmente personalizadas</h2>
               <p className="text-[#303030] text-sm pt-4">¿Querés saber por qué? Deslizá y enterate de los valores y principios de las clases😊.</p>

               <div className="contenedorMotivos flex column pt-32 gap-40">
                    {motivos.map((motivo, index) => ( 
                         <Motivo motivo={motivo} key={index}/>
                    ))}
               </div>
          </section>
     );
}

export default ClasesDetails;