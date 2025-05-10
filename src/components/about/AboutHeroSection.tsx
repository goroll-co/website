// src/components/about/AboutHeroSection.tsx
import React, { useEffect, useRef } from "react";

export default function AboutHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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
          เกี่ยวกับเรา
        </h1>
        <p className="text-xl md:text-2xl text-white">
          ค้นหาว่าเราเป็นใคร
          และทำไมเราถึงมุ่งมั่นที่จะทำให้การเดินทางเข้าถึงได้สำหรับทุกคน
        </p>
        <div className="mt-8">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
            ทำความรู้จักเรา
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
          </button>
        </div>
      </div>
    </div>
  );
}
