// src/components/achievements/AchievementCard.tsx
import { Achievement } from "../../app/interfaces";
import { Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AchievementCardProps extends Achievement {
  onClick: () => void;
  animationDelay: number;
}

export default function AchievementCard({
  title,
  description,
  date,
  icon,
  category,
  organizer,
  coverImage,
  images,
  onClick,
  animationDelay,
}: AchievementCardProps) {
  const { t, language } = useLanguage();

  return (
    <div
      className={`achievement-card fade-in bg-white rounded-xl shadow-md overflow-hidden delay-${
        animationDelay * 100
      }`}
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
      onClick={onClick}
    >
      <div className="achievement-card-content">
        <div className="relative">
          <div className="h-48 overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="absolute top-4 left-4 bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center text-xl w-10 h-10">
            {icon}
          </div>

          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>

          {images.length > 0 && (
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
              +{images.length} {language === "th" ? "รูปภาพ" : "photos"}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors group-hover:text-blue-600">
            {title}
          </h3>

          <div className="flex items-center text-blue-600 mb-2">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{date}</span>
          </div>

          <p className="text-gray-500 text-sm mb-2">
            {t("by_organizer")} {organizer}
          </p>

          <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>

          <button
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            onClick={onClick}
          >
            {t("view_details")} <ExternalLink size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
