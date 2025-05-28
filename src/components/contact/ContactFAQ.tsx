// src/components/contact/ContactFAQ.tsx
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import FaqComponent from "../FaqComponent";

export default function ContactFAQ() {
  const { language } = useLanguage();

  const contactFaqs = [
    {
      question:
        language === "th"
          ? "ฉันจะติดต่อทีมสนับสนุนได้อย่างไร?"
          : "How can I contact the support team?",
      answer:
        language === "th"
          ? "คุณสามารถติดต่อเราได้ทางอีเมล gorollth@outlook.com หรือโทรศัพท์ที่ +66 830796796 ในช่วงเวลาทำการ"
          : "You can reach us via email at gorollth@outlook.com or by phone at +66 830796796 during business hours.",
    },
    {
      question:
        language === "th"
          ? "GOROLL มีให้บริการที่ไหนบ้าง?"
          : "Where is GOROLL available?",
      answer:
        language === "th"
          ? "ปัจจุบัน GOROLL ให้บริการในกรุงเทพฯ และปริมณฑล เรามีแผนขยายไปยังจังหวัดหลักๆ ในประเทศไทยเร็วๆ นี้"
          : "Currently, GOROLL services are available in Bangkok and surrounding areas. We plan to expand to other major cities in Thailand soon.",
    },
    {
      question:
        language === "th"
          ? "ฉันสามารถร่วมเป็นพันธมิตรกับ GOROLL ได้อย่างไร?"
          : "How can I partner with GOROLL?",
      answer:
        language === "th"
          ? "เรายินดีที่จะร่วมงานกับพันธมิตรที่มีวิสัยทัศน์เดียวกัน โปรดส่งอีเมลรายละเอียดเกี่ยวกับธุรกิจของคุณและข้อเสนอความร่วมมือไปที่ gorollth@outlook.com"
          : "We welcome partnerships with like-minded organizations. Please email details about your business and partnership proposal to gorollth@outlook.com.",
    },
  ];

  return (
    <FaqComponent
      title={
        language === "th" ? "คำถามที่พบบ่อย" : "Frequently Asked Questions"
      }
      faqs={contactFaqs}
    />
  );
}
