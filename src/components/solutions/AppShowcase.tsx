// src/components/solutions/AppShowcase.tsx
import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Star,
  Heart,
  Settings,
  Smartphone,
} from "lucide-react";

const features = [
  {
    id: "map",
    title: "แผนที่เส้นทางที่เข้าถึงได้",
    description:
      "ค้นหาและนำทางไปยังสถานที่ที่เข้าถึงได้ด้วยเส้นทางที่รองรับวีลแชร์",
    icon: <MapPin className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    mockup: "/solutions/mockup-map.png",
  },
  {
    id: "navigation",
    title: "นำทางแบบเรียลไทม์",
    description:
      "ติดตามเส้นทางแบบเรียลไทม์พร้อมการแจ้งเตือนเกี่ยวกับอุปสรรคบนเส้นทาง",
    icon: <Navigation className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    mockup: "/solutions/mockup-navigation.png",
  },
  {
    id: "reviews",
    title: "รีวิวและคะแนน",
    description:
      "อ่านและเขียนรีวิวเกี่ยวกับความสามารถในการเข้าถึงของสถานที่ต่างๆ",
    icon: <Star className="w-6 h-6" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    mockup: "/solutions/mockup-reviews.png",
  },
  {
    id: "community",
    title: "ชุมชนและกิจกรรม",
    description: "เชื่อมต่อกับชุมชนผู้ใช้วีลแชร์และค้นหากิจกรรมที่เข้าถึงได้",
    icon: <Heart className="w-6 h-6" />,
    color: "text-red-500",
    bgColor: "bg-red-100",
    mockup: "/solutions/mockup-community.png",
  },
  {
    id: "preferences",
    title: "การตั้งค่าส่วนบุคคล",
    description: "ปรับแต่งการตั้งค่าตามความต้องการเฉพาะของคุณ",
    icon: <Settings className="w-6 h-6" />,
    color: "text-green-500",
    bgColor: "bg-green-100",
    mockup: "/solutions/mockup-preferences.png",
  },
];

export default function AppShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const getActiveFeature = () => {
    return (
      features.find((feature) => feature.id === activeFeature) || features[0]
    );
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
            ฟีเจอร์ที่ช่วยให้การเดินทางง่ายขึ้น
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ค้นพบฟีเจอร์ที่ออกแบบมาเพื่อช่วยให้การเดินทางของคุณสะดวกและเข้าถึงได้มากขึ้น
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Device Mockup */}
          <div className="relative mx-auto max-w-xs fade-in-section">
            <div className="relative mx-auto w-[270px] h-[540px] bg-gray-900 rounded-[36px] shadow-xl overflow-hidden border-[8px] border-gray-900">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-lg z-10"></div>

              {/* Screen Content */}
              <div className="w-full h-full rounded-[24px] overflow-hidden">
                <img
                  src={
                    getActiveFeature().mockup ||
                    "/solutions/mockup-placeholder.png"
                  }
                  alt={getActiveFeature().title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Phone Button */}
              <div className="absolute -right-1 top-24 w-1 h-10 bg-gray-800 rounded-l-lg"></div>
              <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-800 rounded-r-lg"></div>
              <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-800 rounded-r-lg"></div>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute -inset-4 rounded-full blur-3xl opacity-30 transition-colors duration-500 ${
                activeFeature === "map"
                  ? "bg-blue-500"
                  : activeFeature === "navigation"
                  ? "bg-purple-500"
                  : activeFeature === "reviews"
                  ? "bg-yellow-500"
                  : activeFeature === "community"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            ></div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 fade-in-section ${
                  activeFeature === feature.id
                    ? `${feature.bgColor} shadow-md`
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveFeature(feature.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center flex-shrink-0 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-2 ${
                        activeFeature === feature.id
                          ? feature.color
                          : "text-gray-800"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
