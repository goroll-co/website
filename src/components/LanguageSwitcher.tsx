// src/components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter as useNextRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useNextRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    // สร้าง URL ใหม่โดยเปลี่ยนเฉพาะส่วนของภาษา
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/");

    // ถ้ามี locale อยู่แล้ว (segments[1] เป็น 'en' หรือ 'th')
    if (segments.length > 1 && (segments[1] === "en" || segments[1] === "th")) {
      segments[1] = newLocale;
    } else {
      // ถ้าไม่มี locale ใน path
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/");
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-blue-50 text-blue-500"
      >
        {locale === "en" ? "🇬🇧 EN" : "🇹🇭 TH"}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <button
            onClick={() => switchLocale("en")}
            className={`w-full px-4 py-2 text-left hover:bg-blue-50 ${
              locale === "en" ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => switchLocale("th")}
            className={`w-full px-4 py-2 text-left hover:bg-blue-50 ${
              locale === "th" ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            🇹🇭 ไทย
          </button>
        </div>
      )}
    </div>
  );
}
