// src/components/home/FeaturesSection.tsx
import React from "react";
import { MapPin, Users, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturesSectionProps {
  onLearnMoreClick: () => void;
}

export default function FeaturesSection({
  onLearnMoreClick,
}: FeaturesSectionProps) {
  const { t } = useLanguage();

  const features = [
    {
      title: t("feature_accessible_routes_title"),
      description: t("feature_accessible_routes_desc"),
      icon: <MapPin size={32} className="text-blue-600" />,
      image: "/features/accessible-routes.jpg",
    },
    {
      title: t("feature_inclusive_community_title"),
      description: t("feature_inclusive_community_desc"),
      icon: <Users size={32} className="text-blue-600" />,
      image: "/features/community.jpg",
    },
    {
      title: t("feature_safe_transportation_title"),
      description: t("feature_safe_transportation_desc"),
      icon: <Shield size={32} className="text-blue-600" />,
      image: "/features/transportation.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t("making_mobility_accessible")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <div className="relative h-full w-full">
                  {/* ถ้ามีรูปภาพจริง ให้ใช้รูปจริงแทน placeholder */}
                  <div className="absolute inset-0 bg-blue-600 opacity-30 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <h3 className="text-xl font-semibold mb-1">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 left-4 z-20 bg-white/90 p-2 rounded-full">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4">
                  <button
                    onClick={onLearnMoreClick}
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                  >
                    เรียนรู้เพิ่มเติม
                    <svg
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
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
