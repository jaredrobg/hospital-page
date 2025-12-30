'use client';
import '../page.css';
import { useLanguage } from '../Context/LanguageContext';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { CalendarDays } from 'lucide-react';
import { ChevronDown, ChevronUp} from 'lucide-react';
import { useState } from 'react';
import Instalaciones from '../Components/Instalaciones';


export default function Neuromodulacion(){
    const {language} = useLanguage();
    const [extended, setExtended] = useState<number>();
    const mensajeCita = "Hola, me gustaria agendar una cita.";
    const messageCita = "Hi, I would like to book an appointment.";
    const neuroTreatments = [
        {
        content: language==='ES'? `Depresión`: `Depression`,
        },
        {
        content: language==='ES'? `Trastorno Obsesivo Compulsivo (TOC)`: `Obsessive-Compulsive Disorder (OCD)`,
        },
        {
        content: language==='ES'? `Déficit de Atención e Hiperactividad (TDAH)`: `Attention Deficit Hyperactivity Disorder (ADHD)`,
        },
        {
        content: language==='ES'? `Ansiedad`: `Anxiety`,
        },
        {
        content: language==='ES'? `Dolor crónico`: `Chronic pain`,
        },
        {
        content: language==='ES'? `Enfermedad de Alzheimer`: `Alzheimer's disease`,
        },
        {
        content: language==='ES'? `Secuelas de accidente cerebrovascular.`: `Stroke sequelae`,
        },
        {
        content: language==='ES'? `Entre otros...`: `Among others...`,
        },        
    ]

    return(
        <div className='neuromodulacion_page'>
            <h2>{language==='ES'?'Neuromodulacion': 'Neuromodulation'}</h2>
            <p className='neuromodulacion_page_content' style={{paddingLeft:"20px"}}>
                {language === 'ES'? `La neuromodulación es un conjunto de técnicas que buscan modificar la actividad 
                cerebral para mejorar la función cognitiva, emocional entre otros.`
                : `Neuromodulation is a set of techniques aimed at modifying brain activity to improve cognitive, emotional, 
                and other types of functioning.`}
            </p>
            <div className='neuromodulacion_page_content_container purple' style={{marginTop:"20px"}}>
                <p className='neuromodulacion_page_content'>
                    {language === 'ES'? `Estas técnicas se basan en la estimulación de áreas específicas del cerebro mediante diferentes métodos, como:`
                    : `These techniques are based on stimulating specific areas of the brain through different methods, such as:`}
                </p> 

                <ul>
                    <li>
                        <div className='neuromodulacion_li_content'>
                            <h4>{language==='ES'? `Neurofeedback.`: `Neurofeedback.`}</h4>
                            <p>{language==='ES'? `Apoyo innovador y no invasivo para la ansiedad, el TDAH, la depresión y mejorar el rendimiento cognitivo. 
                            Es un "entrenamiento" para su cerebro que, a través de la tecnología, le enseña a funcionar de manera más eficiente y equilibrada.`
                            : `An innovative, non-invasive support for anxiety, ADHD, depression, and improving cognitive performance. It is a type of 
                            “training” for your brain that, through technology, teaches it to function more efficiently and in a more balanced way.`}</p>

                            <div onClick={()=>{extended===1?setExtended(0):setExtended(1)}}>
                                {extended === 1?  <ChevronUp style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>
                                : <ChevronDown style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>}
                            </div>

                            {extended === 1 &&<p style={{marginTop:"10px"}}>{language==='ES'? `Se puede aplicar a diversos trastornos, desde el TDAH hasta la ansiedad, 
                            ayudando a mejorar la concentración y el control emocional, junto con una amplia gama de protocolos para el tratamiento de 
                            secuelas en el sistema nervioso y rehabilitación cognitiva.`
                            : `It can be applied to various disorders, from ADHD to anxiety, helping improve focus and emotional regulation, as well 
                            as being useful for nervous system sequelae and cognitive rehabilitation.`}</p>}
                        </div>
                        
                        <div className='neuromodulacion_image' style={{marginTop:"10px"}}>  
                            <Image src='images/neuromodulacion1.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='cover'
                                objectPosition='left'
                            />
                        </div>
                    </li>
                    <li>
                        <div className='neuromodulacion_li_content'>
                            <h4>{language==='ES'? `Estimulación magnética transcraneal (EMT):`: `Transcranial Magnetic Stimulation (TMS)`}</h4>
                            <p>{language==='ES'? `Una técnica no invasiva que utiliza campos magnéticos para estimular áreas específicas del cerebro. 
                            Estos campos generan una corriente eléctrica que modifica la actividad neuronal.`
                            : `A non-invasive technique that uses magnetic fields to stimulate specific areas of the brain. These fields generate an 
                            electrical current that modifies neuronal activity.`}</p>

                            <div onClick={()=>{extended===2?setExtended(0):setExtended(2)}}>
                                {extended === 2?  <ChevronUp style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>
                                : <ChevronDown style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>}
                            </div>

                            {extended===2 &&<p style={{marginTop:"10px"}}>{language==='ES'? `Es un tratamiento eficaz para padecimientos resistentes, con resultados 
                            positivos en aproximadamente el 60% de los pacientes con depresión que no respondieron a otros tratamientos.`
                            : `An effective treatment for resistant conditions, with positive results in approximately 60% of patients with depression 
                            who did not respond to other treatments.`}</p>}
                        </div>
                        
                        <div className='neuromodulacion_image' style={{marginTop:"10px"}}>  
                            <Image src='images/neuromodulacion2.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='cover'
                                objectPosition='left'
                            />
                        </div>
                    </li>
                    <li>
                        <div className='neuromodulacion_li_content'>
                            <h4>{language==='ES'? `Terapia de corriente directa transcraneal (TDCS):`: `Transcranial Direct Current Stimulation (tDCS)`}</h4>
                            <p>{language==='ES'? `Una técnica de neuroestimulación no invasiva que aplica una corriente eléctrica de baja intensidad a 
                            través de electrodos colocados en el cuero cabelludo.`
                            : `A non-invasive neurostimulation technique that applies a low-intensity electrical current through electrodes placed 
                            on the scalp.`}</p>

                            <div onClick={()=>{extended===3?setExtended(0):setExtended(3)}}>
                                {extended === 3?  <ChevronUp style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>
                                : <ChevronDown style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>}
                            </div>

                            {extended === 3 &&<p style={{marginTop:"10px"}}>{language==='ES'? `Ayuda para diversos trastornos neurológicos y psiquiátricos, como la depresión 
                            y el dolor crónico. Cuenta la ventaja de ser un procedimiento simple y ambulatorio.`
                            : `Used for various neurological and psychiatric disorders, such as depression and chronic pain. It has the advantage of being 
                            a simple, outpatient procedure.`}</p>}
                        </div>
                        
                        <div className='neuromodulacion_image' style={{marginTop:"10px"}}>  
                            <Image src='images/neuromodulacion3.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='cover'
                                objectPosition='left'
                            />
                        </div>
                    </li>
                    <li>
                        <div className='neuromodulacion_li_content'>
                            <h4>{language==='ES'? `Electroconvulsivoterapia (TEC):`: `Electroconvulsive Therapy (ECT)`}</h4>
                            <p>{language==='ES'? `Un procedimiento médico en el que se aplican breves pulsos de corriente eléctrica al cerebro 
                            mientras el paciente está bajo anestesia y sedación, provocando una convulsión controlada.`
                            : `A medical procedure in which brief electrical pulses are applied to the brain while the patient is under anesthesia and 
                            sedation, producing a controlled seizure.`}</p>

                            <div onClick={()=>{extended===4?setExtended(0):setExtended(4)}}>
                                {extended === 4?  <ChevronUp style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>
                                : <ChevronDown style={{display:"block",margin:"10px auto", cursor:"pointer"}} size={30}/>}
                            </div>

                            {extended === 4 &&<p style={{marginTop:"10px"}}>{language==='ES'? `Es una opción de tratamiento altamente efectiva para la depresión severa, 
                            la catatonia y otros trastornos psiquiátricos graves, especialmente cuando otros tratamientos no han funcionado, requiere de un 
                            proceso anestésico. `
                            : `A highly effective treatment option for severe depression, catatonia, and other serious psychiatric disorders, especially 
                            when other treatments have not worked. It requires an anesthetic process.`}</p>}
                        </div>
                        
                        <div className='neuromodulacion_image' style={{marginTop:"10px"}}>  
                            <Image src='images/neuromodulacion4.webp' 
                                alt='habitacion_compartida'
                                unoptimized
                                fill
                                objectFit='cover'
                                objectPosition='center 20%'

                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='neuromodulacion_page_content_container white'>
                <h4 style={{fontSize:"25px"}}>{language === 'ES'? `¿Para qué se utiliza la neuromodulación?`: `What is neuromodulation used for?`}</h4>
                <p className='neuromodulacion_page_content'>
                    {language === 'ES'? `La neuromodulación se utiliza para tratar una amplia gama de trastornos, incluyendo:`
                    : `Neuromodulation is used to treat a wide range of disorders, including:`}
                </p> 
                <div className='neuromodulation_treatments'>
                    <div className='treatment_slider'>
                        {[...neuroTreatments, ...neuroTreatments].map((item, index)=>(
                            <p className='treatment bubble_text' key={index}>{item.content}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='neuromodulacion_page_content_container blue'>
                <h4 style={{fontSize:"25px"}}>{language === 'ES'? `¿Cómo funciona la neuromodulación?`: `How does neuromodulation work?`}</h4>
                <p className='neuromodulacion_page_content'>
                    {language === 'ES'? `Las técnicas de neuromodulación pueden:`
                    : `Neuromodulation techniques can:`}
                </p> 
                <div>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Aumentar la actividad neuronal en áreas del cerebro que están poco activas.`
                    :`Increase neuronal activity in underactive brain areas`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Disminuir la actividad neuronal en áreas del cerebro que están hiperactivas.`
                    :`Decrease neuronal activity in overactive brain areas`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Modificar la conectividad entre diferentes áreas del cerebro.`
                    :`Modify connectivity between different brain regions`}</p>
                </div>
                <div className='neuromodulacion_image' style={{marginTop:"20px"}}>  
                    <Image src='images/neuromodulacion5.webp' 
                        alt='habitacion_compartida'
                        unoptimized
                        fill
                        objectFit='cover'
                        objectPosition='left'
                    />
                </div>

                <h4 style={{fontSize:"25px", marginTop:"25px"}}>{language === 'ES'? `¿Cuáles son los beneficios de la neuromodulación?`
                : `What are the benefits of neuromodulation?`}</h4>
                <p className='neuromodulacion_page_content'>
                    {language === 'ES'? `La neuromodulación ofrece una serie de beneficios potenciales, incluyendo:`
                    : `Neuromodulation offers several potential benefits, including:`}
                </p> 
                <div>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Es un tratamiento no invasivo`
                    :`It is a non-invasive treatment`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Es generalmente bien tolerado`
                    :`It is generally well tolerated`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Puede ser eficaz en pacientes que no han respondido a otros tratamientos`
                    :`It can be effective for patients who have not responded to other treatments`}</p>
                </div>
                <div className='neuromodulacion_image' style={{marginTop:"20px"}}>  
                    <Image src='images/neuromodulacion6.webp' 
                        alt='habitacion_compartida'
                        unoptimized
                        fill
                        objectFit='cover'
                        objectPosition='left'
                    />
                </div>
            </div>
            <div className='neuromodulacion_page_content_container white'>
                <h4 style={{fontSize:"25px"}}>{language === 'ES'? `¿Qué debo esperar después de la neuromodulación?`: 
                `What should I expect after neuromodulation?`}</h4>
                <p className='neuromodulacion_page_content'>
                    {language === 'ES'? `La mayoría de los pacientes experimentan una mejoría gradual de sus síntomas después de 
                    la neuromodulación. El número de sesiones necesarias varía según el paciente y el trastorno que se esté tratando.`
                    : `Most patients experience gradual improvement in their symptoms after neuromodulation.
                    The number of sessions required varies depending on the condition being treated and the individual patient.`}
                </p> 

                <h4 style={{fontSize:"25px", marginTop:"25px"}}>{language === 'ES'? `¿Existen efectos secundarios?`: `Are there side effects?`}</h4>
                <p className='neuromodulacion_page_content'>
                    {language === 'ES'? `Los efectos secundarios de la neuromodulación son generalmente leves y transitorios, e incluyen:`
                    : `Side effects of neuromodulation are generally mild and temporary, and may include:`}
                </p>
                <div>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Dolor de cabeza`
                    :`Headache`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Molestias en el sitio de la estimulación`
                    :`Discomfort at the stimulation site`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Fatiga`
                    :`Fatigue`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Náuseas`
                    :`Nausea`}</p>
                </div>
                <div className='neuromodulacion_image' style={{marginTop:"20px"}}>  
                    <Image src='images/neuromodulacion7.webp' 
                        alt='habitacion_compartida'
                        unoptimized
                        fill
                        objectFit='cover'
                        objectPosition='left'
                    />
                </div>
            </div>

            <div className='neuromodulacion_page_content_container green'>
                <p>
                    {language === 'ES'? `La neuromodulación es un conjunto de técnicas que regulan la actividad cerebral, algunos ejemplos son la 
                    Estimulación Magnética Transcraneal (EMT), el Neurofeedback, la Estimulación Transcraneal por Corriente Directa (tDCS) y la Terapia 
                    Electroconvulsiva (TEC) que pueden ser ampliamente utulizados para diversos trastornos, como padecimientos psiquiátricos, 
                    contraindicaciones a fármacos, rehabilitción y entrenamiento cognitivo, padecimientos graves o resistentes, entre otros.`
                    : `Neuromodulation is a set of techniques that regulate brain activity. Some examples include Transcranial Magnetic Stimulation (TMS), 
                    Neurofeedback, Transcranial Direct Current Stimulation (tDCS), and Electroconvulsive Therapy (ECT). These techniques can be broadly 
                    used for various conditions such as psychiatric disorders, medication contraindications, rehabilitation and cognitive training, severe 
                    or treatment-resistant conditions, among others.`}
                </p>
                <div className='neuromodulacion_image' style={{marginTop:"20px"}}>  
                    <Image src='images/neuromodulacion8.webp' 
                        alt='habitacion_compartida'
                        unoptimized
                        fill
                        objectFit='cover'
                        objectPosition='left'
                    />
                </div>
                <div>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Agrupa diversas técnicas médicas que, mediante estímulos eléctricos, magnéticos 
                    o farmacológicos, buscan regular la actividad del sistema nervioso.`
                    :`It includes various medical techniques that, through electrical, magnetic, or pharmacological stimulation, aim to regulate the activity
                     of the nervous system.`}</p>
                    <p style={{marginTop:"5px"}}>-    {language==='ES'?`Es una herramienta eficaz para tratar trastornos neurológicos y psiquiátricos, 
                    especialmente aquellos que son resistentes a otros tratamientos, como la depresión severa, el trastorno obsesivo-compulsivo (TOC), 
                    algunos síntomas en trastornos del neurodesarrollo, la neurorehabilitación, entre otros. `
                    :`It is an effective tool for treating neurological and psychiatric disorders, especially those resistant to other treatments, 
                    such as severe depression, obsessive-compulsive disorder (OCD), certain symptoms in neurodevelopmental disorders, neurorehabilitation, 
                    among others.`}</p>
                </div> 
            </div>
            <div className='neuromodulacion_page_content_container white'>
                <h4 style={{fontSize:"25px"}}>{language === 'ES'? `¿Quiénes pueden beneficiarse?`: 
                `Who can benefit?`}</h4>
                <p className='neuromodulacion_page_content' style={{marginTop:"15px"}}> -  
                    {language === 'ES'? `La neuromodulación es una opción para personas con trastornos psiquiátricos como depresión, TOC, trastornos 
                    del neurodesarrollo, secuelas por algun padecimiento neurológico y otros, que no han respondido completamente a tratamientos 
                    convencionales como la medicación o la psicoterapia.`
                    : `Neuromodulation is an option for people with psychiatric disorders such as depression, OCD, neurodevelopmental disorders, 
                    neurological sequelae, and others who have not fully responded to conventional treatments such as medication or psychotherapy.`}
                </p>
                <p className='neuromodulacion_page_content' style={{marginTop:"15px"}}> -  
                    {language === 'ES'? `Es importante destacar que la decisión de utilizar una u otra técnica debe ser tomada por un médico }
                    especialista, quien evaluará el caso particular de cada paciente.`
                    : `It is important to emphasize that the decision to use one technique or another must be made by a medical specialist, who will evaluate each patient’s individual case.`}
                </p>  
            </div>

            <div className='Instalaciones_background' 
            style={{marginTop:"0", background: "linear-gradient(to bottom, #fff 0%, #b4dce8 30%, #b4dce8 70%, transparent 100%)"}}>
                <p className='neuromodulacion_page_content' style={{padding:"40px", marginTop:"40px", textAlign:"center"}}>
                    {language==='ES'? `En BNS, Especialidades Psicológicas y Psiquiátricas: Contamos con diversas alternativas para los tratamientos, 
                    siempre brindados en un ambiente cálido y profesional, acércate para solicitar información sobre nuestros servicios disponibles.`
                    : `At BNS Psychological and Psychiatric Specialties, we offer various treatment alternatives, always in a warm and professional 
                    environment. Contact us for more information about our available services.`}
                </p>
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