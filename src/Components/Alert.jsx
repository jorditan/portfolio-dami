'use client'
import { Alert } from 'keep-react'
import { Info } from 'phosphor-react'


function Alerta({ display }) {
     return (
          <div className={`contenedorAlert ${display}`}>
               <Alert className={`rounded-lg bg-slate-900 alerta`}>
                    <Alert.Container>
                         <Alert.Icon>
                              <Info size={24} color="#fff" />
                         </Alert.Icon>
                         <Alert.Body>
                              <Alert.Title className="text-white">¡Realizado!</Alert.Title>
                              <Alert.Description className="text-gray-400">
                                   URL de la web copiado al portapapeles
                              </Alert.Description>
                         </Alert.Body>
                    </Alert.Container>
               </Alert>
          </div>
     );
}

export default Alerta;

