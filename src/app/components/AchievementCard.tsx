// src/app/components/AchievementCard.tsx

"use client";

import { useState } from "react";
import { AchievementCardProps } from "../interfaces";

export default function AchievementCard({
  title,
  description,
  date,
  icon,
  category,
}: AchievementCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer 
        ${isExpanded ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl">{icon}</div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
          {category}
        </span>

        <p className={`text-gray-600 ${isExpanded ? "" : "line-clamp-3"}`}>
          {description}
        </p>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              className="text-blue-600 hover:text-blue-700 font-medium"
              onClick={(e) => {
                e.stopPropagation();
                // Add your detail view logic here
              }}
            >
              View Details →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
