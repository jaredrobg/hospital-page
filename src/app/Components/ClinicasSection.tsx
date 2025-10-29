import '../page.css';
import Image from 'next/image';
import FadeIn from './FadeIn';


interface Props{
    language: string;
}

export default function ClinicasSection({language}: Props){

    return(
        <div className='ClinicasSection' style={{backgroundImage: "url('/images/Clinica_bg_image.webp')"}}>
            <h2 style={{fontSize:"30px", fontWeight:"500", marginTop:"20px"}}>{language==='ES'?'Hospital BNS': 'BNS Hospital'}</h2>
            <h3 style={{fontWeight:"200", fontSize:"22px"}}>{language === 'ES'?'Nuestras Clinicas':'Our Clinics'}</h3>
            <div className='clinicas_container'>
                <FadeIn>
                <div className='clinica_item'>{language === 'ES'?'Clínica de adicciones.':'Clinic for Addictions'}</div>
                <div className='clinica_img_container'>
                    <Image src='/images/clinica_adiccion.webp' alt='clinica_adiccion' fill style={{objectFit:'cover'}} unoptimized/>
                </div>
                </FadeIn>
                <FadeIn>
                <div className='clinica_item'>{language === 'ES'?'Clínica de trastornos del sueño.':'Clinic for Sleep Disorders'}</div>
                <div className='clinica_img_container'>
                    <Image src='/images/trastorno_sueño.webp' alt='clinica_sueño' fill style={{objectFit:'cover'}} unoptimized/>
                </div>
                </FadeIn>
                <FadeIn>
                <div className='clinica_item'>{language === 'ES'?'Clínica de trastornos de la conducta alimentaria':'Clinic for Eating Disorders'}</div>
                <div className='clinica_img_container'>
                    <Image src='/images/clinica_tca.webp' alt='clinica_tca' fill style={{objectFit:'cover'}} unoptimized/>
                </div>
                </FadeIn>
                <FadeIn>
                <div className='clinica_item'>{language === 'ES'?'Clínica de neuro modulación.':'Clinic for Neuromodulation'}</div>
                <div className='clinica_img_container'>
                    <Image src='/images/clinica_neuromodulacion.webp' alt='clinica_neuromodulacion' fill style={{objectFit:'cover'}} unoptimized/>
                </div>
                </FadeIn>
                <FadeIn>
                <div className='clinica_item'>{language === 'ES'?'Clínica de neuro desarrollo.':'Clinic for Neurodevelopment'}</div>
                <div className='clinica_img_container'>
                    <Image src='/images/clinica_nurodesarrollo.webp' alt='clinica_nurodesarrollo' fill style={{objectFit:'cover'}} unoptimized/>
                </div>
                </FadeIn>

            </div>
        </div>
    )
}