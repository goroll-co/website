// src/components/contact/ContactMap.tsx
import { useLanguage } from "@/context/LanguageContext";

export default function ContactMap() {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full overflow-hidden">
      <h3 className="text-lg font-semibold mb-4">
        {language === "th" ? "แผนที่และตำแหน่งที่ตั้ง" : "Map & Location"}
      </h3>
      <div className="rounded-lg overflow-hidden h-[calc(100%-2rem)] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.35227979856!2d100.3529071!3d13.7248936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1715469381111!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="GOROLL Location"
          className="absolute inset-0"
        ></iframe>
      </div>
    </div>
  );
}
