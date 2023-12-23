'use client'
import { Alert } from 'keep-react'
import { Info } from 'phosphor-react'

function Alerta() {
     return (
          <Alert className={`rounded-lg bg-slate-900 `}>
               <Alert.Container>
                    <Alert.Icon>
                         <Info size={24} color="#fff" />
                    </Alert.Icon>
                    <Alert.Body>
                         <Alert.Title className="text-white">Default message - make it short</Alert.Title>
                         <Alert.Description className="text-gray-400">
                              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry
                         </Alert.Description>
                    </Alert.Body>
               </Alert.Container>
          </Alert>
     );
}

export default Alerta;

