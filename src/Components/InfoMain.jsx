import Redes from './Redes';
import BotonCompartir from './Compartir';
import BotonSwitch from './BotonSwitch'

function InfoMain() {
     return (
          <div className="contenedorInfo">
               <div className="info flex">
                    <div className="switchs flex">
                         <BotonSwitch/>
                         <BotonSwitch/>
                    </div>
                    <Redes />
                    <BotonCompartir />
               </div>
          </div>
     );
}

export default InfoMain;