import { useState } from "react";
import { Button, Modal } from "keep-react";
import { FaCreativeCommonsShare } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";

function BotonCompartir({ mostrarAlerta }) {
     const [showModal, setShowModal] = useState(false);

     const onClick = () => {
          setShowModal(!showModal);
     };

     return (
          <div className="contenedorModal flex">
               <Button type='slate' className="text-white m-2 hover:bg-[#fafafa] hover:text-[#303030]" onClick={onClick} size="sm">Compartí el portfolio</Button>
               <Modal
                    icon={<FaCreativeCommonsShare size={28} color="#303030" />}
                    size="md"
                    show={showModal}
                    position="top-middle"
               >
                    <Modal.Header>¿Querés compartir el portfolio?</Modal.Header>
                    <Modal.Body>
                         <div className="space-y-6">
                              <p className="text-body-4 leading-relaxed text-metal-500">
                                   Copía la URL y pasaselo al contacto que te interese.
                              </p>
                         </div>
                    </Modal.Body>
                    <Modal.Footer>
                         <Button type="outlineGray" onClick={onClick}>
                              Cancelar
                         </Button>
                         <Button type="slate" onClick={onClick}>
                              <CopyToClipboard text={window.location.href}>
                                   <p onClick={() => (mostrarAlerta())}>Copía la URL</p>
                              </CopyToClipboard>
                         </Button>
                    </Modal.Footer>
               </Modal>
          </div>
     );
}

export default BotonCompartir;
