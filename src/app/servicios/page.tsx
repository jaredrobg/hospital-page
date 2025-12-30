'use client';
import '../page.css';
import { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { CalendarDays } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Instalaciones from '../Components/Instalaciones';


export default function ServiciosPage(){
    const [extended, setExtended] = useState<number|null>();
    const {language} = useLanguage();
    const router = useRouter(); 
    
    const mensajeCita = "Hola, me gustaria agendar una cita.";
    const messageCita = "Hi, I would like to book an appointment.";


    return(
        <div className='ServiciosPage'>
            <h2>{language==='ES'?<><span>Nuestros</span> <span>Servicios</span></>: <><span>Our</span> <span>Services</span></>}</h2>
            <div className='servicio_seccion' id='programas'>
                <h3 className='servicio_tittle' aria-label='Abrir Informacion' onClick={()=>{extended==1?setExtended(null):setExtended(1)}}>
                    {language==='ES'?'Atención intrahospitalaria (Internamiento)': ' Inpatient Care (Hospitalization)'}
                    .<span>{extended === 1? <ChevronDown/>: <ChevronRight />}</span>
                    <div className='overlay_servicio'></div>
                </h3>
                {extended === 1 &&
                <div className='servicio_content liquid_glass_style'>
                    {language==='ES'?
                    <>
                    <ul style={{listStyle:"square", textAlign:"left"}}>
                        <p>
                            En ocasiones, el manejo psiquiátrico y psicológico requiere de internamiento, BNS pone a su disposición su servicio de hospitalización 
                            para los pacientes que requieran manejo continuo dentro de nuestras instalaciones.
                        </p>
                        <li>Contención e inicio de tratamiento.</li>
                        <li>Internamiento para abordaje diagnóstico integral.</li>
                        <li>Tratamiento en fases agudas.</li>
                        <li>Rehabilitación.</li>
                    </ul>
                    <p><br/>Para mas informacion visitar la seccion: <Link href='/hospitalizacion' style={{color:"#22c"}}>Hospitalizacion</Link><br/><br/></p>
                    </>
                    :
                    <>
                    <ul style={{listStyle:"square", textAlign:"left"}}>
                        <p>
                            Sometimes, psychiatric and psychological management requires hospitalization. BNS offers its inpatient service for patients who need
                             continuous care within our facilities.
                        </p>
                        <li>Containment and initiation of treatment.</li>
                        <li>Hospitalization for comprehensive diagnostic evaluation.</li>
                        <li>Treatment during acute phases.</li>
                        <li>Rehabilitation.</li>
                    </ul>
                    <p><br/>For mor information please visit the  <Link href='/hospitalizacion' style={{color:"#22c"}}>Hospitalization</Link> section<br/><br/></p>
                    </>
                    }
                    <button aria-label='Cerrar Informacion' onClick={()=>setExtended(null)}><ChevronUp  size={27}/></button>
                </div>
                }
            </div>
            <div className='servicio_seccion'>
                <h3 className='servicio_tittle' aria-label='Abrir Informacion' onClick={()=>{extended==2?setExtended(null):setExtended(2)}}>
                    {language==='ES'?'Atención ambulatoria.':'Outpatient Care.'}
                    <span>{extended === 2? <ChevronDown/>: <ChevronRight />}</span>
                    <div className='overlay_servicio'></div>
                </h3>
                {extended === 2 &&
                <div className='servicio_content liquid_glass_style'>
                    {language==='ES'?
                    <ul style={{listStyle:"square", textAlign:"left"}}>
                        <p>
                            La atención psiquiátrica y psicológica ambulatoria ofrece tratamiento para trastornos mentales sin requerir 
                            hospitalización de 24 horas, permitiendo a los pacientes vivir en casa mientras reciben citas regulares con profesionales. 
                            Se enfoca en la evaluación, terapia y manejo de síntomas, y a menudo incluye evaluaciones sociales y seguimientos domiciliarios, 
                            integrando a la familia y núcleo de apoyo en el proceso de recuperación.
                        </p>
                        <li>Consulta externa de psiquiatría.</li>
                        <li>Consulta externa de psicología.</li>
                        <li>Consulta de nutrición.</li>
                        <li>Pruebas neuropsicológicas y psicológicas.</li>
                        <li>Terapia de pareja.</li>
                        <li>Terapia familiar.</li>
                        <li>Terapia individual.</li>
                        <li>Acompañamiento psiquiátrico.</li>
                    </ul>:
                    <ul style={{listStyle:"square", textAlign:"left"}}>
                        <p>
                            Outpatient psychiatric and psychological care offers treatment for mental disorders without requiring 24-hour hospitalization, 
                            allowing patients to live at home while attending regular appointments with professionals. It focuses on assessment, therapy, and 
                            symptom management, and often includes social evaluations and home follow-ups, integrating the family and support network into the 
                            recovery process.
                        </p>
                        <li>Outpatient psychiatry consultation.</li>
                        <li>Outpatient psychology consultation.</li>
                        <li>Nutrition consultation.</li>
                        <li>Neuropsychological and psychological tests.</li>
                        <li>Couples therapy.</li>
                        <li>Family therapy.</li>
                        <li>Individual therapy.</li>
                        <li>Psychiatric support.</li>
                    </ul>
                    }
                    <button aria-label='Cerrar Informacion' onClick={()=>setExtended(null)}><ChevronUp  size={27}/></button>
                </div>
                }
            </div>
            <div className='servicio_seccion'>
                <h3 className='servicio_tittle' aria-label='Abrir Informacion' onClick={()=>{extended==3?setExtended(null):setExtended(3)}}>
                    {language==='ES'?'Atención psiquiátrica continua 24 horas.':'Continuous Psychiatric Care 24 Hours.'}
                    <span>{extended === 3? <ChevronDown/>: <ChevronRight />}</span>
                    <div className='overlay_servicio'></div>
                </h3>
                {extended === 3 &&
                <div className='servicio_content liquid_glass_style'>
                    <p>{language==='ES'?
                    `Servicio de atención psiquiátrica las 24 horas que tiene ciomo objetivo intervenir de manera oportuna, eficiente y eficaz cuando un paciente presenta 
                    agudización de sus síntomas o la necesidad de una evaluación inmediata.`
                    :
                    `24-hour psychiatric care service aimed at providing timely, efficient, and effective intervention when a patient experiences an exacerbation of symptoms
                     or requires an immediate evaluation.`}</p>
                    <div style={{width:"100%", height:"20px"}}><button aria-label='Cerrar Informacion' onClick={()=>setExtended(null)}><ChevronUp  size={27}/></button></div>

                </div>
                }
            </div>
            <div className='servicio_seccion' id='atencion_todas_edades'>
                <h3 className='servicio_tittle' aria-label='Abrir Informacion' onClick={()=>{extended==4?setExtended(null):setExtended(4)}}>
                    {language==='ES'?
                    'Atención para todas las edades.':'Care for All Ages.'}
                    <span>{extended === 4? <ChevronDown/>: <ChevronRight />}</span>
                    <div className='overlay_servicio'></div>
                </h3>
               {extended === 4 &&
                <div className='servicio_content liquid_glass_style'>
                     {language==='ES'?
                    <ul style={{listStyle:"square", textAlign:"left"}}>
                        <p>
                           En BNS contamos con equipo certificado para evaluación, manejo y seguimiento de pacientes de todas las edades.
                           -	Características principales:
                        </p>
                        <li>Flexibilidad: </li>
                        <p>
                            El tratamiento se adapta al horario del paciente, que asiste a citas durante el día y regresa a su hogar por las noches. 
                        </p>
                        <li>Evaluación integral: </li>
                        <p> 
                            Se realiza un diagnóstico inicial que puede incluir evaluaciones de salud mental, social, nutricional, emocional, entre otros
                            para determinar las necesidades específicas del paciente y su familia. 
                        </p>
                        <li>Enfoque multidisciplinario:</li>
                        <p>
                            Combina a las diversas especialidades y servicios para un abordaje completo. 
                        </p>
                        <li>Manejo de síntomas en la vida real:</li>
                        <p>
                            Los profesionales pueden asignar tareas para practicar habilidades aprendidas en terapia, como escribir patrones de pensamiento 
                            negativos o ejercicios de atención plena. 
                        </p>
                        <li>Seguimiento y apoyo continuo:</li>
                        <p>
                            El seguimiento puede incluir entrevistas con trabajadores sociales, comunicación a distancia (llamadas, mensajes), etc
                             y garantizar la continuidad del tratamiento. 
                        </p>
                    </ul>:
                    <ul style={{listStyle:"square", textAlign:"left"}}>
                        <p>
                            At BNS, we have a certified team for the evaluation, management, and follow-up of patients of all ages.
                            Main characteristics:
                        </p>
                        <li>Flexibility:</li>
                        <p>
                            The treatment adapts to the patient’s schedule, allowing them to attend appointments during the day and return home at night.
                        </p>
                        <li>Comprehensive evaluation: </li>
                        <p> 
                            An initial diagnosis is conducted, which may include mental, social, nutritional, and emotional health assessments, among others, 
                            to determine the specific needs of the patient and their family.
                        </p>
                        <li>Multidisciplinary approach:</li>
                        <p>
                            Combines various specialties and services for a complete and integrated approach.
                        </p>
                        <li>Real-life symptom management::</li>
                        <p>
                            Professionals may assign tasks to practice skills learned in therapy, such as writing down negative thought patterns or mindfulness exercises.
                        </p>
                        <li>Continuous follow-up and support:</li>
                        <p>
                            Follow-up may include interviews with social workers, remote communication (calls, messages), etc., to ensure continuity of care.
                        </p>
                    </ul>
                    }
                    <button aria-label='Cerrar Informacion' onClick={()=>setExtended(null)}><a href='#programas'><ChevronUp  size={27}/></a></button>
                </div>
                }
            </div>
             <div className='servicio_seccion'>
                <h3 className='servicio_tittle' id='neuromodulacion' aria-label='Abrir Informacion' onClick={()=>{router.push("/neuromodulacion")}}>
                    {language==='ES'?'Neuromodulacion':'Neuromodulation'}
                    <span>{extended === 5? <ChevronDown/>: <ChevronRight />}</span>
                    <div className='overlay_servicio'></div>
                </h3>
            </div>

            <Instalaciones />

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