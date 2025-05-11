// src/components/CookieConsent.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // ตรวจสอบว่าผู้ใช้เคยยอมรับคุกกี้หรือไม่
    const hasConsent = localStorage.getItem("cookie-consent");
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-gray-200 animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">
            {language === "th"
              ? "เว็บไซต์นี้ใช้คุกกี้"
              : "This website uses cookies"}
          </h3>
          <p className="text-gray-600">
            {language === "th"
              ? "เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ โดยการใช้เว็บไซต์ของเรา คุณยอมรับการใช้คุกกี้ตามนโยบายความเป็นส่วนตัวของเรา"
              : "We use cookies to improve your experience. By using our website, you agree to our privacy policy."}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
          >
            {language === "th" ? "ปฏิเสธ" : "Decline"}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {language === "th" ? "ยอมรับ" : "Accept"}
          </button>
          <button
            onClick={() => setShowConsent(false)}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
