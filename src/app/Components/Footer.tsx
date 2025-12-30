<<<<<<< HEAD
'use client';
import '../page.css';
import Image from 'next/image';
import Link from 'next/link';
import { ImWhatsapp, ImPhone   } from "react-icons/im";
import { useLanguage } from "../Context/LanguageContext";




export default function Footer(){
    const {language} = useLanguage();

    
    const numero = "523331777727";
    const mensaje = "Hola, quisiera saber mas informacion.";
    const message = "Hi, I would like to recieve more information.";

    return(
        <div className='Footer_container'>
            <div className='Footer_section'>
                <div className='Footer_logo'>
                    <Image src={'/images/logo.png'} 
                        alt='logo' 
                        fill 
                        style={{objectFit:'cover' , objectPosition:'center'}}
                        unoptimized
                    />
                </div>
            </div>
            <div className='Footer_section'>
                <Link href='/' className='Footer_option' aria-label='Ir a Inicio'><p>{language === 'ES'?'Inicio':'Home'}</p></Link>
                <Link href="/eventos" className='Footer_option' aria-label='Ir a Eventos'><p>{language === 'ES'?'Eventos':'Events'}</p></Link>
                <Link href="/servicios" className='Footer_option' aria-label='Ir a Servicios'><p>{language === 'ES'?'Servicios':'Services'}</p></Link>
                <Link href="/aviso-de-privacidad" className='Footer_option' aria-label='Ir a Aviso de Privacidad'><p>{language === 'ES'?'Aviso de Privacidad':'Privacy Notice'}</p></Link>
            </div>
            <div className='Footer_section'>
                <h4 className='Footer_section_title'>{language === 'ES'?'Contacto':'Contact'}</h4>
                <div className='Footer_contacto_container'>
                    <a className='Footer_option' 
                        href={`https://wa.me/${numero}?text=${encodeURIComponent(language === 'ES' ? mensaje: message)}`}
                        target='_blank'         
                        rel="noopener noreferrer"
                        aria-label='Mandar Mensaje Por Whatsapp'
                    >
                        <ImWhatsapp /> 33 3177 7727
                    </a>
                    <a href="tel:+523338537217" className="Footer_option" aria-label='Llamar Por Telefono'>
                        <ImPhone  />  33 3853 7217
                    </a>
                </div>
                <a style={{display:"block", paddingTop:"10px", fontSize:"14px", color:"#555", width:"300px", margin:"auto"}} 
                href='https://maps.app.goo.gl/MdHVpKajxPYar2nb7' 
                target='_blank' rel="noopener noreferrer" aria-label='Ver Ubicacion en Google Maps'>
                    C. Andrés Terán 1328, Lomas del Country, 44620 Guadalajara, Jal.
                </a>
            </div>
            <div className='Footer_section'>Hospital BNS Todos los derechos reservados</div>
        </div>
    )
=======
'use client';
import '../page.css';
import Image from 'next/image';
import Link from 'next/link';
import { ImWhatsapp, ImPhone   } from "react-icons/im";
import { useLanguage } from "../Context/LanguageContext";




export default function Footer(){
    const {language} = useLanguage();

    
    const numero = "523331777727";
    const mensaje = "Hola, quisiera saber mas informacion.";
    const message = "Hi, I would like to recieve more information.";

    return(
        <div className='Footer_container'>
            <div className='Footer_section'>
                <div className='Footer_logo'>
                    <Image src={'/images/logo.png'} 
                        alt='logo' 
                        fill 
                        style={{objectFit:'cover' , objectPosition:'center'}}
                        unoptimized
                    />
                </div>
            </div>
            <div className='Footer_section'>
                <Link href='/' className='Footer_option' aria-label='Ir a Inicio'><p>{language === 'ES'?'Inicio':'Home'}</p></Link>
                <Link href="/eventos" className='Footer_option' aria-label='Ir a Eventos'><p>{language === 'ES'?'Eventos':'Events'}</p></Link>
                <Link href="/programas" className='Footer_option' aria-label='Ir a Programas'><p>{language === 'ES'?'Programas':'Programs'}</p></Link>
                <Link href="/aviso-de-privacidad" className='Footer_option' aria-label='Ir a Aviso de Privacidad'><p>{language === 'ES'?'Aviso de Privacidad':'Privacy Notice'}</p></Link>
            </div>
            <div className='Footer_section'>
                <h4 className='Footer_section_title'>{language === 'ES'?'Contacto':'Contact'}</h4>
                <div className='Footer_contacto_container'>
                    <a className='Footer_option' 
                        href={`https://wa.me/${numero}?text=${encodeURIComponent(language === 'ES' ? mensaje: message)}`}
                        target='_blank'         
                        rel="noopener noreferrer"
                        aria-label='Mandar Mensaje Por Whatsapp'
                    >
                        <ImWhatsapp /> 33 3177 7727
                    </a>
                    <a href="tel:+523338537217" className="Footer_option" aria-label='Llamar Por Telefono'>
                        <ImPhone  />  33 3853 7217
                    </a>
                </div>
                <a style={{display:"block", paddingTop:"10px", fontSize:"14px", color:"#555", width:"300px", margin:"auto"}} 
                href='https://maps.app.goo.gl/MdHVpKajxPYar2nb7' 
                target='_blank' rel="noopener noreferrer" aria-label='Ver Ubicacion en Google Maps'>
                    C. Andrés Terán 1328, Lomas del Country, 44620 Guadalajara, Jal.
                </a>
            </div>
            <div className='Footer_section'>Hospital BNS Todos los derechos reservados</div>
        </div>
    )
>>>>>>> dc89ab14eb64d960e17cc4795227c9549643d697
}