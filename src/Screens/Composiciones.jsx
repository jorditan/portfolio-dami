import ComposicionesMain from '../Components/Composiciones/ComposicionesMain';
import ComposicionesReproductor from '../Components/Composiciones/ComposicionesReproductor';
import '../CSS/composiciones.css';

function Composiciones() {
     return (
          <main className='bg-gradient-to-l from-[#5e5e5e] to-[#dfdfdf] dark:from-[#303030] dark:to-[#5e5e5e]'>
               <ComposicionesMain />
               <ComposicionesReproductor />
          </main>
     );
}

export default Composiciones;