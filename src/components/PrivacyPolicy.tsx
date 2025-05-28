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
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  วันที่มีผลบังคับใช้: 1 มกราคม 2024
                </p>
                <p className="text-gray-700 leading-relaxed">
                  นโยบายความเป็นส่วนตัวนี้อธิบายวิธีที่ GOROLL เก็บรวบรวม ใช้
                  และปกป้องข้อมูลส่วนบุคคลของคุณ
                  เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของข้อมูลของคุณ
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                1. ข้อมูลที่เราเก็บรวบรวม
              </h3>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  ข้อมูลที่คุณให้โดยตรง:
                </h4>
                <ul className="list-disc pl-8 mb-4 space-y-2 text-gray-700">
                  <li>ข้อมูลบัญชีผู้ใช้ (ชื่อ, อีเมล, รหัสผ่าน)</li>
                  <li>ข้อมูลโปรไฟล์ (ข้อมูลส่วนตัว, รูปโปรไฟล์)</li>
                  <li>ข้อมูลการติดต่อ (หมายเลขโทรศัพท์, ที่อยู่)</li>
                  <li>เนื้อหาที่คุณแบ่งปัน (รีวิว, ความคิดเห็น, รูปภาพ)</li>
                  <li>ข้อมูลการสื่อสารกับเรา</li>
                </ul>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  ข้อมูลที่เก็บรวบรวมโดยอัตโนมัติ:
                </h4>
                <ul className="list-disc pl-8 mb-4 space-y-2 text-gray-700">
                  <li>ข้อมูลตำแหน่งที่ตั้ง (เมื่อคุณอนุญาต)</li>
                  <li>ข้อมูลการใช้งานเว็บไซต์และแอพ</li>
                  <li>
                    ข้อมูลอุปกรณ์ (IP Address, ประเภทอุปกรณ์, เบราว์เซอร์)
                  </li>
                  <li>ข้อมูลคุกกี้และเทคโนโลยีที่คล้ายกัน</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                2. วิธีที่เราใช้ข้อมูลของคุณ
              </h3>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>ให้บริการและดำเนินการตามคำขอของคุณ</li>
                <li>ปรับปรุงและพัฒนาบริการของเรา</li>
                <li>ส่งการแจ้งเตือนและข้อมูลสำคัญ</li>
                <li>วิเคราะห์การใช้งานเพื่อปรับปรุงประสบการณ์ผู้ใช้</li>
                <li>ป้องกันการฉ้อโกงและรักษาความปลอดภัย</li>
                <li>ปฏิบัติตามกฎหมายและข้อบังคับ</li>
                <li>ส่งข้อมูลการตลาด (เมื่อคุณยินยอม)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                3. การแบ่งปันข้อมูล
              </h3>
              <p className="mb-4 text-gray-700">
                เราจะไม่ขายข้อมูลส่วนบุคคลของคุณ แต่อาจแบ่งปันในกรณีดังนี้:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>กับผู้ใช้คนอื่น:</strong>{" "}
                  เมื่อคุณแบ่งปันเนื้อหาสาธารณะ
                </li>
                <li>
                  <strong>กับผู้ให้บริการ:</strong>{" "}
                  บุคคลที่สามที่ช่วยในการดำเนินบริการ
                </li>
                <li>
                  <strong>เพื่อความปลอดภัย:</strong>{" "}
                  เมื่อจำเป็นเพื่อปกป้องสิทธิและความปลอดภัย
                </li>
                <li>
                  <strong>ตามกฎหมาย:</strong> เมื่อมีคำสั่งจากหน่วยงานราชการ
                </li>
                <li>
                  <strong>การควบรวมกิจการ:</strong> ในกรณีขาย โอน
                  หรือควบรวมกิจการ
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                4. ความปลอดภัยของข้อมูล
              </h3>
              <p className="mb-4 text-gray-700">
                เราใช้มาตรการรักษาความปลอดภัยทางเทคนิคและการจัดการ:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>การเข้ารหัสข้อมูล (SSL/TLS)</li>
                <li>การควบคุมการเข้าถึงข้อมูล</li>
                <li>การสำรองข้อมูลอย่างสม่ำเสมอ</li>
                <li>การตรวจสอบความปลอดภัยเป็นประจำ</li>
                <li>การฝึกอบรมพนักงานเรื่องความเป็นส่วนตัว</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                5. การใช้คุกกี้ของเรา
              </h3>
              <p className="mb-4 text-gray-700">เราใช้คุกกี้เพื่อ:</p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>คุกกี้ที่จำเป็น:</strong> การทำงานพื้นฐานของเว็บไซต์
                  เช่น การเลือกภาษา
                </li>
                <li>
                  <strong>คุกกี้วิเคราะห์:</strong>{" "}
                  เข้าใจพฤติกรรมการใช้งานเพื่อปรับปรุงบริการ
                </li>
                <li>
                  <strong>คุกกี้การตลาด:</strong> แสดงโฆษณาที่เกี่ยวข้อง
                  (เมื่อคุณยินยอม)
                </li>
                <li>
                  <strong>คุกกี้การตั้งค่า:</strong> จดจำการตั้งค่าของคุณ
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">6. สิทธิของคุณ</h3>
              <p className="mb-4 text-gray-700">คุณมีสิทธิ์ดังนี้:</p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>เข้าถึง:</strong> ขอดูข้อมูลส่วนบุคคลที่เราเก็บ
                </li>
                <li>
                  <strong>แก้ไข:</strong> แก้ไขข้อมูลที่ไม่ถูกต้อง
                </li>
                <li>
                  <strong>ลบ:</strong> ขอลบข้อมูลส่วนบุคคล
                </li>
                <li>
                  <strong>จำกัด:</strong> จำกัดการประมวลผลข้อมูล
                </li>
                <li>
                  <strong>โอนย้าย:</strong> ขอรับข้อมูลในรูปแบบที่ใช้งานได้
                </li>
                <li>
                  <strong>คัดค้าน:</strong> คัดค้านการประมวลผลเพื่อการตลาด
                </li>
                <li>
                  <strong>ถอนยินยอม:</strong> ถอนการยินยอมที่เคยให้ไว้
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                7. การเก็บรักษาข้อมูล
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                เราจะเก็บข้อมูลส่วนบุคคลของคุณตราบเท่าที่จำเป็นเพื่อให้บริการ
                หรือตามที่กฎหมายกำหนด เมื่อคุณลบบัญชี เราจะลบข้อมูลภายใน 30 วัน
                ยกเว้นข้อมูลที่จำเป็นต้องเก็บตามกฎหมาย
              </p>

              <h3 className="text-xl font-semibold mb-4">
                8. การโอนข้อมูลข้ามประเทศ
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                ข้อมูลของคุณอาจถูกประมวลผลในประเทศอื่นที่มีระดับการปกป้องข้อมูลที่แตกต่างกัน
                เราจะใช้มาตรการที่เหมาะสมเพื่อปกป้องข้อมูลของคุณ
              </p>

              <h3 className="text-xl font-semibold mb-4">9. เด็กและเยาวชน</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                บริการของเราไม่มุ่งเป้าไปที่เด็กอายุต่ำกว่า 13 ปี
                หากเราทราบว่าได้เก็บข้อมูลจากเด็กโดยไม่ได้รับความยินยอมจากผู้ปกครอง
                เราจะลบข้อมูลนั้นทันที
              </p>

              <h3 className="text-xl font-semibold mb-4">
                10. การเปลี่ยนแปลงนโยบาย
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                เราอาจปรับปรุงนโยบายความเป็นส่วนตัวเป็นครั้งคราว
                การเปลี่ยนแปลงสำคัญจะแจ้งให้คุณทราบล่วงหน้า 30 วัน
                การใช้งานต่อไปหลังการเปลี่ยนแปลงถือว่าคุณยอมรับนโยบายใหม่
              </p>

              <h3 className="text-xl font-semibold mb-4">11. ติดต่อเรา</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว
                หรือต้องการใช้สิทธิของคุณ โปรดติดต่อเราที่:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>อีเมล:</strong> privacy@gorollth.com
                  <br />
                  <strong>อีเมลทั่วไป:</strong> gorollth@outlook.com
                  <br />
                  <strong>โทรศัพท์:</strong> +66 830796796
                  <br />
                  <strong>ที่อยู่:</strong> Bangkok, Thailand
                  <br />
                  <strong>เจ้าหน้าที่คุมครองข้อมูล:</strong>{" "}
                  privacy@gorollth.com
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  Effective Date: January 1, 2024
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy explains how GOROLL collects, uses, and
                  protects your personal information. We are committed to
                  protecting your privacy and ensuring the security of your
                  data.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                1. Information We Collect
              </h3>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Information You Provide Directly:
                </h4>
                <ul className="list-disc pl-8 mb-4 space-y-2 text-gray-700">
                  <li>Account information (name, email, password)</li>
                  <li>
                    Profile information (personal details, profile picture)
                  </li>
                  <li>Contact information (phone number, address)</li>
                  <li>Content you share (reviews, comments, photos)</li>
                  <li>Communications with us</li>
                </ul>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Information Collected Automatically:
                </h4>
                <ul className="list-disc pl-8 mb-4 space-y-2 text-gray-700">
                  <li>Location data (when you permit)</li>
                  <li>Website and app usage data</li>
                  <li>Device information (IP address, device type, browser)</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>Provide services and fulfill your requests</li>
                <li>Improve and develop our services</li>
                <li>Send notifications and important information</li>
                <li>Analyze usage to improve user experience</li>
                <li>Prevent fraud and maintain security</li>
                <li>Comply with laws and regulations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                3. Information Sharing
              </h3>
              <p className="mb-4 text-gray-700">
                We do not sell your personal information, but may share it in
                these cases:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>With other users:</strong> When you share public
                  content
                </li>
                <li>
                  <strong>With service providers:</strong> Third parties who
                  help operate our services
                </li>
                <li>
                  <strong>For safety:</strong> When necessary to protect rights
                  and safety
                </li>
                <li>
                  <strong>Legal compliance:</strong> When required by government
                  authorities
                </li>
                <li>
                  <strong>Business transfers:</strong> In case of sale,
                  transfer, or merger
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
              <p className="mb-4 text-gray-700">
                We implement technical and administrative security measures:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>Data encryption (SSL/TLS)</li>
                <li>Access controls</li>
                <li>Regular data backups</li>
                <li>Regular security audits</li>
                <li>Employee privacy training</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                5. Our Cookie Usage
              </h3>
              <p className="mb-4 text-gray-700">We use cookies for:</p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>Essential cookies:</strong> Basic website
                  functionality, such as language selection
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Understanding usage
                  patterns to improve services
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Showing relevant
                  advertisements (with your consent)
                </li>
                <li>
                  <strong>Preference cookies:</strong> Remembering your settings
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">6. Your Rights</h3>
              <p className="mb-4 text-gray-700">
                You have the following rights:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>Access:</strong> Request to see personal information
                  we hold
                </li>
                <li>
                  <strong>Rectification:</strong> Correct inaccurate information
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of personal
                  information
                </li>
                <li>
                  <strong>Restriction:</strong> Limit data processing
                </li>
                <li>
                  <strong>Portability:</strong> Receive data in a usable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing for marketing
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw previously given consent
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">7. Data Retention</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                We retain your personal information as long as necessary to
                provide services or as required by law. When you delete your
                account, we will delete your data within 30 days, except for
                information required to be kept by law.
              </p>

              <h3 className="text-xl font-semibold mb-4">
                8. International Data Transfers
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Your data may be processed in other countries with different
                levels of data protection. We will use appropriate measures to
                protect your data.
              </p>

              <h3 className="text-xl font-semibold mb-4">
                9. Children and Minors
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Our services are not directed to children under 13. If we learn
                that we have collected information from a child without parental
                consent, we will delete that information immediately.
              </p>

              <h3 className="text-xl font-semibold mb-4">10. Policy Changes</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Significant
                changes will be notified 30 days in advance. Continued use after
                changes constitutes acceptance of the new policy.
              </p>

              <h3 className="text-xl font-semibold mb-4">11. Contact Us</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy or want to
                exercise your rights, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>Privacy Email:</strong> privacy@gorollth.com
                  <br />
                  <strong>General Email:</strong> gorollth@outlook.com
                  <br />
                  <strong>Phone:</strong> +66 830796796
                  <br />
                  <strong>Address:</strong> Bangkok, Thailand
                  <br />
                  <strong>Data Protection Officer:</strong> privacy@gorollth.com
                </p>
              </div>
            </>
          )}

          <div className="mt-8 text-center">
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
