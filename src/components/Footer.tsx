// src/components/Footer.tsx
"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

export default function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "th" ? "เกี่ยวกับเรา" : "About Us"}
              </h3>
              <p className="text-gray-300">
                {language === "th"
                  ? "Your route, Your rights"
                  : "Your route, Your rights"}
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "th" ? "ติดต่อเรา" : "Contact"}
              </h3>
              <p className="text-gray-300">
                {language === "th" ? "อีเมล: " : "Email: "}
                <a
                  href="mailto:team@goroll.co"
                  className="hover:text-white transition-colors"
                >
                  team@goroll.co
                </a>
              </p>
              <p className="text-gray-300">
                {language === "th" ? "โทรศัพท์: " : "Phone: "}
                <a
                  href="tel:+66830796796"
                  className="hover:text-white transition-colors"
                >
                  +66 830796796
                </a>
              </p>
              <p className="text-gray-300">
                {language === "th" ? "Line Official: " : "Line Official: "}
                <a
                  href="https://line.me/R/ti/p/@goroll"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @314ndpou
                </a>
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === "th" ? "ติดตามเรา" : "Follow Us"}
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/goroll.co"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/goroll.co"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@goroll.co"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  TikTok
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  X
                </a>
                <a
                  href="https://line.me/R/ti/p/@314ndpou"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Line Official"
                >
                  Line
                </a>
                {/* <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a> */}
              </div>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p className="mb-2">
              © 2024 GOROLL.{" "}
              {language === "th" ? "สงวนลิขสิทธิ์" : "All rights reserved"}.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                {language === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setIsTermsOfServiceOpen(true)}
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                {language === "th" ? "ข้อตกลงการใช้บริการ" : "Terms of Service"}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
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
