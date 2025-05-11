// src/components/achievements/AchievementModal.tsx
import { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  ExternalLink,
} from "lucide-react";
import { Achievement } from "../../app/interfaces";
import { useLanguage } from "@/context/LanguageContext";

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export default function AchievementModal({
  achievement,
  onClose,
}: AchievementModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t, language } = useLanguage();

  // เพิ่มเอฟเฟกต์ Scale In
  useEffect(() => {
    setIsAnimating(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === achievement.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? achievement.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
          isAnimating ? "scale-in" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Image Carousel */}
          <div className="relative h-96 bg-gray-900">
            {achievement.images.length > 0 ? (
              <img
                src={achievement.images[currentImageIndex]}
                alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={achievement.coverImage}
                alt={achievement.title}
                className="w-full h-full object-contain"
              />
            )}

            {achievement.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="bg-black/60 text-white px-4 py-2 rounded-full">
                    {currentImageIndex + 1} / {achievement.images.length}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <Award size={18} className="mr-2" />
                  <p>
                    {t("by_organizer")} {achievement.organizer}
                  </p>
                </div>
                <div className="flex items-center text-blue-600">
                  <Calendar size={18} className="mr-2" />
                  <span>{achievement.date}</span>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {achievement.category}
              </span>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                {achievement.longDescription || achievement.description}
              </p>
            </div>

            {/* เพิ่มปุ่มแชร์ */}
            <div className="pt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </button>
              </div>

              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
