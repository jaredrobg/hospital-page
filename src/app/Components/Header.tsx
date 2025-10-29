'use client';
import '../page.css';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import Link from 'next/link';
import { Globe, ChevronDown  } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';


const Header =()=>{
    const {language} = useLanguage();
    const [isMobile, setIsMobile] = useState(false);
    const [visible, setVisible] = useState(false);
    const [className, setClassName] = useState("");
    const [menuCita, setMenuCita] = useState(false);

    const mensaje = "Hola, me gustaria agendar una cita.";
    const message = "Hi, I would like to book an appointment.";


    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    },[]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
            setClassName(""); 
            } else if (window.scrollY > 100) {
            setClassName("float_menu liquid_glass_style"); 
            } else {
            setClassName(""); 
            }
        
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return(
        <div className='Header_container'>
            <ul className='Header_list'>
                <li className='Header_section logo'>
                    {!isMobile? (
                    <div className='overlay_header_img_container'>
                    <div className='header_img_container'>
                        <Link href='/' aria-label='Ir a Inicio'>
                        <Image src={isMobile?'/images/logo_responsive.png':'/images/logo_header.png'} 
                            alt='logo' 
                            fill 
                            style={{objectFit:"cover", objectPosition:`${ isMobile?'center':'center'}`}}
                            sizes=''
                            unoptimized
                        />
                        </Link>
                    </div>
                    </div>
                    ):
                    (<div className='header_img_container'>
                        <Link href='/' aria-label='Ir a Inicio'>
                        <Image src={isMobile?'/images/logo_responsive.png':'/images/logo.png'} 
                            alt='logo' 
                            fill 
                            style={{objectFit:"cover", objectPosition:`${ isMobile?'center':'center'}`}}
                            sizes=''
                            unoptimized
                        />
                        </Link>
                    </div>
                    )
                    }
                </li>
                {!isMobile && 
                <>
                <li className='Header_section'><Link href='/' aria-label='Ir a Inicio'><p>{language === 'ES'?'Inicio':'Home'}</p></Link></li>
                <li className='Header_section'><Link href='/eventos' aria-label='Ir a Eventos'><p>{language === 'ES'?'Eventos':'Events'}</p></Link></li>
                <li className='Header_section'><Link href='/programas' aria-label='Ir a Programas'><p>{language === 'ES'?'Programas':'Programs'}</p></Link></li>
                <li className='Header_section' style={{marginLeft:"10px"}}><Link href='/contacto' aria-label='Ir a Contacto'><p>{language === 'ES'?'Contacto':'Contact'}</p></Link></li>
                </>
                }
                {/*href='https://ff.healthatom.io/VApDmT'*/}
                <li className='Header_section boton_agendar' onMouseEnter={()=>setMenuCita(true)} onMouseLeave={()=>setMenuCita(false)}>
                    {language === 'ES'? 'Agendar Cita': 'Book Appointment'}
                    {menuCita &&
                    <div className='Header_agendar_menu'>
                        <ul>
                            <li className='Header_agendar_option'>
                                <a  href={`https://wa.me/3331777727?text=${encodeURIComponent(language === 'ES' ? mensaje: message)}`} aria-label='Agendar Cita Por Whatsapp' target='_blank' rel="noopener noreferrer">
                                <p>{language === 'ES'?'Agendar Por Whatsapp':'Book Through Whatsapp'}</p>
                                </a>
                            </li>
                            <li className='Header_agendar_option'>
                                <a href="tel:+523338537217" aria-label='Agendar Cita Por Telefono'>
                                    <p>{language === 'ES'?'Agendar Por Telefono':'Book Through Phonecall'}</p>
                                </a>
                            </li>
                        </ul>
                    </div>}
                </li>
                <li className={`Header_section menu ${className}`}><button aria-label='Abrir Menu'><Menu  onClick={()=>setVisible(true)}/></button></li>
                <li className='Header_section mock'></li>
            </ul>
            {visible && <LanguageButton />}
            <SideMenu visible={visible} mobile={isMobile} onClose={()=>setVisible(false)} language={language} />
        </div>
    )
}
export default Header;

const LanguageButton = ()=>{
    const {language, selectLanguage} = useLanguage();
    const [extended, setExtended] = useState(false);   

    return(
        <div className='lang_button'>
            <button onClick={()=>setExtended(!extended)} className='liquid_glass_style'>
                <Globe size={16}  strokeWidth={1}/> <p> {language}</p> <ChevronDown size={15} />
            </button>
            {extended && 
            <ul className='language_menu liquid_glass_style'>
                <li className='language_option'>{language==='ES'?'Seleccione Idioma':'Select Language'}</li>
                <li className='language_option' onClick={()=>{setExtended(false); selectLanguage('ES')}}>Español</li>
                <li className='language_option' onClick={()=>{setExtended(false); selectLanguage('ENG')}}>English</li>
            </ul>
            }
        </div>
    )
}