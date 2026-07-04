'use client';
import '../page.css';
import { useLanguage } from '../Context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from "react-dom";






export default function Instalaciones(){
    const {language} = useLanguage();
    const [isMobile, setIsMobile] = useState(false);
    const [cardVisible, setCardVisible] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState({url:'', title:''});


    const Instalaciones = [
        
        {
            title: language==='ES'?'Entrada':'Entrance',
            url: isMobile ? '/images/instalaciones/entrada.webp': '/images/instalaciones/entrada_mobile.webp'

        },
        {
            title: language==='ES'?'Recepción':'Reception',
            url: isMobile ? '/images/instalaciones/recepcion.webp': '/images/instalaciones/recepcion_mobile.webp'
        },
        {
            title: language==='ES'?'Cafeteria':'Cafeteria',
            url: isMobile ? '/images/instalaciones/cafeteria.webp': '/images/instalaciones/cafeteria_mobile.webp'
        },
        {
            title: language==='ES'?'Cafeteria':'Cafeteria',
            url: isMobile ? '/images/instalaciones/cafeteria2.webp': '/images/instalaciones/cafeteria2_mobile.webp'
        },
        {
            title: language==='ES'?'Comedor':'Dining Room',
            url:'/images/instalaciones/comedor.webp'
        },
        {
            title: language==='ES'?'Recepcion Urgencias':'Emergency Reception',
            url:'/images/instalaciones/recepcion_urgencias.webp'
        },
        {
            title: language==='ES'?'Consultorio':'Consulting Room',
            url:'/images/instalaciones/consultorio.webp'
        },
        {
            title: language==='ES'?'Consultorio':'Consulting Room',
            url:'/images/instalaciones/consultorio2.webp'
        },
        {
            title: language==='ES'?'Consultorio':'Consulting Room',
            url:'/images/instalaciones/consultorio3.webp'
        },
        {
            title: language==='ES'?'Consultorio Urgencias':'Emergency Consulting Room',
            url:'/images/instalaciones/consultorio_urgencias.webp'
        },
        {
            title: language==='ES'?'Habitacion Compartida':'Shared Room',
            url: isMobile ? '/images/instalaciones/habitacion_compartida.webp': '/images/instalaciones/habitacion_compartida_mobile.webp'
        },
        {
            title: language==='ES'?'Habitacion Compartida':'Shared Room',
            url: isMobile ? '/images/instalaciones/habitacion_compartida2.webp': '/images/instalaciones/habitacion_compartida2_mobile.webp'
        },
        {
            title: language==='ES'?'Habitacion Compartida':'Shared Room',
            url: isMobile ? '/images/instalaciones/habitacion_compartida3.webp': '/images/instalaciones/habitacion_compartida3_mobile.webp'
        },
        {
            title: language==='ES'?'Habitacion Individual':'Single Room',
            url: isMobile ? '/images/instalaciones/habitacion_individual.webp': '/images/instalaciones/habitacion_individual_mobile.webp'
        },
        {
            title: language==='ES'?'Habitacion Individual':'Single Room',
            url: isMobile ? '/images/instalaciones/habitacion_individual2.webp': '/images/instalaciones/habitacion_individual2_mobile.webp'
        },
        {
            title: language==='ES'?'Jardin':'Garden',
            url: isMobile ? '/images/instalaciones/jardin.webp': '/images/instalaciones/jardin_mobile.webp'
        },
        {
            title: language==='ES'?'Jardin':'Garden',
            url: isMobile ? '/images/instalaciones/jardin2.webp': '/images/instalaciones/jardin2_mobile.webp'
        },
        {
            title: language==='ES'?'Jardin':'Garden',
            url: isMobile ? '/images/instalaciones/jardin3.webp': '/images/instalaciones/jardin3_mobile.webp'
        },
        {
            title: language==='ES'?'Urgencias':'Emergency Room',
            url: isMobile ? '/images/instalaciones/urgencias.webp': '/images/instalaciones/urgencias_mobile.webp'
        },
        {
            title: language==='ES'?'Sala':'Living Room',
            url: isMobile ? '/images/instalaciones/sala.webp': '/images/instalaciones/sala_mobile.webp'
        },
        {
            title: language==='ES'?'Sala':'Living Room',
            url: isMobile ? '/images/instalaciones/sala2.webp': '/images/instalaciones/sala2_mobile.webp'
        },

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
            else setCardVisible(prev => Math.min(Instalaciones.length, prev + 1));
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
        // instalaciones_image_container
        <div className='instalaciones_section'>
            <h3>{language==='ES'?'Nuestras Instalaciones':'Our Facilities'}</h3>
            <p>{language==='ES'? 'Contamos con instalaciones para consulta, hospitalización y atención de emergencias psiquiátricas.'
            :'We have facilities for outpatient consultation, hospitalization, and psychiatric emergency care.'}</p>

            {isMobile?
            <div className='Instalaciones_container'>
                <ul className='Instalaciones_list'>
                    <button
                        className='button _back'
                        disabled={cardVisible === 1}
                        style={{ opacity: cardVisible === 1 ? 0 : 1 }}
                        onClick={() => setCardVisible((prev) => prev - 1)}
                    >
                        <ChevronLeft />
                    </button>

                    <div
                        className='Instalaciones_slider'
                        style={{
                        transform: `translateX(-${(cardVisible - 1) * 100}%)`,
                        }}
                        
                    >
                        {Instalaciones.map((instalacion, index) => (
                        <div className='Instalacion_card' key={index} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                            <h4 className='Instalacion_tittle'>{instalacion.title}</h4>
                            <div className='card_container'>
    
                                <div className='instalaciones_image_container' onClick={()=>{
                                    setModalImage({url: instalacion.url, title: instalacion.title});
                                    setModalOpen(true);
                                }}>
                                    <Image src={instalacion.url} 
                                        alt={instalacion.title} 
                                        fill
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    
                    

                    <button
                        className='button _next'
                        style={{ opacity: cardVisible === Instalaciones.length ? 0 : 1 }}
                        disabled={cardVisible === Instalaciones.length}
                        onClick={() => setCardVisible((prev) => prev + 1)}
                    >
                        <ChevronRight />
                    </button>
                </ul>
                <div className="carousel-dots">    
                    {Instalaciones.map((_, index) => (
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
                <ul className='Instalaciones_list'>
                    <button
                        className='button _back'
                        disabled={cardVisible === 1}
                        style={{ opacity: cardVisible === 1 ? 0 : 1 }}
                        onClick={() => setCardVisible(prev => Math.max(1, prev - 1))}
                    >
                        <ChevronLeft />
                    </button>

                    <div
                        className='Instalaciones_slider'
                        style={{
                        transform: `translateX(-${(cardVisible - 1) * 99.1}%)`,
                        }}
                    >
                        {Instalaciones.map((instalacion, index) => (
                        <li className='Instalacion_card' key={index}>
                            <h4 className='Instalacion_tittle'>{instalacion.title}</h4>
                            <div className='card_container'>
    
                                <div className='instalaciones_image_container' onClick={()=>{
                                    setModalImage({url: instalacion.url, title: instalacion.title});
                                    setModalOpen(true);
                                }}>
                                    <Image src={instalacion.url} 
                                        alt={instalacion.title} 
                                        fill
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </li>
                        ))}
                    </div>

                    <button
                        className='button _next'
                        style={{ opacity: cardVisible === Instalaciones.length/3 ? 0 : 1 }}
                        disabled={cardVisible === Instalaciones.length/3}
                        onClick={() => setCardVisible(prev => Math.min(Instalaciones.length/3, prev + 1))}
                    >
                        <ChevronRight />
                    </button>
                </ul>
                <div className="carousel-dots">    
                    {Instalaciones.map((_, index) => (
                        Instalaciones.length/3 > index && (
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
            
        {modalOpen && <ModalImagen url={modalImage.url} title={modalImage.title} onClose={()=> setModalOpen(false)}/>}
        </div>
    )
}


const ModalImagen = ({url, title, onClose}: {url:string, title:string, onClose: ()=>void})=>{

    return createPortal(
        <div className='ModalImagen_overlay' onClick={onClose}>
            <div className='ModalImagen_container'>
                <Image src={url} alt={title} fill objectFit='cover' unoptimized />
            </div>
        </div>,
        document.body
    )
}