// src/app/components/AchievementModal.tsx

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Achievement } from "../interfaces";

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export default function AchievementModal({
  achievement,
  onClose,
}: AchievementModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
          <div className="relative h-96 bg-gray-100">
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
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {achievement.images.length}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{achievement.title}</h2>
                <p className="text-gray-600">By {achievement.organizer}</p>
                <span className="text-blue-600 text-sm font-medium">
                  {achievement.date}
                </span>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {achievement.category}
              </span>
            </div>
            <p className="text-gray-600">
              {achievement.longDescription || achievement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
