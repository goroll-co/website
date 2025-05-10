// src/components/AchievementFilter.tsx
import React from "react";

interface AchievementFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function AchievementFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: AchievementFilterProps) {
  return (
    <div className="mb-8 slide-in-left">
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => onCategoryChange("all")}
        >
          ทั้งหมด
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
