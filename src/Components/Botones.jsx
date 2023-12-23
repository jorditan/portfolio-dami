import { FaPlay } from "react-icons/fa";
import { FaForward } from "react-icons/fa6";

function Botones() {
     return (
          <div className="botones flex">
               <FaPlay className="icon"/>
               <FaForward className="icon"/>
          </div>
     );
}

export default Botones;