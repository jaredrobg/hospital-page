import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { WhatsAppButton, PhoneButton, ScrollButton } from "./Components/Elemnts";
import { LanguageProvider } from "./Context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Hospital BNS | Especialistas en Psicología y Psiquiatría',
  description:
    'Hospital BNS ofrece atención integral en salud mental con psicólogos y psiquiatras certificados. Tratamientos personalizados para ansiedad, depresión y trastornos emocionales.',
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    'hospital psiquiátrico',
    'psicología clínica',
    'salud mental',
    'terapia psicológica',
    'psiquiatría',
    'Hospital BNS',
    'ansiedad',
    'depresión',
    'rehabilitación emocional',
  ],
  authors: [{ name: 'Hospital BNS' }],
  openGraph: {
    title: 'Hospital BNS | Atención Profesional en Salud Mental',
    description:
      'Centro especializado en psicología y psiquiatría. Tratamientos integrales para ansiedad, depresión y otros trastornos emocionales.',
    url: 'https://hospitalbns.com',
    siteName: 'Hospital BNS',
    images: [
      {
        url: 'https://hospitalbns.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hospital BNS - Psicología y Psiquiatría',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hospitalbns',
    title: 'Hospital BNS | Psicología y Psiquiatría',
    description:
      'Atención integral en salud mental con especialistas certificados. Tu bienestar emocional, nuestra prioridad.',
    images: ['https://hospitalbns.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://hospitalbns.com',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PMZGLBGZ');</script> */}
          {/* <script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window, document, 'script', 'dataLayer', 'GTM-PMZGLBGZ');
              `,
            }}
          ></script> */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=League+Spartan:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "PsychiatricHospital",
                name: "Hospital BNS",
                image: "https://hospitalbns.com/logo.png",
                url: "https://hospitalbns.com",
                telephone: "+52 55 1234 5678",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "C. Andrés Terán 1328, Lomas del Country",
                  addressLocality: "Guadalajara",
                  addressRegion: "Jalisco",
                  postalCode: "44620",
                  addressCountry: "MX",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 20.698496085834005,
                  longitude: -103.36701204142886,
                },
                openingHours: "Mo-Su 09:00-20:00",
                medicalSpecialty: [
                  "Psicología Clínica",
                  "Psiquiatría",
                  "Terapia Cognitivo-Conductual",
                  "Tratamiento de Ansiedad",
                  "Tratamiento de Depresión",
                  "Rehabilitación Psicológica",
                ],
                description:
                  "Hospital BNS es un centro especializado en salud mental que ofrece atención psicológica y psiquiátrica integral, con programas personalizados para pacientes de todas las edades.",
                sameAs: [
                ],
                "mainEntityOfPage": [
                  {
                    "@type": "WebPage",
                    "name": "Programas",
                    "url": "https://www.hospitalbns.com/programas"
                  },
                  {
                    "@type": "WebPage",
                    "name": "Eventos",
                    "url": "https://www.hospitalbns.com/eventos"
                  },
                  {
                    "@type": "WebPage",
                    "name": "Contacto",
                    "url": "https://www.hospitalbns.com/contacto"
                  }
                ]
              }),
            }}
          />
        </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMZGLBGZ"
      height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>

        <LanguageProvider>
          <Header />
          {children}
          <WhatsAppButton />
          <PhoneButton />
          <ScrollButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
