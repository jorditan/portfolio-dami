
"use client";
import { useState } from "react";
import { Modal, Button } from "keep-react";
import { PiChalkboardTeacherFill } from "react-icons/pi";

export const ModalComponent = ({info}) => {
     const [showModal, setShowModal] = useState(false);

     const onClickOne = () => {
          setShowModal(!showModal);
     };

     return (
          <>
               <Button onClick={onClickOne} type='secondary' size={'xl'} className="text-[#fafafa] bg-[#303030] hover:text-[#303030] hover:border-solid hover:border-2 hover:bg-transparent hover:border-[#303030] dark:text-[#303030] dark:bg-[#fafafa] dark:hover:border-[#fafafa] dark:hover:text-[#fafafa]">{info.preview}</Button>
               <Modal
                    icon={<PiChalkboardTeacherFill size={28} color="#1d1d1d" />}
                    size="md"
                    show={showModal}
                    position="center"
               >
                    <Modal.Header>{info.titulo}</Modal.Header>
                    <Modal.Body>
                         <div className="space-y-6">
                              <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
                                   {info.texto}
                              </p>
                         </div>
                    </Modal.Body>
                    <Modal.Footer>
                         <Button type="outlineGray"onClick={onClickOne}>
                              Cerrar
                         </Button>
                         <Button type="secondary" className="bg-[#7c7c7c] hover:bg-[#303030] text-[#fafafa]" onClick={onClickOne}>
                              <a className="text-sm text-[#fafafa]" href="https://wa.link/oy03d9" target="blank">¡Contactame por WhatsApp!</a>
                         </Button>
                    </Modal.Footer>
               </Modal>
          </>
     );
}
