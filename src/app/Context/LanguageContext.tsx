"use client";
import { createContext, useContext, useState, useEffect } from "react";



type LanguageContextType = {
  language: string;
  selectLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("ES");

  


  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) setLanguage(JSON.parse(savedLanguage));
  }, []);

  

  const selectLanguage = (language: string) => {
    setLanguage(language);
    localStorage.setItem("language", JSON.stringify(language));
  };

  

  return (
    <LanguageContext.Provider value={{ language, selectLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}; 