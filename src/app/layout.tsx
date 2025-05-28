// src/app/layout.tsx

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import { useState } from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsOfService from "@/components/TermsOfService";

const inter = Inter({ subsets: ["latin"] });

// Metadata ไม่สามารถใช้ใน client component ได้ จึงต้องทำการกำหนดค่า metadata แบบ static แทน
const metadata = {
  title: "GOROLL",
  description: "We are on the ROLL to GO for ALL",
};

// สร้าง Footer component แยกเพื่อให้สามารถใช้ useLanguage ได้
function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "th" ? "เกี่ยวกับเรา" : "About Us"}
              </h3>
              <p className="text-gray-300">
                {language === "th"
                  ? "เราอยู่บนเส้นทางการ ROLL เพื่อ GO สำหรับทุกคน"
                  : "We are on the ROLL to GO for ALL"}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "th" ? "ติดต่อเรา" : "Contact"}
              </h3>
              <p className="text-gray-300">
                {language === "th" ? "อีเมล: " : "Email: "}gorollth@outlook.com
              </p>
              <p className="text-gray-300">
                {language === "th" ? "โทรศัพท์: " : "Phone: "}+66 830796796
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "th" ? "ติดตามเรา" : "Follow Us"}
              </h3>
              <div className="space-x-4">
                <a
                  href="https://www.facebook.com/people/Goroll-Thailand-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%A7%E0%B8%B5%E0%B8%A5%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C/61567019297171/"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/gorollth/"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* ปรับส่วนนี้ให้แสดงเฉพาะภาษาที่เลือก */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              © 2024 GOROLL.{" "}
              {language === "th" ? "สงวนลิขสิทธิ์" : "All rights reserved"}.
            </p>
            <div className="mt-2 space-x-4">
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {language === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setIsTermsOfServiceOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {language === "th" ? "ข้อตกลงการใช้บริการ" : "Terms of Service"}
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicy
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
      <TermsOfService
        isOpen={isTermsOfServiceOpen}
        onClose={() => setIsTermsOfServiceOpen(false)}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
          <CookieConsent />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
