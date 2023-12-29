
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Avatar, Card } from "keep-react";
import FotoCard from '../assets/img/FotoCard.png'
import { Link } from 'react-router-dom';

export const CardComponent = () => {

     useEffect(() => {
          AOS.init({
               duration: 2000,
          })
     })

     return (
          <div className="contenedorCard flex w-full" data-aos="fade-up">
               <Card className="max-w-xs p-6 md:max-w-lg">
                    <Card.Description>
                         Clases de música 100% personalizadas para todos mis alumnos. No se requiere experiencia previa. ¿Querés conocer más sobre mi carrera? Hace click <Link to="/micarrera" className="navLink font-bold text-[#303030] hover:text-[#1d1d1d]">acá.</Link>
                    </Card.Description>
                    <Card.Container className="flex items-center">
                         <Avatar size="lg" shape="circle" img={FotoCard}/>
                         <Card.Container className="ml-3">
                              <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Damián Nahuel Jordán</Card.Title>
                              <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Profesor de música</Card.Title>
                         </Card.Container>
                    </Card.Container>
               </Card>
          </div>
     );
};
