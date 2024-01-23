import { useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Card } from "keep-react";
import axios from 'axios';
import { CheckCircle } from "phosphor-react";
import Skeleton from "react-loading-skeleton";



export default function CardComponent({ dolar, info }) {

     const precioClase = Math.round(dolar * info.precio);
     const descuento = precioClase*(15/100);
     const precioNuevo = precioClase - descuento;
     const [preferenceId, setPreferenceId] = useState(null);

     initMercadoPago('APP_USR-b973685f-30c9-4ba9-a891-18cf752b430f');

     const createPreference = async () => {
          try {
               const response = await axios.post("http://localhost:3000/create_preference", {
                    title: info.clase,
                    price: precioNuevo,
                    quantity: 1,
                    currency_id: 'ARS'
               });

               const { id } = response.data;
               return id
          } catch (error) {
               console.log(error)
          }
     };

     const handleBuy = async () => {
          const id = await createPreference();
          if (id) {
               setPreferenceId(id)
          }
     }

     return (
          <Card className="max-w-xs p-6">
               <Card.Container>
                    <Card.Container>
                         <Card.Title className="text-2xl font-bold text-primary-500">
                              {info.clase}
                         </Card.Title>
                         <Card.Title className="flex items-center my-3">
                         <span className="text-sm text-metal-400">Antes: ${precioClase || <Skeleton duration={5} baseColor="#202020" highlightColor="#444" />}</span>
                              <span className="ml-1 text-body-4 text-sm text-metal-400">
                                   ARS c/u 
                              </span>
                         </Card.Title>
                         <Card.Title className="flex items-end my-3">
                         <span className="text-heading-8 font-bold text-metal-800">¡Ahora!</span> <span className="font-bold text-[#C70039] pl-2">15% Off</span>
                         </Card.Title>
                         <Card.Title className="flex items-center my-3">
                         <span className="text-heading-4 font-bold text-metal-800">${precioNuevo || <Skeleton duration={5} baseColor="#202020" highlightColor="#444" />}</span>
                              <span className="ml-1 text-body-4 font-medium text-metal-400">
                                   ARS
                              </span>
                         </Card.Title>
                         <Card.Description className="text-body-4 text-metal-700">
                              Precio actualizado
                         </Card.Description>
                    </Card.Container>
                    <Card.Container tag="ul" className="my-4 space-y-5">
                         <Card.List className="flex items-center gap-1.5">
                              <CheckCircle size={24} color="#1B4DFF" />
                              <span className="text-body-4 text-metal-700">
                                   {info.duracion}
                              </span>
                         </Card.List>
                         <Card.List className="flex items-center gap-1.5">
                              <CheckCircle size={24} color="#1B4DFF" />
                              <span className="text-body-4 text-metal-700">
                                   {info.ventaja}
                              </span>
                         </Card.List>
                         <Card.List className="flex items-center gap-1.5">
                              <CheckCircle size={24} color="#1B4DFF" />
                              <span className="text-body-4 text-metal-700">
                                   {info.experiencia}
                              </span>
                         </Card.List>
                         <Card.List className="flex items-center gap-1.5">
                              <CheckCircle size={24} color="#1B4DFF" />
                              <span className="text-body-4 text-metal-700">
                                   {info.personalizada}
                              </span>
                         </Card.List>
                    </Card.Container>
                    <Card.Container>
                         <button onClick={handleBuy} className="btn btn-outline mt-4 hover:bg-[#303030] w-full">Pagar</button>
                         {preferenceId && <Wallet initialization={{ preferenceId }} />
}
                    </Card.Container>
               </Card.Container>
          </Card>
     );
}
