// src/components/solutions/AppShowcase.tsx
import React, { useState } from "react";
import { MapPin, Users, Car, Smartphone } from "lucide-react";
import { Solution } from "@/app/interfaces";

interface AppShowcaseProps {
  solutions: Solution[];
}

export default function AppShowcase({ solutions }: AppShowcaseProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeDetailTab, setActiveDetailTab] = useState<
    "features" | "benefits"
  >("features");

  const getActiveSolution = () => solutions[activeTabIndex];

  const getCategoryColors = (category: string) => {
    switch (category) {
      case "Navigation":
        return {
          textColor: "text-blue-600",
          bgColor: "bg-blue-100",
          borderColor: "border-blue-600",
          glowColor: "bg-blue-500",
          buttonColor: "bg-blue-600 hover:bg-blue-700",
        };
      case "Social":
        return {
          textColor: "text-purple-600",
          bgColor: "bg-purple-100",
          borderColor: "border-purple-600",
          glowColor: "bg-purple-500",
          buttonColor: "bg-purple-600 hover:bg-purple-700",
        };
      case "Transport":
        return {
          textColor: "text-green-600",
          bgColor: "bg-green-100",
          borderColor: "border-green-600",
          glowColor: "bg-green-500",
          buttonColor: "bg-green-600 hover:bg-green-700",
        };
      default:
        return {
          textColor: "text-blue-600",
          bgColor: "bg-blue-100",
          borderColor: "border-blue-600",
          glowColor: "bg-blue-500",
          buttonColor: "bg-blue-600 hover:bg-blue-700",
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

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
            <Smartphone className="w-5 h-5" />
            <span className="ml-2 text-sm font-medium">แอพพลิเคชั่นมือถือ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            โซลูชันที่ช่วยให้การเดินทางง่ายขึ้น
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ค้นพบโซลูชันที่ออกแบบมาเพื่อช่วยให้การเดินทางของคุณสะดวกและเข้าถึงได้มากขึ้น
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
            <div
              className={`absolute -inset-4 rounded-full blur-3xl opacity-30 transition-colors duration-500 ${
                getCategoryColors(getActiveSolution().category).glowColor
              }`}
            ></div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div
                className={`p-2 rounded-full ${
                  getCategoryColors(getActiveSolution().category).bgColor
                }`}
              >
                {getCategoryIcon(getActiveSolution().category)}
              </div>
              <h3 className="text-2xl font-bold">
                {getActiveSolution().title}
              </h3>
            </div>

            <p className="text-gray-600">{getActiveSolution().description}</p>

            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-4">
                <button
                  className={`pb-2 px-4 ${
                    activeDetailTab === "features"
                      ? `border-b-2 ${
                          getCategoryColors(getActiveSolution().category)
                            .textColor
                        }`
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveDetailTab("features")}
                >
                  คุณสมบัติ
                </button>
                <button
                  className={`pb-2 px-4 ${
                    activeDetailTab === "benefits"
                      ? `border-b-2 ${
                          getCategoryColors(getActiveSolution().category)
                            .textColor
                        }`
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveDetailTab("benefits")}
                >
                  ประโยชน์
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {(activeDetailTab === "features"
                ? getActiveSolution().features
                : getActiveSolution().benefits
              ).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-6 h-6 ${
                      getCategoryColors(getActiveSolution().category).bgColor
                    } ${
                      getCategoryColors(getActiveSolution().category).textColor
                    } rounded-full flex items-center justify-center`}
                  >
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#"
                className={`text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center ${
                  getCategoryColors(getActiveSolution().category).buttonColor
                }`}
              >
                เรียนรู้เพิ่มเติม
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
