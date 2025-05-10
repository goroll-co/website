// src/components/about/AboutHeroSection.tsx
import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      // Parallax effect
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[500px] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/about/hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-600 opacity-30 mix-blend-multiply"></div>
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          {language === "th" ? "เกี่ยวกับเรา" : "About Us"}
        </h1>
        <p className="text-xl md:text-2xl text-white">
          {language === "th"
            ? "ค้นหาว่าเราเป็นใคร และทำไมเราถึงมุ่งมั่นที่จะทำให้การเดินทางเข้าถึงได้สำหรับทุกคน"
            : "Discover who we are and why we're committed to making travel accessible for everyone"}
        </p>
        <div className="mt-8">
          <a
            href="#our-story"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            {language === "th" ? "ทำความรู้จักเรา" : "Get to Know Us"}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
