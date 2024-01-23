import '../CSS/pagos.css';
import { FaLemon } from "react-icons/fa";
import { IoCash } from "react-icons/io5";
import { FaPiggyBank } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa6";
import { SiWesterndigital } from "react-icons/si";
import { Link } from 'react-router-dom';

function MetodosDePago() {
    return (
        <>
            <main>
                <section id="pagos">
                    <h1 className='text-7xl font-bold text-[#303030]'>Métodos de pago</h1>

                    <p className='pt-5 text-[#303030] text-sm w-full'>Podés elegir la forma que más cómoda te quede para pagar tus clases personalizadas. Algunas de las opciones disponibles son las siguientes:</p>

                    <ul className='pt-6'>
                        <li className='text-xl text-[#303030] py-2 flex items-center font-bold'> <IoCash className='mr-2'/> Efectivo (en caso de ser clase presencial)</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold'><FaPiggyBank className='mr-2'/> Transferencia bancaria</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold'><FaCreditCard className='mr-2'/> Tarjeta de debito</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold'><SiWesterndigital className='mr-2'/> Western digital</li>
                        <li className='text-xl flex items-center  py-2 text-[#303030] font-bold'><SiBinance className='mr-2'/> Wallet de binance</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold'><SiMercadopago className='mr-2'/> MercadoPago</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold'> <FaLemon className='mr-2'/> Lemon Cash</li>
                    </ul>

                    <p className='text-md text-[#303030] pt-6 w-full'>
                        Nota: en caso de pagar con LemonCash o Binance porfavor contacteme previamente a pagar en la sección de <Link to="/presupuestoClases" className='font-bold hover:text-[#686868]'>presupuestos.</Link>
                    </p>

                </section>
            </main>
        </>
    );
}

export default MetodosDePago;