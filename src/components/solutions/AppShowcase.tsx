// src/components/solutions/AppShowcase.tsx
import React, { useState } from "react";
import { MapPin, Users, Car, Smartphone } from "lucide-react";
import { Solution } from "@/app/interfaces";
import { useLanguage } from "@/context/LanguageContext";

interface AppShowcaseProps {
  solutions: Solution[];
}

interface CombinedFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AppShowcase({ solutions }: AppShowcaseProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { t } = useLanguage();

  const getActiveSolution = () => solutions[activeTabIndex];

  const getCategoryColors = (category: string) => {
    switch (category) {
      case "Navigation":
        return {
          textColor: "text-blue-600",
          bgColor: "bg-blue-100",
          borderColor: "border-blue-600",
          buttonColor: "bg-blue-600 hover:bg-blue-700",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
        };
      case "Social":
        return {
          textColor: "text-purple-600",
          bgColor: "bg-purple-100",
          borderColor: "border-purple-600",
          buttonColor: "bg-purple-600 hover:bg-purple-700",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
        };
      case "Transport":
        return {
          textColor: "text-green-600",
          bgColor: "bg-green-100",
          borderColor: "border-green-600",
          buttonColor: "bg-green-600 hover:bg-green-700",
          iconBg: "bg-red-100",
          iconColor: "text-red-600",
        };
      default:
        return {
          textColor: "text-blue-600",
          bgColor: "bg-blue-100",
          borderColor: "border-blue-600",
          buttonColor: "bg-blue-600 hover:bg-blue-700",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
        };
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Navigation":
        return <MapPin className="w-6 h-6" />;
      case "Social":
        return <Users className="w-6 h-6" />;
      case "Transport":
        return <Car className="w-6 h-6" />;
      default:
        return null;
    }
  };

  // รวมฟีเจอร์และประโยชน์เข้าด้วยกัน
  const getCombinedFeatures = (solution: Solution): CombinedFeature[] => {
    const colors = getCategoryColors(solution.category);

    if (solution.category === "Navigation") {
      return [
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full ${colors.iconBg} ${colors.iconColor} flex items-center justify-center text-2xl`}
            >
              📍
            </div>
          ),
          title: t("discover_accessible_routes"),
          description: t("discover_accessible_routes_desc"),
        },
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl`}
            >
              🚧
            </div>
          ),
          title: t("report_obstacles"),
          description: t("report_obstacles_desc"),
        },
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl`}
            >
              👥
            </div>
          ),
          title: t("share_knowledge"),
          description: t("share_knowledge_desc"),
        },
      ];
    } else if (solution.category === "Social") {
      return [
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full ${colors.iconBg} ${colors.iconColor} flex items-center justify-center text-2xl`}
            >
              🌐
            </div>
          ),
          title: t("connect_community"),
          description: t("connect_community_desc"),
        },
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl`}
            >
              ⭐
            </div>
          ),
          title: t("review_places"),
          description: t("review_places_desc"),
        },
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl`}
            >
              🤝
            </div>
          ),
          title: t("supportive_community"),
          description: t("supportive_community_desc"),
        },
      ];
    } else if (solution.category === "Transport") {
      return [
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full ${colors.iconBg} ${colors.iconColor} flex items-center justify-center text-2xl`}
            >
              🚗
            </div>
          ),
          title: t("wheelchair_vehicles"),
          description: t("wheelchair_vehicles_desc"),
        },
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl`}
            >
              🛡️
            </div>
          ),
          title: t("secure_payment"),
          description: t("secure_payment_desc"),
        },
        {
          icon: (
            <div
              className={`w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl`}
            >
              👨‍💼
            </div>
          ),
          title: t("verified_drivers"),
          description: t("verified_drivers_desc"),
        },
      ];
    }

    return [];
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
            <Smartphone className="w-5 h-5" />
            <span className="ml-2 text-sm font-medium">{t("mobile_app")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t("solutions_that_help_travel")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("discover_solutions_desc")}
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {solutions.map((solution, index) => {
              const colors = getCategoryColors(solution.category);
              return (
                <button
                  key={solution.id}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTabIndex === index
                      ? `${colors.textColor} ${colors.bgColor}`
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTabIndex(index)}
                >
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(solution.category)}
                    <span>{solution.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative mx-auto max-w-xs fade-in-section">
            <div className="relative mx-auto w-[270px] h-[540px] bg-gray-900 rounded-[36px] shadow-xl overflow-hidden border-[8px] border-gray-900">
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-lg z-10"></div>
              <div className="w-full h-full rounded-[24px] overflow-hidden">
                <img
                  src={getActiveSolution().image}
                  alt={getActiveSolution().title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-1 top-24 w-1 h-10 bg-gray-800 rounded-l-lg"></div>
              <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-800 rounded-r-lg"></div>
              <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-800 rounded-r-lg"></div>
            </div>
            {/* ลบส่วน glow effect ออก */}
          </div>

          <div className="space-y-6">
            <div className="space-y-8 mt-8">
              {getCombinedFeatures(getActiveSolution()).map(
                (feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    {feature.icon}
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h5>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* App Store Download Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105"
                aria-label="Download on the App Store"
              >
                <img
                  src="/store/App_Store.svg"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/store/Google_Play.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
