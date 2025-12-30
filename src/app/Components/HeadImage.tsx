<<<<<<< HEAD
'use client';
import '../page.css';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from "../Context/LanguageContext";



export default function HeadImage(){
    const [isMobile, setIsMobile] = useState(false);
    const {language} = useLanguage();


    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    },[]);

    const images = [
        '/images/HeadImage1.webp',
        '/images/HeadImage2.webp',
        '/images/HeadImage3.webp',
        '/images/HeadImage4.webp',
        '/images/HeadImage5.webp',
        '/images/HeadImage6.webp',
    ];
    const imagesMobile = [
        '/images/HeadImage1_mobile.webp',
        '/images/HeadImage2_mobile.webp',
        '/images/HeadImage3_mobile.webp',
        '/images/HeadImage4_mobile.webp',
        '/images/HeadImage5_mobile.webp',
        '/images/HeadImage6_mobile.webp',
    ];

    const extendedImages =  isMobile ? [...imagesMobile, ...imagesMobile] : [...images, ...images];

    const [index, setIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => prev + 1)
        }, 9000)

        return () => clearInterval(interval)
    }, []);

    // Cuando llega a la mitad (segunda copia), reseteamos sin animación
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        if (index === images.length) {
        track.style.transition = 'none'
        setIndex(0)

        // Forzamos reflow para aplicar el cambio sin animar
        void track.offsetHeight

        setTimeout(() => {
            track.style.transition = 'transform 1s ease-in-out'
        }, 50)
        }
    }, [index, images.length]);


    return(
        <div className='HeadImage_container'>
            <div className='HeadImage_image_container'>
               <div
                    ref={trackRef}
                    className="HeadImage_track"
                    style={{
                    transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {extendedImages.map((src, i) => (
                    <div className="HeadImage_slide" key={i}>
                        <Image
                        src={src}
                        alt={`Head Image ${i + 1}`}
                        fill
                        style={{objectFit:"cover", objectPosition:`${isMobile ? "top" : i == 3 ? "0% 40%" : "top"}`}}
                        priority={i === 0}
                        sizes=''
                        unoptimized
                        />
                    </div>
                    ))}
                </div>
            </div>
            <div className='HeadImage_frase'>
                {language === 'ES'?<><p>Tu bienestar,</p> <p>nuestro compromiso mas humano.</p></>
                :<><p>Your well-being,</p> <p>our deepest human commitment.</p></>}</div>
        </div>
    )
=======
'use client';
import '../page.css';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from "../Context/LanguageContext";



export default function HeadImage(){
    const [isMobile, setIsMobile] = useState(false);
    const {language} = useLanguage();


    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    },[]);

    const images = [
        '/images/HeadImage1.webp',
        '/images/HeadImage2.webp',
        '/images/HeadImage3.webp',
        '/images/HeadImage4.webp',
        '/images/HeadImage5.webp',
        '/images/HeadImage6.webp',
    ];
    const imagesMobile = [
        '/images/HeadImage1_mobile.webp',
        '/images/HeadImage2_mobile.webp',
        '/images/HeadImage3_mobile.webp',
        '/images/HeadImage4_mobile.webp',
        '/images/HeadImage5_mobile.webp',
        '/images/HeadImage6_mobile.webp',
    ];

    const extendedImages =  isMobile ? [...imagesMobile, ...imagesMobile] : [...images, ...images];

    const [index, setIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => prev + 1)
        }, 9000)

        return () => clearInterval(interval)
    }, []);

    // Cuando llega a la mitad (segunda copia), reseteamos sin animación
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        if (index === images.length) {
        track.style.transition = 'none'
        setIndex(0)

        // Forzamos reflow para aplicar el cambio sin animar
        void track.offsetHeight

        setTimeout(() => {
            track.style.transition = 'transform 1s ease-in-out'
        }, 50)
        }
    }, [index, images.length]);


    return(
        <div className='HeadImage_container'>
            <div className='HeadImage_image_container'>
               <div
                    ref={trackRef}
                    className="HeadImage_track"
                    style={{
                    transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {extendedImages.map((src, i) => (
                    <div className="HeadImage_slide" key={i}>
                        <Image
                        src={src}
                        alt={`Head Image ${i + 1}`}
                        fill
                        style={{objectFit:"cover", objectPosition:`${isMobile ? "top" : i == 3 ? "0% 40%" : "top"}`}}
                        priority={i === 0}
                        sizes=''
                        unoptimized
                        />
                    </div>
                    ))}
                </div>
            </div>
            <div className='HeadImage_frase'>
                {language === 'ES'?<><p>Tu bienestar,</p> <p>nuestro compromiso mas humano.</p></>
                :<><p>Your well-being,</p> <p>our deepest human commitment.</p></>}</div>
        </div>
    )
>>>>>>> dc89ab14eb64d960e17cc4795227c9549643d697
}