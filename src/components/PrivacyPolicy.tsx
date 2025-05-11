// src/components/PrivacyPolicy.tsx
"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X } from "lucide-react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">
            {language === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {language === "th" ? (
            <>
              <h3 className="text-xl font-semibold mb-4">การใช้คุกกี้ของเรา</h3>
              <p className="mb-4">
                เว็บไซต์ GOROLL
                ใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานและการทำงานของเว็บไซต์
                คุกกี้คือไฟล์ข้อมูลขนาดเล็กที่จัดเก็บในเบราว์เซอร์ของคุณเมื่อคุณเข้าชมเว็บไซต์
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-2">
                ประเภทของคุกกี้ที่เราใช้
              </h4>
              <ul className="list-disc pl-8 mb-4 space-y-2">
                <li>
                  <strong>คุกกี้ที่จำเป็น:</strong>{" "}
                  คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์ เช่น
                  การเลือกภาษา
                </li>
                <li>
                  <strong>คุกกี้วิเคราะห์:</strong>{" "}
                  เราใช้คุกกี้เหล่านี้เพื่อเก็บข้อมูลเกี่ยวกับวิธีที่คุณใช้งานเว็บไซต์ของเรา
                  เพื่อปรับปรุงการทำงานของเว็บไซต์
                </li>
              </ul>

              <h4 className="text-lg font-semibold mt-6 mb-2">
                การควบคุมคุกกี้
              </h4>
              <p className="mb-4">
                คุณสามารถควบคุมและลบคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ของคุณ
                อย่างไรก็ตาม
                การปิดใช้งานคุกกี้อาจส่งผลต่อประสบการณ์การใช้งานเว็บไซต์
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-2">
                การเปลี่ยนแปลงนโยบาย
              </h4>
              <p className="mb-4">
                เราอาจปรับปรุงนโยบายความเป็นส่วนตัวเป็นครั้งคราว
                เราแนะนำให้คุณตรวจสอบหน้านี้เป็นระยะเพื่อรับทราบข้อมูลล่าสุด
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-2">ติดต่อเรา</h4>
              <p className="mb-4">
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวของเรา
                โปรดติดต่อเราที่ gorollth@outlook.com
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4">Our Cookie Usage</h3>
              <p className="mb-4">
                The GOROLL website uses cookies to improve user experience and
                website functionality. Cookies are small data files stored in
                your browser when you visit the website.
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-2">
                Types of Cookies We Use
              </h4>
              <ul className="list-disc pl-8 mb-4 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the website to function properly, such as
                  language selection.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> We use these cookies to
                  collect information about how you use our website to improve
                  its performance.
                </li>
              </ul>

              <h4 className="text-lg font-semibold mt-6 mb-2">
                Cookie Control
              </h4>
              <p className="mb-4">
                You can control and delete cookies through your browser
                settings. However, disabling cookies may affect your website
                experience.
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-2">
                Policy Changes
              </h4>
              <p className="mb-4">
                We may update our privacy policy from time to time. We recommend
                that you check this page periodically for the latest
                information.
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-2">Contact Us</h4>
              <p className="mb-4">
                If you have any questions about our privacy policy, please
                contact us at gorollth@outlook.com
              </p>
            </>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === "th" ? "เข้าใจแล้ว" : "I understand"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
