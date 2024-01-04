import CarreraMain from "../Components/CarreraMain";
import CarreraTimeLapse from "../Components/CarraTimeLapse";
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