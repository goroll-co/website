// src/components/TermsOfService.tsx
"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X } from "lucide-react";

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfService({
  isOpen,
  onClose,
}: TermsOfServiceProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">
            {language === "th" ? "ข้อตกลงการใช้บริการ" : "Terms of Service"}
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
                  ยินดีต้อนรับสู่ GOROLL
                  โปรดอ่านข้อตกลงการใช้บริการนี้อย่างละเอียดก่อนใช้งานเว็บไซต์และบริการของเรา
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                1. การยอมรับข้อตกลง
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                การเข้าถึงและใช้งานเว็บไซต์ GOROLL
                แสดงให้เห็นว่าคุณยอมรับและตกลงที่จะปฏิบัติตามข้อตกลงการใช้บริการนี้ทั้งหมด
                หากคุณไม่เห็นด้วยกับข้อตกลงใดๆ โปรดหยุดการใช้งานเว็บไซต์ทันที
              </p>

              <h3 className="text-xl font-semibold mb-4">2. บริการของเรา</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                GOROLL เป็นแพลตฟอร์มที่ให้บริการ:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>ข้อมูลเส้นทางที่เข้าถึงได้สำหรับผู้ใช้วีลแชร์</li>
                <li>แพลตฟอร์มชุมชนสำหรับการแบ่งปันประสบการณ์</li>
                <li>บริการ Carpool สำหรับการเดินทางที่เข้าถึงได้</li>
                <li>ข้อมูลสถานที่และสิ่งอำนวยความสะดวกต่างๆ</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                3. การใช้งานที่ยอมรับได้
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                คุณตกลงที่จะใช้บริการของเราเพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมายเท่านั้น
                คุณจะไม่:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>ใช้บริการเพื่อกิจกรรมที่ผิดกฎหมายหรือไม่เหมาะสม</li>
                <li>แชร์ข้อมูลเท็จหรือทำให้เกิดความเข้าใจผิด</li>
                <li>รบกวนหรือทำลายการทำงานของเว็บไซต์</li>
                <li>ละเมิดสิทธิส่วนบุคคลของผู้อื่น</li>
                <li>ใช้บริการเพื่อการค้าโดยไม่ได้รับอนุญาต</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                4. เนื้อหาที่ผู้ใช้สร้าง
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                เมื่อคุณแบ่งปันเนื้อหาใดๆ บนแพลตฟอร์มของเรา
                คุณยืนยันว่าคุณเป็นเจ้าของหรือมีสิทธิ์ในเนื้อหานั้น คุณอนุญาตให้
                GOROLL ใช้ เก็บ และแสดงเนื้อหาของคุณเพื่อการให้บริการ
              </p>

              <h3 className="text-xl font-semibold mb-4">
                5. ความรับผิดชอบและการจำกัดความรับผิด
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                บริการของเราให้ข้อมูลเพื่อการอ้างอิงเท่านั้น
                เราไม่รับประกันความถูกต้องหรือความสมบูรณ์ของข้อมูลทั้งหมด
                ผู้ใช้ควรใช้วิจารณญาณในการเดินทางและปฏิบัติตามกฎระเบียบการจราจรอย่างเคร่งครัด
              </p>

              <h3 className="text-xl font-semibold mb-4">
                6. การเปลี่ยนแปลงข้อตกลง
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                เราขอสงวนสิทธิ์ในการแก้ไขข้อตกลงการใช้บริการนี้เป็นครั้งคราว
                การเปลี่ยนแปลงจะมีผลทันทีเมื่อเผยแพร่บนเว็บไซต์
                การใช้งานต่อไปหลังจากการเปลี่ยนแปลงถือว่าคุณยอมรับข้อตกลงใหม่
              </p>

              <h3 className="text-xl font-semibold mb-4">7. การยุติบริการ</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                เราขอสงวนสิทธิ์ในการยุติหรือระงับบัญชีของคุณหากมีการใช้งานที่ขัดต่อข้อตกลงนี้
                คุณสามารถยุติการใช้บริการได้ตลอดเวลาโดยการหยุดใช้งานเว็บไซต์
              </p>

              <h3 className="text-xl font-semibold mb-4">
                8. กฎหมายที่ใช้บังคับ
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                ข้อตกลงนี้อยู่ภายใต้กฎหมายไทย ข้อพิพาทใดๆ จะอยู่ในเขตอำนาจศาลไทย
              </p>

              <h3 className="text-xl font-semibold mb-4">9. ติดต่อเรา</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                หากคุณมีคำถามเกี่ยวกับข้อตกลงการใช้บริการ โปรดติดต่อเราที่:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>อีเมล:</strong> team@goroll.co
                  <br />
                  <strong>โทรศัพท์:</strong> +66 830796796
                  <br />
                  <strong>ที่อยู่:</strong> Bangkok, Thailand
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
                  Welcome to GOROLL. Please read these Terms of Service
                  carefully before using our website and services.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                1. Acceptance of Terms
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                By accessing and using the GOROLL website, you acknowledge that
                you have read, understood, and agree to be bound by these Terms
                of Service. If you do not agree to any part of these terms,
                please discontinue use of our website immediately.
              </p>

              <h3 className="text-xl font-semibold mb-4">2. Our Services</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                GOROLL provides the following services:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>Accessible route information for wheelchair users</li>
                <li>Community platform for sharing experiences</li>
                <li>Carpool services for accessible transportation</li>
                <li>Information about places and facilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">3. Acceptable Use</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                You agree to use our services only for lawful purposes. You may
                not:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                <li>Use the service for illegal or inappropriate activities</li>
                <li>Share false or misleading information</li>
                <li>Interfere with or disrupt the website&apos;s operation</li>
                <li>Violate others&apos; privacy rights</li>
                <li>Use the service for unauthorized commercial purposes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                4. User-Generated Content
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                When you share any content on our platform, you confirm that you
                own or have the rights to that content. You grant GOROLL
                permission to use, store, and display your content for service
                provision purposes.
              </p>

              <h3 className="text-xl font-semibold mb-4">
                5. Liability and Limitation of Liability
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Our services provide information for reference only. We do not
                guarantee the accuracy or completeness of all information. Users
                should exercise judgment when traveling and strictly follow
                traffic regulations.
              </p>

              <h3 className="text-xl font-semibold mb-4">
                6. Changes to Terms
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service from time
                to time. Changes will take effect immediately upon posting on
                the website. Continued use after changes constitutes acceptance
                of the new terms.
              </p>

              <h3 className="text-xl font-semibold mb-4">7. Termination</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your account if
                there is usage that violates these terms. You may terminate your
                use of the service at any time by stopping use of the website.
              </p>

              <h3 className="text-xl font-semibold mb-4">8. Governing Law</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                These terms are governed by Thai law. Any disputes will be under
                the jurisdiction of Thai courts.
              </p>

              <h3 className="text-xl font-semibold mb-4">9. Contact Us</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> team@goroll.co
                  <br />
                  <strong>Phone:</strong> +66 830796796
                  <br />
                  <strong>Address:</strong> Bangkok, Thailand
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
