import Redes from '../Redes';
import BotonCompartir from '../Compartir';
import { FaInfo } from "react-icons/fa"

function InfoMain({ mostrarAlerta }) {
     return (
          <div className="contenedorInfo">
               <div className="info flex bg-[#303030] dark:bg-[#f0eded]">
                    <FaInfo className='botonInfo' />
                    <Redes />
                    <BotonCompartir mostrarAlerta={mostrarAlerta} />
               </div>
          </div>
     );
}

export default InfoMain;