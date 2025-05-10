// src/components/contact/ContactHero.tsx
import { useLanguage } from "@/context/LanguageContext";

interface ContactHeroProps {
  scrollY: number;
}

export default function ContactHero({ scrollY }: ContactHeroProps) {
  const { language } = useLanguage();

  return (
    <div
      className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl overflow-hidden mb-12"
      style={{
        backgroundPositionY: `${scrollY * 0.3}px`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 animate-fade-down">
          {language === "th" ? "ติดต่อเรา" : "Get in Touch"}
        </h1>
        <p className="text-xl max-w-2xl mx-auto animate-fade-up animation-delay-300">
          {language === "th"
            ? "มีคำถามหรือข้อเสนอแนะ? นี่คือวิธีที่คุณสามารถติดต่อเราได้"
            : "Have questions? Here's how you can reach us."}
        </p>
      </div>
    </div>
  );
}
