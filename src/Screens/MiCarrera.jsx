import CarreraMain from "../Components/Carrera/CarreraMain";
import CarreraTimeLapse from "../Components/Carrera/CarraTimeLapse";
import '../CSS/miCarrera.css'

function MiCarrera() {
     return (
          <>
               <main className='bg-gradient-to-l from-[#5e5e5e] to-[#dfdfdf] dark:from-[#303030] dark:to-[#5e5e5e]'>
                    <CarreraMain />
                    <CarreraTimeLapse />
               </main>
          </>
     );
}

export default MiCarrera;