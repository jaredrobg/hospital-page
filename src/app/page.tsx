'use client';
import "./page.css";
import HeadImage from "./Components/HeadImage";
import ClinicasSection from "./Components/ClinicasSection";
import FadeIn from "./Components/FadeIn";
import PadecimientosSeccion from "./Components/PadecimientosSection";
import { useLanguage } from "./Context/LanguageContext";
import Instalaciones from "./Components/Instalaciones";
import SaludMental from "./Components/SaludMental";

export default function Home() {
  const {language} = useLanguage();
  return (
    <div className="App">
      <main>
        <HeadImage />


        <FadeIn>
          <h4 className="nosotros_title">{language === 'ES'? 'Nosotros...': 'About us...'}</h4>
        </FadeIn>

        <FadeIn>
          <div className="info_nosotros">
            { language === 'ES'?`Somos un hospital de salud mental que busca cuidar tu mente y cuerpo
             con un enfoque integral, a través de un equipo especializado en psiquiatría, 
             paidopsiquiatría, psicología y nutrición.`: `We are a mental health hospital dedicated to 
             caring for your mind and body with a comprehensive approach, through a specialized team in psychiatry, child and adolescent psychiatry
             , psychology, and nutrition.`}
          </div>
        </FadeIn>

        
        <div className='Instalaciones_background'>
        <FadeIn>
          <Instalaciones />
        </FadeIn>
        </div>

        <FadeIn>
        <ClinicasSection language={language}/>
        </FadeIn>
        
        <FadeIn>
          <PadecimientosSeccion />
        </FadeIn>

        <SaludMental language={language}/>

      </main>
    </div>
  );
}

