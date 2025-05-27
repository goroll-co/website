// src/components/about/SponsorSection.tsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website: string;
}

export default function SponsorSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Edvisory",
      logo: "/sponsors/edvisory-logo.png",
      website: "https://edvisory.com",
    },
    {
      id: 2,
      name: "National Innovation Agency (NIA)",
      logo: "/sponsors/nia-logo.png",
      website: "https://www.nia.or.th",
    },
    {
      id: 3,
      name: "ThaiHealth",
      logo: "/sponsors/thaihealth-logo.png",
      website: "https://www.thaihealth.or.th",
    },
    {
      id: 4,
      name: "U.S. Embassy Thailand",
      logo: "/sponsors/us-embassy-logo.png",
      website: "https://th.usembassy.gov",
    },
    {
      id: 5,
      name: "True Digital Park",
      logo: "/sponsors/true-digital-park-logo.png",
      website: "https://truedigitalpark.com",
    },
    {
      id: 6,
      name: "Y.I.Y. Foundation",
      logo: "/sponsors/yiy-foundation-logo.png",
      website: "#",
    },
    {
      id: 7,
      name: "Katalyst",
      logo: "/sponsors/katalyst-logo.png",
      website: "#",
    },
    {
      id: 8,
      name: "GPO",
      logo: "/sponsors/gpo-logo.png",
      website: "#",
    },
  ];

  const itemsPerSlide = 4; // แสดง 4 logos ต่อ slide
  const totalSlides = Math.ceil(sponsors.length / itemsPerSlide);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSponsors = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return sponsors.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            {t("thank_you_sponsors")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("sponsor_appreciation")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors -ml-6"
            aria-label="Previous sponsors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors -mr-6"
            aria-label="Next sponsors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Sponsors Display */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center min-h-[120px]">
              {getCurrentSponsors().map((sponsor, index) => (
                <div
                  key={sponsor.id}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <a
                    href={sponsor.website}
                    target={sponsor.website !== "#" ? "_blank" : "_self"}
                    rel={
                      sponsor.website !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    <div className="h-20 w-32 flex items-center justify-center p-2">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        onError={(e) => {
                          // Fallback if logo doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 font-medium text-sm text-center px-2">${sponsor.name}</div>`;
                          }
                        }}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
