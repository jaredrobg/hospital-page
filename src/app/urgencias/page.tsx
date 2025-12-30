'use client';
import '../page.css';
import '../page.css';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { CalendarDays } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';
import Instalaciones from '../Components/Instalaciones';
import FadeIn from '../Components/FadeIn';

export default function ConsultaExterna(){
    const {language} = useLanguage();

    const mensajeCita = "Hola, me gustaria agendar una cita.";
    const messageCita = "Hi, I would like to book an appointment.";

    return(
        <div className='hospitalizacion_page'>
                    <h2 style={{width:"290px"}}>{language==='ES'?'Urgencias Psiquiátricas': 'Psychiatric Emergencies'}</h2>
                    <div className='hospitalizacion_content'>
                        
                        <div className='hospitalizacion_image'>  
                            <Image src='images/urgencias1.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='cover'
                                objectPosition='left'
                            />
                        </div>
                        <div className='hospitalizacion_text'>
                            <p>
                                {language === 'ES'?`Las urgencias psiquiátricas son situaciones en las que una persona presenta alteraciones emocionales, 
                                conductuales o de pensamiento que representan un riesgo para sí mismo, para otras personas o que requieren atención inmediata para 
                                preservar su bienestar y estabilidad mental. Este tipo de atención está dirigida a personas que pueden experimentar crisis severas 
                                relacionadas con trastornos psiquiátricos, como episodios de ansiedad extrema, agitación psicomotriz, conducta suicida, estados 
                                psicóticos, alteraciones graves del estado de ánimo, pérdida de control de impulsos, o desorganización del comportamiento.`
                                : `Psychiatric emergencies are situations in which a person experiences emotional, behavioral, or cognitive disturbances that pose
                                 a risk to themselves or others, or that require immediate intervention to preserve their safety and mental stability.
                                This type of care is intended for individuals who may experience severe crises associated with psychiatric conditions such as 
                                extreme anxiety episodes, psychomotor agitation, suicidal behavior, psychotic states, severe mood alterations, loss of impulse 
                                control, or significant disorganization of behavior.`
                                }
                            </p>
                        </div>
                    </div>
                    

                    <div className='urgencias_en_bns_container'>
                        <FadeIn direction='left'>
                        <div className='urgencias_en_bns_content _1'>
                            <div className='image_overlay'></div>
                            <h3>{language === 'ES' ? 'En Hospital BNS':'Inside Hospital BNS'}</h3>
                            <p>{language === 'ES' ? `Contamos con un servicio especializado de Urgencias Psiquiátricas disponible para brindar atención inmediata, 
                            valoración integral y contención en situaciones críticas. Nuestro equipo multidisciplinario (compuesto por psiquiatras, psicólogos y 
                            personal clínico especializado) está preparado para atender crisis agudas, garantizar la seguridad del paciente y diseñar un plan 
                            terapéutico adecuado según la situación clínica.` 
                            : `We provide a specialized Psychiatric Emergency Service to offer prompt care, comprehensive evaluation, and stabilization during 
                            critical situations. Our multidisciplinary team —including psychiatrists, psychologists, and trained clinical staff— is prepared to 
                            manage acute crises, ensure patient safety, and develop an appropriate therapeutic plan based on clinical needs.`}</p>
                        </div>
                        </FadeIn>
                        <FadeIn direction='right'>
                        <div className='urgencias_en_bns_content _2'>
                            <h3>
                                <div></div>
                                hospitalbns.com
                            </h3>
                            <p>{language === 'ES' ? `El objetivo principal de este servicio es estabilizar al paciente, ofrecer un ambiente seguro y terapéutico,
                             y definir el mejor curso de tratamiento, ya sea manejo ambulatorio, observación clínica o ingreso hospitalario cuando sea necesario.` 
                             : `The main goal of this service is to stabilize the patient, provide a safe and therapeutic environment, and determine the most 
                             appropriate course of treatment, whether outpatient management, clinical observation, or hospital admission when necessary.`}</p>
                            <p style={{marginTop:"5px"}}>{language === 'ES' ? `Nuestro compromiso es atender cada emergencia con respeto, empatía y profesionalismo
                            , asegurando un abordaje digno y humano en los momentos de mayor vulnerabilidad.` 
                            : `We are committed to providing care with respect, empathy, and professionalism, ensuring a dignified and supportive approach during 
                            moments of greatest vulnerability.`}</p>
                        </div>
                        </ FadeIn>
                    </div>

                    <div className='urgencias_instalaciones_bg'>
                        <Instalaciones />
                    </div>
                    <div className='hospitalizacion_agendar buttons_container'>
                        <h4>{language=='ES'? 'Agenda tu Cita': 'Book an Appintment'} </h4>
                        <a href={`https://wa.me/3331777727?text=${encodeURIComponent(language === 'ES' ? mensajeCita: messageCita)}`}
                            target='_blank'         
                            rel="noopener noreferrer" 
                            className='contacto_button'>
                                <CalendarDays />{language =='ES'?'Mandar Mensaje':'Send Message'} <FaWhatsapp style={{marginTop:"2px"}} /> 
                            </a>
                        <a  href="tel:+523338537217" className='contacto_button'>
                            <CalendarDays /> {language =='ES'?'Llamar':'Call'} <ImPhone style={{marginTop:"1px"}} />
                        </a>
                    </div>
                </div>
    )
}