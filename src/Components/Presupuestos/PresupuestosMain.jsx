import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardPresupuesto from './CardPresupuesto.jsx'

function PresupuestosMain() {

     const [data, setData] = useState([]);

     useEffect(() => {
          AOS.init({
               duration: 1000,
          });
          consumirFetch();
     }, [])

     const consumirFetch = async () => {
          await fetch('https://dolarapi.com/v1/dolares/blue')
               .then((response) => response.json())
               .then((data) => setData(data))
     }

     class Ventajas {
          constructor(clase, duracion, ventaja, experiencia, personalizada, precio) {
               this.clase = clase,
                    this.duracion = duracion,
                    this.ventaja = ventaja,
                    this.experiencia = experiencia,
                    this.personalizada = personalizada,
                    this.precio = precio
          }
     }

     const clasesMensuales = new Ventajas('Clases mensuales', 'Modalidad a elección', '1 clase por semana', 'No requiere experiencia previa', 'Clases adaptadas a los objetivos del alumno', 17);

     const clasesIndividuales = new Ventajas('Clases individuales', '1 hora de duración', 'Modalidad a elección', 'No requiere experiencia previa', 'Clase personalizada ', 4.5)


     return (
          <>
               <section id="infoClases">
                    <article className="bienvenida" data-aos="fade-right">
                         <div className="contenedorBienvenida">
                              <h1 className="text-5xl text-[#303030] font-bold">¡Encontrá el presupuesto de las clases para este 2024!</h1>

                              <p className="pt-6 text-sm text-[#303030] w-3/4">
                                   ¿Querés saber los precios de cada clase o del mes completo? Estás en el lugar correcto, mirá los precios <span className="enfasis">completamente actualizados.</span>
                              </p>

                              <p className="pt-6 text-sm text-[#303030] w-3/4">
                                   Nota: el abono de las clases puede realizarse con MercadoPago, transferencia bancaria y tarjetas de débito.
                              </p>
                         </div>

                         <div className="contenedorInfoPagos pt-12">
                              <h2 className="text-4xl text-[#303030] font-bold">Elegí el método de pago que prefieras.</h2>

                              <p className="pt-6 text-lg text-[#303030] w-2/4 text-semibold">
                                   Aprovechá y aboná las clases <span className="enfasis">individuales</span> y <span className="enfasis">mensuales</span>. Cada una de ellas tiene sus propias características y ventajas. Desliza hacia abajo para ver los precios.
                              </p>
                         </div>
                    </article>


                    <article className="contenedorCards pt-8">
                         <div className="container flex gap-20">
                              <CardPresupuesto dolar={data.compra} info={clasesIndividuales} /> 
                              <CardPresupuesto dolar={data.compra} info={clasesMensuales} /> 
                         </div>
                    </article>
               </section>
          </>
     );
}

export default PresupuestosMain;