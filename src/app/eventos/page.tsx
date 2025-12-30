<<<<<<< HEAD
'use client';
import '../page.css';
import { useLanguage } from '../Context/LanguageContext';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';




const Proximamente = ()=>{
    const {language} = useLanguage();
    const [isMobile, setIsMobile] = useState(false);
    const [cardVisible, setCardVisible] = useState(1);

    const eventos = [
        {
            evento: language === 'ES'? 'Talleres para pacientes y familiares':'Workshops for patients and families',
            mensaje: language === 'ES'? 'Hola, quisiera recibir información acerca de los Talleres para pacientes y familiares.' : 'Hi, I would like to recieve more information about the Workshops for patients and families.',
            url: 'images/eventos_1.webp'
        },
        {
            evento: language === 'ES'? 'Eventos de formación y sensibilización.':'Training and awareness events',
            mensaje: language === 'ES'? 'Hola, quisiera recibir información acerca de los Eventos de formación y sensibilización..' : 'Hi, I would like to recieve more information about the Training and awareness events.',
            url: 'images/eventos_2.webp'
        },
        {
            evento: language === 'ES'? 'Sesiones clínicas':'Clinical Sessions',
            mensaje: language === 'ES'? 'Hola, quisiera recibir información acerca de las Sesiones clínicas.' : 'Hi, I would like to recieve more information about the Clinical Sessions.',
            url: 'images/eventos_3.webp'
        },
        {
            evento: language === 'ES'? 'Arteterapia':'Art Therapy',
            mensaje: language === 'ES'? 'Hola, quisiera recibir información acerca de la Arteterapia.' : 'Hi, I would like to recieve more information about the Art Therapy.',
            url: 'images/eventos_4.webp'
        },
        {
            evento: language === 'ES'? 'Musicoterapia':'Music Therapy',
            mensaje: language === 'ES'? 'Hola, quisiera recibir información acerca de la Musicoterapia.' : 'Hi, I would like to recieve more information about the Music Therapy.',
            url: 'images/eventos_5.webp'
        }
    ]

    let touchStartX = 0;
        let touchEndX = 0;
    
        const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>{
            touchStartX = e.touches[0].clientX;
        }
        const handleTouchEnd = (e:React.TouchEvent<HTMLDivElement>)=>{
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        }
        const handleSwipe = ()=>{
            const swipeDistance = touchEndX - touchStartX;
    
            if (Math.abs(swipeDistance) < 50) return;
            if (swipeDistance > 0) setCardVisible(prev => Math.max(1, prev - 1)); 
            else setCardVisible(prev => Math.min(eventos.length, prev + 1));
        }

    useEffect(()=>{
            const handleResize = ()=>{
                setIsMobile(window.innerWidth < 768);
            }
            handleResize();
            window.addEventListener("resize", handleResize);
    
            return ()=> window.removeEventListener("resize", handleResize);
        },[]);

    return(
        <div className='eventos_page'>
            <h2>{language==='ES'?<><span>Nuestros</span> <span>Eventos</span></>: <><span>Our</span> <span>Events</span></>}</h2>
            <div className='eventos_container'>
                {language==='ES'?
                <p>
                    En Hospital BNS, creemos firmemente en la importancia de la educación continua, el apoyo a la comunidad y la formación 
                    especializada. Nuestra sección de eventos está diseñada para ser un recurso valioso, tanto para nuestros pacientes y sus familias como 
                    para profesionales de la salud.
                </p>
                :
                <p>
                    At Hospital BNS, we firmly believe in the importance of continuous education, community support, and specialized training. Our events section 
                    is designed to be a valuable resource for our patients and their families, as well as for healthcare professionals.
                </p>}
                <div className='eventos_main_image'>
                    <Image 
                        src='images/educacion_continua.webp'
                        alt='educacion_continua'
                        fill
                        objectFit='cover'
                        unoptimized
                    />
                </div>
            </div> 
            <div className='eventos_container'>
                {language==='ES'?
                <p>
                    Descubra nuestras próximas actividades y únase a nuestra comunidad para seguir creciendo y aprendiendo juntos.
                </p>
                :
                <p>
                    Discover our upcoming activities and join our community to continue growing and learning together.
                </p>}




                {isMobile?
                <div className='Instalaciones_container'>
                    <ul className='Instalaciones_list'>
                        <button
                            className='_event button _back'
                            disabled={cardVisible === 1}
                            style={{ opacity: cardVisible === 1 ? 0 : 1 }}
                            onClick={() => setCardVisible((prev) => prev - 1)}
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            className='_event button _next'
                            style={{ opacity: cardVisible === eventos.length ? 0 : 1 }}
                            disabled={cardVisible === eventos.length}
                            onClick={() => setCardVisible((prev) => prev + 1)}
                        >
                            <ChevronRight />
                        </button>

                        <div
                            className='Instalaciones_slider'
                            style={{
                            transform: `translateX(-${(cardVisible - 1) * 100}%)`,
                            }}
                            
                        >
                            {eventos.map((item, index)=>
                                <div key={index} className='evento_card_container' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                                <EventoCard 
                                language={language}
                                evento = {item.evento}
                                mensaje={item.mensaje}
                                url={item.url}
                                />
                                </div>
                            )}
                        </div>
                        
                    </ul>
                    <div className="carousel-dots">    
                        {eventos.map((_, index) => (
                            <span
                            key={index}
                            className={`dot ${cardVisible === index + 1 ? "active" : ""}`}
                            onClick={() => setCardVisible(index + 1)} // 👈 opcional: clic para saltar a la imagen
                            ></span>
                        ))}
                    </div>
                </div>
                :
                <div className='Instalaciones_container'>            
                    <ul className='Instalaciones_list' >
                        <button
                            className='_event button _back'
                            disabled={cardVisible === 1}
                            style={{ opacity: cardVisible === 1 ? 0 : 1 }}
                            onClick={() => setCardVisible(prev => Math.max(1, prev - 1))}
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            className='_event button _next'
                            style={{ opacity: cardVisible === eventos.length/3 ? 0 : 1 }}
                            disabled={cardVisible === eventos.length/3}
                            onClick={() => setCardVisible(prev => Math.min(eventos.length/3, prev + 1))}
                        >
                            <ChevronRight />
                        </button>
                        <div
                            className='Instalaciones_slider'
                            style={{
                            transform: `translateX(-${(cardVisible - 1) * 99.1}%)`,
                            }}
                        >
                            {eventos.map((item, index)=>
                                <div key={index} className='evento_card_container'>
                                <EventoCard 
                                language={language}
                                evento = {item.evento}
                                mensaje={item.mensaje}
                                url={item.url}
                                />
                                </div>
                            )}
                        </div>

                    </ul>
                    <div className="carousel-dots">    
                        {eventos.map((_, index) => (
                            eventos.length/3 > index && (
                            <span
                            key={index}
                            className={`dot ${cardVisible === index + 1 ? "active" : ""}`}
                            onClick={() => setCardVisible(index + 1)} // 👈 opcional: clic para saltar a la imagen
                            ></span>
                            )
                        ))}
                    </div>
                </div>
                }
                
                
                <p style={{textAlign:"center", marginTop:"40px"}}>{language==='ES'? 'Y mucho mas...': 'And much more...'}</p>
            </div>
        </div>
    
    )
}
export default Proximamente;

interface EventCardProps {
    language: string;
    evento: string;
    mensaje: string;
    url: string; 
}

const EventoCard = ({language, evento, mensaje, url}: EventCardProps)=>{

    return(
        <div className='evento_card'>
            <div className='evento_card_image_container'>
                <Image 
                    src={url}
                    alt={evento}
                    fill
                    objectFit='cover'
                    unoptimized
                />
            </div>
            <div className='evento_card_content'>
                <p>{evento}</p>
                <div className='evento_card_button_container'>
                    <a href={`https://wa.me/3331777727?text=${encodeURIComponent(mensaje)}`}
                        target='_blank'         
                        rel="noopener noreferrer" 
                        ><FaWhatsapp style={{marginTop:"2px"}} /> {language =='ES'?'Recibir Informacion':'Recieve Information'}</a>
                    <a  href="tel:+523338537217" ><ImPhone style={{marginTop:"1px"}} /> {language =='ES'?'Recibir Informacion':'Recieve Information'}</a>
                </div>
            </div>
        </div>
    )
}
=======
import '../page.css';

const Proximamente = ()=>{

    return(
        <div style={{width: "100vw", height:"100vh", alignContent:"center", textAlign:"center", color:"#888", fontSize:"30px"}}>
            <div style={{width: "80%", margin:"auto"}}>Proximamente tendremos mejoras para ti!</div>
        </div>
    )
}
export default Proximamente;
>>>>>>> dc89ab14eb64d960e17cc4795227c9549643d697
