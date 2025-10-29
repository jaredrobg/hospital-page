'use client';
import '../page.css';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from "../Context/LanguageContext";



export default function PadecimientosSeccion(){
    const [cardVisible, setCardVisible] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const {language} = useLanguage();


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
        else setCardVisible(prev => Math.min(Padecimientos.length, prev + 1));
    }

    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    },[]);

    const Padecimientos = [
        {
            id:1,
            title:"Depresion",
            content:"La depresión es un trastorno del estado de ánimo grave que va más allá de la tristeza y se caracteriza por un sentimiento persistente de tristeza, pérdida de interés, falta de energía y dificultad para realizar actividades cotidianas."
        },
        {
            id: 2,
            title: "Trastorno bipolar",
            content:"El trastorno bipolar es una afección mental que provoca cambios extremos en el estado de ánimo, la energía y la capacidad de funcionar, caracterizados por períodos de euforia, irritabilidad o energía extrema (episodios maníacos) alternados con episodios de profunda tristeza o desesperanza (episodios depresivos)."
        },
        {
            id:3,
            title:"Psicosis",
            content:"Caracterizado por la pérdida de contacto con la realidad, manifestada a través de delirios, alucinaciones y lenguaje o comportamiento desorganizado."
        },
        {
            id:4,
            title:"Ansiedad",
            content:"Síndromes caracterizados por miedo y preocupación excesivos, que provocan alteraciones significativas en el funcionamiento diario. Los criterios diagnósticos varían según el trastorno específico, pero en general, implican un nivel de ansiedad o preocupación que es difícil de controlar, dura un tiempo prolongado."
        },
        {
            id:5,
            title:"Trastorno obsesivo compulsivo",
            content:"Presencia de obsesiones, compulsiones o ambas, que son recurrentes, intrusivas y causan ansiedad. Las compulsiones son comportamientos repetitivos o actos mentales que la persona realiza para reducir la ansiedad de las obsesiones, y el tiempo que se invierte en estos comportamientos debe ser significativo, afectando el funcionamiento diario."
        },
        {
            id:6,
            title:"Trastornos de la conducta alimentaria",
            content:"Un trastorno alimentario es un estado de conducta caracterizado por una alteración grave y persistente de las conductas alimentarias y está asociado con emociones y pensamientos angustiantes.¹ Este tipo de trastorno puede afectar la función física, psicológica y social."
        },
        {
            id:7,
            title:"Trauma y adaptación",
            content:"Los trastornos de adaptación se clasifican dentro de los trastornos relacionados con traumas y factores de estrés, y se definen como una reacción psicológica desproporcionada a un evento estresante."
        },
        {
            id:8,
            title:"Trastornos de la conducta",
            content:"Se caracteriza por un patrón de comportamiento persistente en el que se violan los derechos de los demás y las normas sociales, como la agresión, la destrucción de la propiedad, el engaño y la violación grave de las reglas."
        },
        {
            id:9,
            title:"Trastornos de la personalidad",
            content:"Los trastornos de la personalidad se dividen en tres clusters (A, B y C) basados en características similares: Grupo A (raro/excéntrico: paranoide, esquizoide, esquizotípico), Grupo B (dramático/emotivo/errático: límite, antisocial, histriónico, narcisista) y Grupo C (ansioso/temeroso: evitativo, dependiente, obsesivo-compulsivo)."
        },
        {
            id:10,
            title:"Trastornos del neurodesarrollo",
            content:"Grupo de afecciones con inicio en la etapa de desarrollo que provocan déficits en el funcionamiento personal, académico o social. Incluyen la Discapacidad Intelectual, los Trastornos de la Comunicación, el Trastorno del Espectro Autista (TEA), el Trastorno por Déficit de Atención e Hiperactividad (TDAH) y otros trastornos del neurodesarrollo."
        }
    ];

    const Disorders=[
    {
        id: 1,
        title: "Depression",
        content:
        "Depression is a serious mood disorder that goes beyond sadness. It is characterized by a persistent feeling of sadness, loss of interest, lack of energy, and difficulty performing daily activities."
    },
    {
        id: 2,
        title: "Bipolar Disorder",
        content:
        "Bipolar disorder is a mental condition that causes extreme changes in mood, energy, and ability to function, characterized by periods of euphoria, irritability, or extreme energy (manic episodes) alternating with episodes of deep sadness or hopelessness (depressive episodes)."
    },
    {
        id: 3,
        title: "Psychosis",
        content:
        "Characterized by a loss of contact with reality, manifested through delusions, hallucinations, and disorganized speech or behavior."
    },
    {
        id: 4,
        title: "Anxiety",
        content:
        "Syndromes characterized by excessive fear and worry, causing significant disruptions in daily functioning. Diagnostic criteria vary by specific disorder but generally involve a level of anxiety or worry that is difficult to control and persists over a long period."
    },
    {
        id: 5,
        title: "Obsessive-Compulsive Disorder",
        content:
        "Presence of obsessions, compulsions, or both, which are recurrent, intrusive, and cause anxiety. Compulsions are repetitive behaviors or mental acts performed to reduce the anxiety caused by obsessions, and the time spent on these behaviors is significant enough to affect daily functioning."
    },
    {
        id: 6,
        title: "Eating Disorders",
        content:
        "An eating disorder is a behavioral condition characterized by a severe and persistent disturbance in eating behaviors, associated with distressing emotions and thoughts. This type of disorder can affect physical, psychological, and social functioning."
    },
    {
        id: 7,
        title: "Trauma and Adjustment",
        content:
        "Adjustment disorders are classified within trauma- and stressor-related disorders and are defined as a disproportionate psychological reaction to a stressful event."
    },
    {
        id: 8,
        title: "Conduct Disorders",
        content:
        "Characterized by a persistent pattern of behavior in which the rights of others and social norms are violated, such as aggression, destruction of property, deceitfulness, and serious rule violations."
    },
    {
        id: 9,
        title: "Personality Disorders",
        content:
        "Personality disorders are divided into three clusters (A, B, and C) based on similar characteristics: Cluster A (odd/eccentric: paranoid, schizoid, schizotypal), Cluster B (dramatic/emotional/erratic: borderline, antisocial, histrionic, narcissistic), and Cluster C (anxious/fearful: avoidant, dependent, obsessive-compulsive)."
    },
    {
        id: 10,
        title: "Neurodevelopmental Disorders",
        content:
        "A group of conditions with onset during the developmental period that cause deficits in personal, academic, or social functioning. They include Intellectual Disability, Communication Disorders, Autism Spectrum Disorder (ASD), Attention-Deficit/Hyperactivity Disorder (ADHD), and other neurodevelopmental disorders."
    }
    ]


    return(
        <div className='PadecimientosSeccion'>
            <h4 className='bubble_text'>{language =='ES' ? 'PADECIMIENTOS': 'DISORDERS'}</h4>
            {isMobile?
            <div className='Padecimientos_container'>
                <ul className='Padecimientos_list'>
                    <button
                        className='button _back'
                        disabled={cardVisible === 1}
                        style={{ opacity: cardVisible === 1 ? 0 : 1 }}
                        onClick={() => setCardVisible((prev) => prev - 1)}
                    >
                        <ChevronLeft />
                    </button>

                    <div
                        className='Padecimientos_slider'
                        style={{
                        transform: `translateX(-${(cardVisible - 1) * 100}%)`,
                        }}
                        
                    >
                        {(language === 'ES' ? Padecimientos: Disorders).map((padecimiento, index) => (
                        <div className='Padecimiento_card' key={index} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                            <div className='card_container'>
                                <h4 className='Padecimiento_tittle'>{padecimiento.title}</h4>
                                <div className='Padecimiento_content'>
                                <p>{padecimiento.content}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <button
                        className='button _next'
                        style={{ opacity: cardVisible === 10 ? 0 : 1 }}
                        disabled={cardVisible === Padecimientos.length}
                        onClick={() => setCardVisible((prev) => prev + 1)}
                    >
                        <ChevronRight />
                    </button>
                </ul>
            </div>
            :
            <div className='Padecimientos_container'>
                <ul className='Padecimientos_list'>
                    <button
                        className='button _back'
                        disabled={cardVisible === 1}
                        style={{ opacity: cardVisible === 1 ? 0 : 1 }}
                        onClick={() => setCardVisible(prev => Math.max(1, prev - 1))}
                    >
                        <ChevronLeft />
                    </button>

                    <div
                        className='Padecimientos_slider'
                        style={{
                        transform: `translateX(-${(cardVisible - 1) * 99.1}%)`,
                        }}
                    >
                        {Padecimientos.map((padecimiento, index) => (
                        <li className='Padecimiento_card' key={index}>
                            <div className='card_container'>
                                <h4 className='Padecimiento_tittle'>{padecimiento.title}</h4>
                                <div className='Padecimiento_content'>
                                <p>{padecimiento.content}</p>
                                </div>
                            </div>
                        </li>
                        ))}
                    </div>

                    <button
                        className='button _next'
                        style={{ opacity: cardVisible === 10 ? 0 : 1 }}
                        disabled={cardVisible === Padecimientos.length}
                        onClick={() => setCardVisible(prev => Math.min(Padecimientos.length/3, prev + 1))}
                    >
                        <ChevronRight />
                    </button>
                </ul>
            </div>
            }
        </div>
    )
}