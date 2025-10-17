// src/components/home/FeaturesSection.tsx
import React from "react";
import { MapPin, Users, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "./FeatureCard";
import type { Feature } from "@/app/interfaces"; // เปลี่ยน import path

interface FeaturesSectionProps {
  onLearnMoreClick: () => void;
}

export default function FeaturesSection({
  onLearnMoreClick,
}: FeaturesSectionProps) {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      title: t("feature_accessible_routes_title"),
      description: t("feature_accessible_routes_desc"),
      icon: <MapPin size={32} className="text-blue-600" />,
      image: "/home/Accessible_Routes.png",
    },
    {
      title: t("feature_explore_title"),
      description: t("feature_explore_desc"),
      icon: <Shield size={32} className="text-blue-600" />,
      image: "/home/Safe_Transportation.png",
    },
    {
      title: t("feature_inclusive_community_title"),
      description: t("feature_inclusive_community_desc"),
      icon: <Users size={32} className="text-blue-600" />,
      image: "/home/Inclusive_Community.png",
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
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              onLearnMoreClick={onLearnMoreClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
