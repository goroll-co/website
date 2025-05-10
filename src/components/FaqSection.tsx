// src/components/home/FaqSection.tsx
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      question: "GOROLL คืออะไร?",
      answer:
        "GOROLL เป็นแพลตฟอร์มที่ช่วยให้ผู้ใช้วีลแชร์สามารถวางแผนการเดินทาง ค้นหาเส้นทางที่เข้าถึงได้ และเชื่อมต่อกับชุมชนที่มีความคิดเหมือนกัน เรามุ่งมั่นที่จะทำให้การเดินทางเข้าถึงได้สำหรับทุกคน",
    },
    {
      question: "ฉันจะใช้ GOROLL ได้อย่างไร?",
      answer:
        "คุณสามารถเข้าถึง GOROLL ผ่านเว็บไซต์หรือแอพมือถือของเรา ลงทะเบียนบัญชีผู้ใช้ และเริ่มสำรวจเส้นทางที่เข้าถึงได้ แบ่งปันประสบการณ์ และเชื่อมต่อกับชุมชน",
    },
    {
      question: "บริการ GOROLL Carpool ทำงานอย่างไร?",
      answer:
        "GOROLL Carpool เชื่อมโยงผู้ใช้วีลแชร์กับคนขับที่ผ่านการตรวจสอบซึ่งมียานพาหนะที่เข้าถึงได้ คุณสามารถจองการเดินทางผ่านแอพ ติดตามการเดินทางแบบเรียลไทม์ และชำระเงินอย่างปลอดภัยบนแพลตฟอร์มของเรา",
    },
    {
      question: "GOROLL มีให้บริการที่ไหนบ้าง?",
      answer:
        "ปัจจุบัน GOROLL ให้บริการในพื้นที่กรุงเทพมหานครและปริมณฑล เรามีแผนที่จะขยายไปยังเมืองหลักอื่นๆ ในประเทศไทยในเร็วๆ นี้",
    },
  ];

  // การสลับสถานะของ Accordion
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          คำถามที่พบบ่อย
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeAccordion === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`px-4 pb-4 transition-all duration-300 ${
                  activeAccordion === index ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
