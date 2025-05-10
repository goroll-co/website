// src/context/LanguageContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { enTranslations } from "../translations/en";
import { thTranslations } from "../translations/th";

type Translations = {
  [key: string]: string;
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  translations: Translations;
};

const defaultTranslations = {
  en: enTranslations,
  th: thTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // ดึงค่าภาษาจาก localStorage ถ้าไม่มีให้ใช้ภาษาไทยเป็นค่าเริ่มต้น
  const [language, setLanguage] = useState("th");
  const [translations, setTranslations] = useState<Translations>(
    defaultTranslations.th
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "th";
    setLanguage(savedLanguage);
    setTranslations(
      defaultTranslations[savedLanguage as keyof typeof defaultTranslations]
    );
  }, []);

  // เปลี่ยนภาษาและบันทึกลงใน localStorage
  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    setTranslations(
      defaultTranslations[lang as keyof typeof defaultTranslations]
    );
    localStorage.setItem("language", lang);
  };

  // ฟังก์ชันสำหรับแปลข้อความ
  const t = (key: string) => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
