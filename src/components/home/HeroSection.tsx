// src/components/home/HeroSection.tsx
import React, { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  // การสร้างแอนิเมชั่นเมื่อโหลดหน้า
  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative text-center py-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute left-48 bottom-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -right-32 top-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
          {t("welcome")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-up animation-delay-300">
          {t("tagline")}
        </p>
        <a
          href="https://gorollth-prototype.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white text-blue-600 px-8 py-3 rounded-full font-semibold transition-all inline-block hover:bg-gray-100 hover:shadow-lg animate-fade-up animation-delay-600"
        >
          <span className="flex items-center">
            {t("start_journey")}
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
