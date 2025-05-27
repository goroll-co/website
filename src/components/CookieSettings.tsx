// src/components/CookieSettings.tsx
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Settings, Shield, BarChart, Target, Cookie } from "lucide-react";

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  essential: boolean;
  enabled: boolean;
  icon: React.ReactNode;
}

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: { [key: string]: boolean }) => void;
}

export default function CookieSettings({
  isOpen,
  onClose,
  onSave,
}: CookieSettingsProps) {
  const { language } = useLanguage();
  const [cookieCategories, setCookieCategories] = useState<CookieCategory[]>(
    []
  );

  // กำหนดข้อมูล cookie categories
  useEffect(() => {
    const categories: CookieCategory[] = [
      {
        id: "essential",
        name: language === "th" ? "คุกกี้ที่จำเป็น" : "Essential Cookies",
        description:
          language === "th"
            ? "คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์ เช่น การเลือกภาษา การเข้าสู่ระบบ และความปลอดภัย"
            : "These cookies are necessary for the website to function properly, such as language selection, login, and security.",
        essential: true,
        enabled: true,
        icon: <Shield className="w-5 h-5" />,
      },
      {
        id: "analytics",
        name: language === "th" ? "คุกกี้วิเคราะห์" : "Analytics Cookies",
        description:
          language === "th"
            ? "ช่วยให้เราเข้าใจวิธีที่คุณใช้งานเว็บไซต์ เพื่อปรับปรุงประสบการณ์การใช้งาน"
            : "Help us understand how you use our website to improve user experience.",
        essential: false,
        enabled: false,
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        id: "marketing",
        name: language === "th" ? "คุกกี้การตลาด" : "Marketing Cookies",
        description:
          language === "th"
            ? "ใช้เพื่อแสดงโฆษณาที่เกี่ยวข้องกับคุณในเว็บไซต์อื่นๆ"
            : "Used to show you relevant advertisements on other websites.",
        essential: false,
        enabled: false,
        icon: <Target className="w-5 h-5" />,
      },
      {
        id: "preferences",
        name: language === "th" ? "คุกกี้การตั้งค่า" : "Preference Cookies",
        description:
          language === "th"
            ? "จดจำการตั้งค่าของคุณ เช่น ภาษา ธีม และการปรับแต่งอื่นๆ"
            : "Remember your settings such as language, theme, and other customizations.",
        essential: false,
        enabled: false,
        icon: <Settings className="w-5 h-5" />,
      },
    ];

    // โหลดการตั้งค่าจาก localStorage
    const savedSettings = localStorage.getItem("cookie-settings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      categories.forEach((category) => {
        if (!category.essential && settings[category.id] !== undefined) {
          category.enabled = settings[category.id];
        }
      });
    }

    setCookieCategories(categories);
  }, [language]);

  const handleToggle = (categoryId: string) => {
    setCookieCategories((prev) =>
      prev.map((category) =>
        category.id === categoryId && !category.essential
          ? { ...category, enabled: !category.enabled }
          : category
      )
    );
  };

  const handleAcceptAll = () => {
    const allEnabled = cookieCategories.reduce(
      (acc, category) => ({
        ...acc,
        [category.id]: true,
      }),
      {}
    );

    localStorage.setItem("cookie-settings", JSON.stringify(allEnabled));
    localStorage.setItem("cookie-consent", "accepted");
    onSave(allEnabled);
    onClose();
  };

  const handleRejectAll = () => {
    const essentialOnly = cookieCategories.reduce(
      (acc, category) => ({
        ...acc,
        [category.id]: category.essential,
      }),
      {}
    );

    localStorage.setItem("cookie-settings", JSON.stringify(essentialOnly));
    localStorage.setItem("cookie-consent", "rejected");
    onSave(essentialOnly);
    onClose();
  };

  const handleSavePreferences = () => {
    const preferences = cookieCategories.reduce(
      (acc, category) => ({
        ...acc,
        [category.id]: category.enabled,
      }),
      {}
    );

    localStorage.setItem("cookie-settings", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent", "customized");
    onSave(preferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b border-gray-200 rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Cookie className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {language === "th" ? "การตั้งค่าคุกกี้" : "Cookie Settings"}
              </h2>
              <p className="text-sm text-gray-600">
                {language === "th"
                  ? "จัดการความเป็นส่วนตัวของคุณ"
                  : "Manage your privacy preferences"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              {language === "th"
                ? "เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ คุณสามารถเลือกประเภทคุกกี้ที่ต้องการได้ด้านล่าง"
                : "We use cookies to enhance your browsing experience. You can choose which types of cookies you'd like to allow below."}
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-8">
            {cookieCategories.map((category) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div
                      className={`p-2 rounded-full ${
                        category.essential
                          ? "bg-green-100 text-green-600"
                          : category.enabled
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {category.name}
                        </h3>
                        {category.essential && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {language === "th" ? "จำเป็น" : "Required"}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <div className="ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={category.enabled}
                        onChange={() => handleToggle(category.id)}
                        disabled={category.essential}
                        className="sr-only peer"
                      />
                      <div
                        className={`relative w-11 h-6 rounded-full peer transition-colors ${
                          category.enabled ? "bg-blue-600" : "bg-gray-200"
                        } ${
                          category.essential
                            ? "opacity-50"
                            : "hover:bg-opacity-80"
                        }`}
                      >
                        <div
                          className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform ${
                            category.enabled ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              {language === "th" ? "ปฏิเสธทั้งหมด" : "Reject All"}
            </button>

            <button
              onClick={handleSavePreferences}
              className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              {language === "th" ? "บันทึกการตั้งค่า" : "Save Preferences"}
            </button>

            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {language === "th" ? "ยอมรับทั้งหมด" : "Accept All"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
