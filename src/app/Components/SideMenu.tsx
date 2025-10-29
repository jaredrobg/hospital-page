import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import '../page.css';
import Image from 'next/image';
import Link from 'next/link';


interface Props{
    visible: boolean;
    mobile: boolean;
    onClose: () => void;
    language: string;
}

export default function SideMenu({visible, mobile, onClose, language}: Props){

    return(
        <div className={'SideMenu_container_container'}>
            {visible && <div className="SideMenu_overlay" onClick={onClose}></div>}
            
            {mobile? (
                <div className={'SideMenu_container'} style={visible? {transform: "translateX(0)"}: {transform: "translateX(65vw)"}}>
                    <div className='SideMenu_section'>
                        <div className='SideMenu_logo'>
                            <Image src={'/images/logo.png'} 
                                alt='logo' 
                                fill 
                                style={{objectFit:'cover' , objectPosition:'center'}}
                                unoptimized
                            />
                        </div>
                        <div className='line'></div>
                    </div>
                    <ul className='SideMenu_section'>
                        <li className='SideMenu_option'><Link href='/' onClick={onClose}><p>{language === 'ES'?'Inicio':'Home'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/eventos' onClick={onClose}><p>{language === 'ES'?'Eventos':'Events'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/programas' onClick={onClose}><p>{language === 'ES'?'Programas':'Programs'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/contacto' onClick={onClose}><p>{language === 'ES'?'Contacto':'Contact Us'}</p></Link></li>
                    </ul>
                    <ul className='SideMenu_section'>
                        <li className='SideMenu_option'><Link href='/urgencias' onClick={onClose}><p>{language === 'ES'?'Urgencias':'Emergency'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/hospitalizacion' onClick={onClose}><p>{language === 'ES'?'Hospitalizacion':'Hospitalization'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/consulta-externa' onClick={onClose}><p>{language === 'ES'?'Consulta Externa':'Outpatient Consultation'}</p></Link></li>
                    </ul>
                </div>
            ):(
                <div className={'SideMenu_container'} style={visible? {transform: "translateX(0)"}: {transform: "translateX(65vw)"}}>
                    <div className='SideMenu_section'>
                        <div className='SideMenu_logo'>
                            <Image src={'/images/logo.png'} 
                                alt='logo' 
                                fill 
                                style={{objectFit:'cover' , objectPosition:`${ !mobile?'100% 37%':'100% 37%'}`}}
                                unoptimized
                            />
                        </div>
                        <div className='line'></div>
                    </div>
                    <ul className='SideMenu_section'>
                        <li className='SideMenu_option'><Link href='/' onClick={onClose}><p>{language === 'ES'?'Inicio':'Home'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/eventos' onClick={onClose}><p>{language === 'ES'?'Eventos':'Events'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/programas' onClick={onClose}><p>{language === 'ES'?'Programas':'Programs'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/contacto' onClick={onClose}><p>{language === 'ES'?'Contacto':'Contact Us'}</p></Link></li>
                    </ul>
                    <ul className='SideMenu_section'>
                        <li className='SideMenu_option'><Link href='/urgencias' onClick={onClose}><p>{language === 'ES'?'Urgencias':'Emergency'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/hospitalizacion' onClick={onClose}><p>{language === 'ES'?'Hospitalizacion':'Hospitalization'}</p></Link></li>
                        <li className='SideMenu_option'><Link href='/consulta-externa' onClick={onClose}><p>{language === 'ES'?'Consulta Externa':'Outpatient Consultation'}</p></Link></li>
                    </ul>
                </div>
            ) }
        </div>
    )
}