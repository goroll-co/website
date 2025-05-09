// src/app/components/AchievementCard.tsx

import { Achievement } from "../interfaces";

interface AchievementCardProps extends Achievement {
  onClick: () => void;
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
}: AchievementCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
        <div className="flex justify-between items-center">
          <span className="text-3xl">{icon}</span>
          <span className="ml-2 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {images.length > 0 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
            +{images.length} photos
          </div>
        )}
      </div>

      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="text-blue-600 text-sm font-medium">{date}</span>
        </div>
        <p className="text-gray-600 text-sm">By {organizer}</p>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
