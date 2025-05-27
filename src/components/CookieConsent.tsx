// src/components/CookieConsent.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import CookieSettings from "./CookieSettings";
import { Cookie, Settings } from "lucide-react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // ตรวจสอบว่าผู้ใช้เคยยอมรับคุกกี้หรือไม่
    const hasConsent = localStorage.getItem("cookie-consent");
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allSettings = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-settings", JSON.stringify(allSettings));
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem("cookie-consent", "declined");
    localStorage.setItem("cookie-settings", JSON.stringify(essentialOnly));
    setShowConsent(false);
  };

  const handleSaveSettings = (settings: { [key: string]: boolean }) => {
    localStorage.setItem("cookie-settings", JSON.stringify(settings));
    setShowConsent(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  if (!showConsent) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-2xl border-t border-gray-200 animate-fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-4 flex-1">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <Cookie className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {language === "th"
                    ? "เว็บไซต์นี้ใช้คุกกี้"
                    : "This website uses cookies"}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === "th"
                    ? "เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ วิเคราะห์การใช้งานเว็บไซต์ และแสดงเนื้อหาที่เกี่ยวข้อง คุณสามารถจัดการการตั้งค่าได้"
                    : "We use cookies to enhance your browsing experience, analyze site traffic, and show relevant content. You can manage your preferences."}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 font-medium text-sm"
              >
                {language === "th" ? "ปฏิเสธทั้งหมด" : "Reject All"}
              </button>

              <button
                onClick={openSettings}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm flex items-center justify-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                {language === "th" ? "ตั้งค่า" : "Settings"}
              </button>

              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                {language === "th" ? "ยอมรับทั้งหมด" : "Accept All"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettings
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSaveSettings}
      />
    </>
  );
}
