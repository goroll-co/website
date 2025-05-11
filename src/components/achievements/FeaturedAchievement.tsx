// src/components/achievements/FeaturedAchievement.tsx
import React from "react";
import { Achievement } from "../../app/interfaces";
import { Calendar, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturedAchievementProps {
  achievement: Achievement;
  onClick: () => void;
}

export default function FeaturedAchievement({
  achievement,
  onClick,
}: FeaturedAchievementProps) {
  const { t } = useLanguage();

  return (
    <div
      className="achievement-featured bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer mb-12 scale-in"
      onClick={onClick}
    >
      <div className="p-1">
        <div className="relative flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img
              src={achievement.coverImage}
              alt={achievement.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {achievement.category}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
          </div>

          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 float">
                {achievement.title}
              </h2>
              <div className="flex items-center text-blue-600 mb-4">
                <Calendar size={18} className="mr-2" />
                <span>{achievement.date}</span>
              </div>
              <p className="text-gray-600 mb-6">
                {achievement.longDescription || achievement.description}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-500">
                <Award size={18} className="mr-2" />
                <span>
                  {t("by_organizer")} {achievement.organizer}
                </span>
              </div>
              <button
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                onClick={onClick}
              >
                {t("view_details")} <ExternalLink size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
