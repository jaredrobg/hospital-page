'use client';
import '../page.css';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { CalendarDays } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';
import Instalaciones from '../Components/Instalaciones';




export default function HospitalizacionPage(){
    const {language} = useLanguage();

    const mensajeCita = "Hola, me gustaria agendar una cita.";
    const messageCita = "Hi, I would like to book an appointment.";


    return(
        <div className='hospitalizacion_page'>
            <h2>{language==='ES'?'Hospitalización Psiquiátrica': 'Psychiatric Hospitalization'}</h2>
            <div className='hospitalizacion_content'>
                
                <div className='hospitalizacion_image'>  
                    <Image src='images/hospitalizacion1.webp' 
                        alt='habitacion_compartida'
                        unoptimized
                        fill
                        objectFit='cover'
                        objectPosition='top'
                    />
                </div>
                <div className='hospitalizacion_text'>
                    <p>
                        {language === 'ES'?`La hospitalización psiquiátrica es un recurso terapéutico destinado a brindar atención integral, segura y especializada
                        a personas que atraviesan una crisis emocional, conductual o mental que no puede ser manejada adecuadamente en un entorno ambulatorio.
                        Durante la estancia hospitalaria, el paciente recibe vigilancia médica continua, seguimiento psicológico, intervención terapéutica y 
                        acompañamiento en un ambiente estructurado que favorece su estabilización y recuperación.`
                        : `Psychiatric hospitalization is a therapeutic resource designed to provide comprehensive, safe, and specialized care for individuals 
                        experiencing an emotional, behavioral, or mental health crisis that cannot be adequately managed in an outpatient setting.
                        During the hospital stay, the patient receives continuous medical supervision, psychological support, therapeutic intervention, 
                        and personalized care in a structured environment that promotes stabilization and recovery.`
                        }
                    </p>
                </div>
            </div>
            <div className='hospitalizacion_content'>
                
                <div className='hospitalizacion_image' >  
                    <Image src='images/hospitalizacion2.webp' 
                        alt='habitacion_compartida'
                        unoptimized
                        fill
                        objectFit='cover'
                        objectPosition='top'
                    />
                </div>
                <div className='hospitalizacion_text'>
                    <p >
                        {language == 'ES'?`El proceso inicia con una valoración integral por parte del equipo multidisciplinario (compuesto por psiquiatras, psicólogos, enfermería especializada
                        , terapeutas ocupacionales y trabajadores sociales), quienes determinan el plan de tratamiento más adecuado a las necesidades de cada persona.`
                    :`The process begins with a comprehensive evaluation carried out by a multidisciplinary team —including psychiatrists, psychologists, specialized nursing staff, occupational
                     therapists, and social workers— who determine the most appropriate treatment plan according to each person's needs.`}
                    </p>
                </div>
            </div>
            <div className='hospitalizacion_content'>
                
                <div className='hospitalizacion_image' >  
                    <Image src='images/hospitalizacion3.webp' 
                        alt='habitacion_compartida'
                        unoptimized
                        fill
                        objectFit='cover'
                        objectPosition='top'
                    />
                </div>
                <div className='hospitalizacion_text'>
                    { language === 'ES'?
                    <>
                    <p >
                        Los objetivos principales del programa de hospitalización son:
                    </p>
                    <ul style={{listStyle:"square", textAlign:"left", width:'80%', margin: "auto"}}>
                        <li>Estabilizar los síntomas agudos.</li>
                        <li>Brindar contención emocional y seguridad.</li>
                        <li>Reestablecer hábitos de autocuidado y convivencia.</li>
                        <li>Favorecer la adherencia al tratamiento médico y psicoterapéutico.</li>
                        <li>Preparar al paciente y a su familia para la reintegración al entorno social y familiar.</li>
                    </ul>
                    <p>
                        La duración de la hospitalización varía según la evolución clínica del paciente, priorizando
                        siempre una recuperación digna, humana y respetuosa.
                        El entorno hospitalario está diseñado para ser seguro, terapéutico y empático, favoreciendo el bienestar emocional 
                        y físico de quienes requieren atención especializada.
                    </p>
                    </>:
                    <>
                    <p>
                        The main objectives of the hospitalization program are:
                    </p>
                    <ul style={{listStyle:"square", textAlign:"left", width:'80%', margin: "auto"}}>
                        <li>Stabilize acute symptoms.</li>
                        <li>Provide emotional support and safety.</li>
                        <li>Reestablish habits of self-care and social interaction.</li>
                        <li>Encourage adherence to medical and psychotherapeutic treatment.</li>
                        <li>Prepare the patient and their family for reintegration into their social and family environment.</li>
                    </ul>
                    <p>
                        The duration of hospitalization varies depending on the patient’s clinical progress, 
                        always prioritizing a dignified, humane, and respectful recovery. 
                        The hospital environment is designed to be safe, therapeutic, and empathetic, 
                        promoting the emotional and physical well-being of those who require specialized care.
                    </p>

                    </>
                    }
                </div>
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
            <Instalaciones />
        </div>
    )
}