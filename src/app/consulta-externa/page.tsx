<<<<<<< HEAD
'use client';
import '../page.css';
import '../page.css';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { CalendarDays } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';
import Instalaciones from '../Components/Instalaciones';


export default function ConsultaExterna(){
    const {language} = useLanguage();

    const mensajeCita = "Hola, me gustaria agendar una cita.";
    const messageCita = "Hi, I would like to book an appointment.";

    return(
        <div className='hospitalizacion_page'>
                    <h2>{language==='ES'?'Consulta Externa Psiquiátrica': 'Outpatient Psychiatric Consultation'}</h2>
                    <div className='hospitalizacion_content'>
                        
                        <div className='hospitalizacion_image'>  
                            <Image src='images/consulta_externa1.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='cover'
                                objectPosition='top'
                            />
                        </div>
                        <div className='hospitalizacion_text'>
                            <p>
                                {language === 'ES'?`La consulta externa psiquiátrica es un servicio especializado dedicado a la evaluación, diagnóstico y 
                                tratamiento de personas que presentan síntomas emocionales, conductuales o mentales y que no requieren hospitalización. 
                                Su objetivo es ofrecer acompañamiento profesional de manera ambulatoria, manteniendo al paciente en su entorno familiar y 
                                social mientras recibe atención clínica continua.`
                                : `Outpatient psychiatric consultation is a specialized service focused on the evaluation, diagnosis, and treatment of individuals 
                                who present emotional, behavioral, or mental health symptoms and do not require hospitalization. The goal is to provide professional 
                                support in an outpatient setting, allowing patients to remain in their family and social environment while receiving continuous
                                 clinical care.`
                                }
                            </p>
                        </div>
                    </div>
                    <div className='hospitalizacion_content'>
                        
                        <div className='hospitalizacion_image' >  
                            <Image src='images/consulta_externa2.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='contain'
                                objectPosition='center'
                            />
                        </div>
                        <div className='hospitalizacion_text'>
                            <p >
                                {language == 'ES'?`Durante la consulta, el paciente es atendido por un equipo de profesionales de la salud mental (entre ellos, 
                                psiquiatras, psicólogos clínicos y personal especializado) quienes realizan una valoración integral y diseñan un plan terapéutico
                                 personalizado. Este servicio permite el seguimiento regular de la evolución del paciente, la supervisión del tratamiento 
                                 farmacológico cuando es necesario, así como el apoyo psicoterapéutico y psicoeducativo para el paciente y su familia.`
                            :`During each visit, the patient is evaluated by a multidisciplinary mental health team —including psychiatrists, clinical psychologists,
                             and specialized staff— who conduct a comprehensive assessment and develop a personalized treatment plan. This service allows for 
                             regular monitoring of the patient's progress, supervision of medication management when necessary, and the provision of 
                             psychotherapeutic and psychoeducational support for both the patient and their family.`}
                            </p>
                        </div>
                    </div>
                    <div className='hospitalizacion_content'>
                        
                        <div className='hospitalizacion_image' >  
                            <Image src='images/consulta_externa3.webp' 
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
                                Los principales objetivos de la consulta externa son:
                            </p>
                            <ul style={{listStyle:"square", textAlign:"left", width:'80%', margin: "auto"}}>
                                <li>Realizar un diagnóstico adecuado y oportuno.</li>
                                <li>Proporcionar tratamiento médico y psicoterapéutico individualizado.</li>
                                <li>Prevenir recaídas y descompensaciones clínicas.</li>
                                <li>Promover habilidades emocionales, sociales y funcionales.</li>
                                <li>Fortalecer el apoyo familiar y social del paciente.</li>
                            </ul>
                            <p>
                                La atención en consulta externa favorece un proceso terapéutico continuo, humano y empático, orientado a mejorar la calidad
                                 de vida del paciente y facilitar su adaptación y funcionamiento en la vida diaria.
                            </p>
                            </>:
                            <>
                            <p>
                                The main objectives of outpatient psychiatric consultation are:
                            </p>
                            <ul style={{listStyle:"square", textAlign:"left", width:'80%', margin: "auto"}}>
                                <li>Conduct an accurate and timely diagnostic evaluation.</li>
                                <li>Provide individualized medical and psychotherapeutic treatment.</li>
                                <li>Prevent relapses and clinical decompensation.</li>
                                <li>Promote emotional, social, and functional skills.</li>
                                <li>Strengthen family and social support for the patient.</li>
                            </ul>
                            <p>
                                Outpatient care promotes a continuous, humane, and empathetic therapeutic process aimed at improving the patient{"'"}s
                                quality of life and supporting their adaptation and functioning in daily activities.
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
=======
'use client';
import '../page.css';
import '../page.css';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { CalendarDays } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';
import Instalaciones from '../Components/Instalaciones';


export default function ConsultaExterna(){
    const {language} = useLanguage();

    const mensajeCita = "Hola, me gustaria agendar una cita.";
    const messageCita = "Hi, I would like to book an appointment.";

    return(
        <div className='hospitalizacion_page'>
                    <h2>{language==='ES'?'Consulta Externa Psiquiátrica': 'Outpatient Psychiatric Consultation'}</h2>
                    <div className='hospitalizacion_content'>
                        
                        <div className='hospitalizacion_image'>  
                            <Image src='images/consulta_externa1.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='cover'
                                objectPosition='top'
                            />
                        </div>
                        <div className='hospitalizacion_text'>
                            <p>
                                {language === 'ES'?`La consulta externa psiquiátrica es un servicio especializado dedicado a la evaluación, diagnóstico y 
                                tratamiento de personas que presentan síntomas emocionales, conductuales o mentales y que no requieren hospitalización. 
                                Su objetivo es ofrecer acompañamiento profesional de manera ambulatoria, manteniendo al paciente en su entorno familiar y 
                                social mientras recibe atención clínica continua.`
                                : `Outpatient psychiatric consultation is a specialized service focused on the evaluation, diagnosis, and treatment of individuals 
                                who present emotional, behavioral, or mental health symptoms and do not require hospitalization. The goal is to provide professional 
                                support in an outpatient setting, allowing patients to remain in their family and social environment while receiving continuous
                                 clinical care.`
                                }
                            </p>
                        </div>
                    </div>
                    <div className='hospitalizacion_content'>
                        
                        <div className='hospitalizacion_image' >  
                            <Image src='images/consulta_externa2.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='contain'
                                objectPosition='center'
                            />
                        </div>
                        <div className='hospitalizacion_text'>
                            <p >
                                {language == 'ES'?`Durante la consulta, el paciente es atendido por un equipo de profesionales de la salud mental (entre ellos, 
                                psiquiatras, psicólogos clínicos y personal especializado) quienes realizan una valoración integral y diseñan un plan terapéutico
                                 personalizado. Este servicio permite el seguimiento regular de la evolución del paciente, la supervisión del tratamiento 
                                 farmacológico cuando es necesario, así como el apoyo psicoterapéutico y psicoeducativo para el paciente y su familia.`
                            :`During each visit, the patient is evaluated by a multidisciplinary mental health team —including psychiatrists, clinical psychologists,
                             and specialized staff— who conduct a comprehensive assessment and develop a personalized treatment plan. This service allows for 
                             regular monitoring of the patient's progress, supervision of medication management when necessary, and the provision of 
                             psychotherapeutic and psychoeducational support for both the patient and their family.`}
                            </p>
                        </div>
                    </div>
                    <div className='hospitalizacion_content'>
                        
                        <div className='hospitalizacion_image' >  
                            <Image src='images/consulta_externa3.webp' 
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
                                Los principales objetivos de la consulta externa son:
                            </p>
                            <ul style={{listStyle:"square", textAlign:"left", width:'80%', margin: "auto"}}>
                                <li>Realizar un diagnóstico adecuado y oportuno.</li>
                                <li>Proporcionar tratamiento médico y psicoterapéutico individualizado.</li>
                                <li>Prevenir recaídas y descompensaciones clínicas.</li>
                                <li>Promover habilidades emocionales, sociales y funcionales.</li>
                                <li>Fortalecer el apoyo familiar y social del paciente.</li>
                            </ul>
                            <p>
                                La atención en consulta externa favorece un proceso terapéutico continuo, humano y empático, orientado a mejorar la calidad
                                 de vida del paciente y facilitar su adaptación y funcionamiento en la vida diaria.
                            </p>
                            </>:
                            <>
                            <p>
                                The main objectives of outpatient psychiatric consultation are:
                            </p>
                            <ul style={{listStyle:"square", textAlign:"left", width:'80%', margin: "auto"}}>
                                <li>Conduct an accurate and timely diagnostic evaluation.</li>
                                <li>Provide individualized medical and psychotherapeutic treatment.</li>
                                <li>Prevent relapses and clinical decompensation.</li>
                                <li>Promote emotional, social, and functional skills.</li>
                                <li>Strengthen family and social support for the patient.</li>
                            </ul>
                            <p>
                                Outpatient care promotes a continuous, humane, and empathetic therapeutic process aimed at improving the patient's
                                quality of life and supporting their adaptation and functioning in daily activities.
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
>>>>>>> dc89ab14eb64d960e17cc4795227c9549643d697
}