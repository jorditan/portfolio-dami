import CarreraMain from "../Components/Carrera/CarreraMain";
import CarreraTimeLapse from "../Components/Carrera/CarraTimeLapse";
import '../CSS/miCarrera.css'

function MiCarrera() {
     return (
          <>
               <main id="miCarrera">
                    <CarreraMain />
                    <CarreraTimeLapse/>
               </main>
          </>
     );
}

export default MiCarrera;