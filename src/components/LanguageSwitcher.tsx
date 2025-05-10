// src/components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
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
