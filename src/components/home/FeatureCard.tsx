// src/components/home/FeatureCard.tsx
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  onLearnMoreClick: () => void;
}

export default function FeatureCard({
  title,
  description,
  icon,
  image,
  onLearnMoreClick,
}: FeatureCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <div className="relative h-full w-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {/* เพิ่มความทึบของ overlay */}
          <div className="absolute inset-0 bg-blue-600 opacity-40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

          {/* ปรับปรุงการแสดงชื่อหัวข้อให้อ่านง่ายขึ้น */}
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-bold text-white mb-1 bg-blue-600/70 px-3 py-1 rounded-md shadow-md">
              {title}
            </h3>
          </div>

          <div className="absolute top-4 left-4 z-20 bg-white p-2 rounded-full shadow-md">
            {icon}
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <button
            onClick={onLearnMoreClick}
            className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
          >
            {/* {t("learn_more")} */}
            {/* <svg
              className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg> */}
          </button>
        </div>
      </div>
    </div>
  );
}
