import ComposicionesMain from '../Components/Composiciones/ComposicionesMain';
import ComposicionesReproductor from '../Components/Composiciones/ComposicionesReproductor';
import '../CSS/composiciones.css';

function Composiciones() {
     return (
          <main>
               <ComposicionesMain />
               <ComposicionesReproductor />
          </main>
     );
}

export default Composiciones;