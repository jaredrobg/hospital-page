'use client';
import '../page.css';
import { useLanguage } from '../Context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa6';
import { ImPhone   } from "react-icons/im";
import { CalendarDays } from 'lucide-react';


export default function Contacto(){
    const {language} = useLanguage();
    
    const mensaje = "Hola, quisiera saber mas informacion.";
    const message = "Hi, I would like to recieve more information.";

    const mensajeCita = "Hola, me gustaria agendar una cita.";
    const messageCita = "Hi, I would like to book an appointment.";


    return(
        <div className='contacto_page'>
            <div className='contacto_flex'>
                <div className='contacto_flex_item'>
                    <h3 className='bubble_text'>{language == 'ES'?'Nuestra Ubicación':'Our Location'}</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.0722639519377!2d-103.36696859999999!3d20.6984836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae259b4cbbf1%3A0x4a5f2c94cf3446ea!2sC.%20Andr%C3%A9s%20Ter%C3%A1n%201328%2C%20Lomas%20del%20Country%2C%2044620%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1761241812357!5m2!1ses-419!2smx"
                        style={{border:"0px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <a style={{display:"block", paddingTop:"10px", fontSize:"14px", color:"#555", width:"300px", margin:"auto", textAlign:"center"}} 
                    href='https://maps.app.goo.gl/MdHVpKajxPYar2nb7' 
                    target='_blank'>
                        C. Andrés Terán 1328, Lomas del Country, 44620 Guadalajara, Jal.
                    </a>
                </div>
                <div className='contacto_flex_item buttons_container'>
                    <p>{language == 'ES'?'CONTACTANOS':'CONTACT US'}</p>
                    <a href={`https://wa.me/3331777727?text=${encodeURIComponent(language === 'ES' ? mensaje: message)}`}
                        target='_blank'         
                        rel="noopener noreferrer" 
                        className='contacto_button'><FaWhatsapp style={{marginTop:"2px"}} /> {language =='ES'?'Mandar Mensaje':'Send Message'}</a>
                    <a  href="tel:+523338537217" className='contacto_button'><ImPhone style={{marginTop:"1px"}} /> {language =='ES'?'Llamar':'Call'}</a>
                    <a href={`https://wa.me/3331777727?text=${encodeURIComponent(language === 'ES' ? mensajeCita: messageCita)}`}
                        target='_blank'         
                        rel="noopener noreferrer" 
                        className='contacto_button'><CalendarDays style={{marginTop:"1px"}} size={16}/> {language =='ES'?'Agendar Cita':'Book Appointment'}</a>
                </div>
            </div>
            <div className='contacto_info'>
                 <a className='contacto_info_item' 
                        href={`https://wa.me/3331777727?text=${encodeURIComponent(language === 'ES' ? mensaje: message)}`}
                        target='_blank'         
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp /> 33 3177 7727
                    </a>
                    <a href="tel:+523338537217" className="contacto_info_item">
                        <ImPhone  />  33 3853 7217
                    </a>
                    <p>C. Andrés Terán 1328, Lomas del Country, 44620 Guadalajara, Jal.</p>
            </div>
        </div>
    )
}