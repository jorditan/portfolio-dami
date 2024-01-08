import Redes from '../Redes';
import BotonCompartir from '../Compartir';
import BotonSwitch from '../BotonSwitch';
import { FaInfo } from "react-icons/fa";


function InfoMain({ mostrarAlerta }) {
     return (
          <div className="contenedorInfo">
               <div className="info flex">
                    <FaInfo className='botonInfo' />
                    <div className="switchs flex">
                         <BotonSwitch />
                         <BotonSwitch />
                    </div>
                    <Redes />
                    <BotonCompartir mostrarAlerta={mostrarAlerta} />
               </div>
          </div>
     );
}

export default InfoMain;