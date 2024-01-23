import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardPresupuesto from './CardPresupuesto.jsx'
import { Link } from "react-router-dom";

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
                                   ¿Querés saber los precios de cada clase o del mes completo? Estás en el lugar correcto, mirá los precios <span className="font-bold">completamente actualizados.</span>
                              </p>

                              <p className="pt-6 text-sm text-[#303030] w-3/4">
                                   Nota: el abono de las clases puede realizarse con MercadoPago, transferencia bancaria y tarjetas de débito.
                              </p>

                              <p className="text-sm pt-6">
                                   Chequeá todos los <Link to={"/metodosDePago"} className="font-bold text-[#303030] underline hover:text-[#6a6a6a]">métodos de pago disponibles.</Link>
                              </p>
                         </div>

                    </article>


                    <article className="contenedorPresupuesto pt-8">
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