import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import CommonHeroSection from "../CommonHeroSection";

interface ContactHeroProps {
  scrollY: number;
}

export default function ContactHero({ scrollY }: ContactHeroProps) {
  const { language } = useLanguage();

  return (
    <CommonHeroSection
      title={language === "th" ? "ติดต่อเรา" : "Get in Touch"}
      subtitle={
        language === "th"
          ? "มีคำถามหรือข้อเสนอแนะ? นี่คือวิธีที่คุณสามารถติดต่อเราได้"
          : "Have questions? Here's how you can reach us."
      }
      enableParallax={true}
      scrollY={scrollY}
      height="h-64 md:h-80"
    />
  );
}
