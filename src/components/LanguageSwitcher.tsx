// src/components/LanguageSwitcher.tsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center group">
      {/* Language switcher container with globe icon */}
      <div className="relative flex items-center bg-white border border-gray-200 rounded-full shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        {/* Globe icon */}
        <div className="relative z-10 px-3 py-2 flex items-center justify-center">
          <Globe className="w-4 h-4 text-blue-600" />
        </div>

        {/* Sliding background indicator - adjusted for globe icon */}
        <div
          className={`absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-transform duration-300 ease-in-out transform ${
            language === "en" ? "translate-x-[40px]" : "translate-x-[90px]"
          }`}
        />

        {/* English Button */}
        <button
          onClick={() => setLanguage("en")}
          className={`relative z-10 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full min-w-[50px] ${
            language === "en"
              ? "text-white"
              : "text-gray-600 hover:text-blue-600"
          }`}
          aria-label="Switch to English"
        >
          <span className="flex items-center justify-center">EN</span>
        </button>

        {/* Thai Button */}
        <button
          onClick={() => setLanguage("th")}
          className={`relative z-10 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full min-w-[50px] ${
            language === "th"
              ? "text-white"
              : "text-gray-600 hover:text-blue-600"
          }`}
          aria-label="เปลี่ยนเป็นภาษาไทย"
        >
          <span className="flex items-center justify-center">TH</span>
        </button>
      </div>
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {language === "th" ? "เปลี่ยนภาษา" : "Change Language"}
        </div>
      </div>
    </div>
  );
}
