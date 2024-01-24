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
            <main className='bg-gradient-to-l from-[#5e5e5e] to-[#dfdfdf] dark:from-[#303030] dark:to-[#5e5e5e]'>
                <section id="pagos">
                    <h1 className='text-7xl font-bold text-[#303030] dark:text-[#fafafa]'>Métodos de pago</h1>

                    <p className='pt-5 text-[#303030] text-sm w-full dark:text-[#fafafa]'>Podés elegir la forma que más cómoda te quede para pagar tus clases personalizadas. Algunas de las opciones disponibles son las siguientes:</p>

                    <ul className='pt-6'>
                        <li className='text-xl text-[#303030] py-2 flex items-center font-bold dark:text-[#fafafa]'> <IoCash className='mr-2 dark:text-[#fff59b]' /> Efectivo (en caso de ser clase presencial)</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold dark:text-[#fafafa]'><FaPiggyBank className='mr-2 dark:text-[#fff59b]' /> Transferencia bancaria</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold dark:text-[#fafafa]'><FaCreditCard className='mr-2 dark:text-[#fff59b]' /> Tarjeta de debito</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold dark:text-[#fafafa]'><SiWesterndigital className='mr-2 dark:text-[#fff59b]' /> Western digital</li>
                        <li className='text-xl flex items-center  py-2 text-[#303030] font-bold dark:text-[#fafafa]'><SiBinance className='mr-2 dark:text-[#fff59b]' /> Wallet de binance</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold dark:text-[#fafafa]'><SiMercadopago className='mr-2 dark:text-[#fff59b]' /> MercadoPago</li>
                        <li className='text-xl flex items-center py-2  text-[#303030] font-bold dark:text-[#fafafa]'> <FaLemon className='mr-2 dark:text-[#fff59b]' /> Lemon Cash</li>
                    </ul>

                    <p className='text-md text-[#303030] pt-6 w-full dark:text-[#fafafa]'>
                        Nota: en caso de pagar con LemonCash o Binance porfavor contacteme previamente a pagar en la sección de <Link to="/presupuestoClases" className='font-bold hover:text-[#686868] dark:text-[#fff59b] dark:hover:text-[#fffb59]'>presupuestos.</Link>
                    </p>

                </section>
            </main>
        </>
    );
}

export default MetodosDePago;