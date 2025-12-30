<<<<<<< HEAD
"use client";
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { ChevronUp} from 'lucide-react';
import { useState, useEffect } from "react";





const WhatsAppButton = ()=>{
    const mensaje =  "Hola, quisiera saber mas informacion.";
    const numero = "523331777727"
    return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label='Mandar Mensaje Por Whatsapp'
    >
      <FaWhatsapp size={32} color='#fff' strokeWidth={1}/>
    </a>
  );
}


const PhoneButton = ()=>{
    return (
    <a href="tel:+523338537217" className="whatsapp-button phone-button" aria-label='Llamar Por Telefono'>
        <ImPhone  size={25} color='#fff' strokeWidth={1}/>
    </a>
  );
}

const ScrollButton = ()=>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return(
        <button
        onClick={scrollToTop}
        className='whatsapp-button scroll_button liquid_glass_style'
        style={{display:isVisible? "block": "none"}}
        aria-label='Ir Arriba'
        >
            <ChevronUp size={27} color='#999' strokeWidth={4}/>
        </button>
    )
}

export {WhatsAppButton, PhoneButton, ScrollButton};
=======
"use client";
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { ChevronUp} from 'lucide-react';
import { useState, useEffect } from "react";





const WhatsAppButton = ()=>{
    const mensaje =  "Hola, quisiera saber mas informacion.";
    const numero = "523331777727"
    return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label='Mandar Mensaje Por Whatsapp'
    >
      <FaWhatsapp size={32} color='#fff' strokeWidth={1}/>
    </a>
  );
}


const PhoneButton = ()=>{
    return (
    <a href="tel:+523338537217" className="whatsapp-button phone-button" aria-label='Llamar Por Telefono'>
        <ImPhone  size={25} color='#fff' strokeWidth={1}/>
    </a>
  );
}

const ScrollButton = ()=>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return(
        <button
        onClick={scrollToTop}
        className='whatsapp-button scroll_button liquid_glass_style'
        style={{display:isVisible? "block": "none"}}
        aria-label='Ir Arriba'
        >
            <ChevronUp size={27} color='#999' strokeWidth={4}/>
        </button>
    )
}

export {WhatsAppButton, PhoneButton, ScrollButton};
>>>>>>> dc89ab14eb64d960e17cc4795227c9549643d697
