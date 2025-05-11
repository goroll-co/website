import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface CommonHeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  enableParallax?: boolean;
  scrollY?: number;
  backgroundColor?: string;
  height?: string;
  children?: React.ReactNode;
}

export default function CommonHeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  enableParallax = false,
  scrollY = 0,
  backgroundColor = "bg-gradient-to-r from-blue-500 to-blue-600",
  height = "py-24",
  children,
}: CommonHeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    if (enableParallax && !scrollY) {
      const handleScroll = () => {
        if (!heroRef.current) return;
        heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [enableParallax, scrollY]);

  const parallaxStyle =
    enableParallax && scrollY
      ? { backgroundPositionY: `${scrollY * 0.3}px` }
      : {};

  return (
    <div
      ref={heroRef}
      className={`relative ${height} ${backgroundColor} text-white overflow-hidden rounded-3xl mb-8 mt-4`}
      style={parallaxStyle}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          style={{
            animation: "blob 15s infinite linear",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="absolute -right-32 top-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          style={{
            animation: "blob 12s infinite linear",
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div
        className="max-w-4xl mx-auto px-4 relative z-10 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-xl md:text-2xl mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            {subtitle}
          </p>
        )}

        {buttonText && buttonLink && (
          <div
            className="mt-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
            }}
          >
            <a
              href={buttonLink}
              target={buttonLink.startsWith("http") ? "_blank" : undefined}
              rel={
                buttonLink.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold transition-all inline-block hover:bg-gray-100 hover:shadow-lg"
            >
              <span className="flex items-center">
                {buttonText}
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
        )}
        {children}
      </div>
    </div>
  );
}
