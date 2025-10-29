import '../page.css';
import FadeIn from './FadeIn';


interface Props{
    language: string;
}

export default function SaludMental({language}: Props){


    return(
        <div className='SaludMental_section'>
            <div className='salud_mental_title_container'>
                <FadeIn direction='right'>
                <h2 className='title1'>{language==='ES'? 'La Salud Mental': 'Mental Health'}</h2>
                </FadeIn>

                <FadeIn direction='left'>
                <h2 className='title2'>{language==='ES'? 'es nuestra prioridad': 'is our priority'}</h2>
                </FadeIn>
            </div>

            <FadeIn direction='right'>
                <div className='salud_mental_info_container container1'>
                    <p>{language==='ES'?'La salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida, desarrollar todo su potencial, aprender y trabajar adecuadamente y contribuir a su comunidad. Tiene un valor intrínseco e instrumental y es un derecho humano fundamental.'
                    :'Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn and work well, and contribute to their community. It has intrinsic and instrumental value and is a basic human right.'}</p>
                </div>
            </FadeIn>
            <FadeIn direction='left'>
                <div className='salud_mental_info_container container2'>
                    <p>{language==='ES'?'La salud mental se da en un proceso continuo complejo, que cada persona experimenta de una manera diferente. En un momento dado, un conjunto diverso de factores individuales, familiares, comunitarios y estructurales pueden combinarse para proteger la salud mental o socavarla. Aunque la mayoría de las personas son resilientes, las que están expuestas a circunstancias adversas corren un mayor riesgo de tener una afección de salud mental.'
                    :'Mental health exists on a complex continuum, which is experienced differently from one person to the next. At any one time, a diverse set of individual, family, community and structural factors may combine to protect or undermine mental health. Although most people are resilient, people who are exposed to adverse circumstances are at higher risk of developing a mental health condition.'}</p>
                </div>
            </FadeIn>
            <FadeIn direction='right'>
                <div className='salud_mental_info_container container3'>
                    <p>{language==='ES'?'Las afecciones de salud mental comprenden los trastornos mentales y las discapacidades psicosociales, así como otros estados mentales asociados a un alto grado de angustia, discapacidad funcional o riesgo de conducta autolesiva. Muchas afecciones de salud mental pueden tratarse con eficacia a un costo relativamente bajo, aunque los sistemas de salud siguen teniendo considerables limitaciones de recursos y en todo el mundo se registran importantes brechas terapéuticas.'
                    :'Mental health conditions include mental disorders and psychosocial disabilities as well as other mental states associated with significant distress, impairment in functioning, or risk of self-harm. Many mental health conditions can be effectively treated at relatively low cost, yet health systems remain significantly under-resourced and treatment gaps are wide all over the world.'}</p>
                </div>
            </FadeIn>

        </div>
    )
}