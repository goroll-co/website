// src/components/contact/ContactFAQ.tsx
import { useLanguage } from "@/context/LanguageContext";

export default function ContactFAQ() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        {language === "th" ? "คำถามที่พบบ่อย" : "Frequently Asked Questions"}
      </h2>

      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">
            {language === "th"
              ? "ฉันจะติดต่อทีมสนับสนุนได้อย่างไร?"
              : "How can I contact the support team?"}
          </h3>
          <p className="text-gray-600">
            {language === "th"
              ? "คุณสามารถติดต่อเราได้ทางอีเมล gorollth@outlook.com หรือโทรศัพท์ที่ +66 830796796 ในช่วงเวลาทำการ"
              : "You can reach us via email at gorollth@outlook.com or by phone at +66 830796796 during business hours."}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">
            {language === "th"
              ? "GOROLL มีให้บริการที่ไหนบ้าง?"
              : "Where is GOROLL available?"}
          </h3>
          <p className="text-gray-600">
            {language === "th"
              ? "ปัจจุบัน GOROLL ให้บริการในกรุงเทพฯ และปริมณฑล เรามีแผนขยายไปยังจังหวัดหลักๆ ในประเทศไทยเร็วๆ นี้"
              : "Currently, GOROLL services are available in Bangkok and surrounding areas. We plan to expand to other major cities in Thailand soon."}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">
            {language === "th"
              ? "ฉันสามารถร่วมเป็นพันธมิตรกับ GOROLL ได้อย่างไร?"
              : "How can I partner with GOROLL?"}
          </h3>
          <p className="text-gray-600">
            {language === "th"
              ? "เรายินดีที่จะร่วมงานกับพันธมิตรที่มีวิสัยทัศน์เดียวกัน โปรดส่งอีเมลรายละเอียดเกี่ยวกับธุรกิจของคุณและข้อเสนอความร่วมมือไปที่ gorollth@outlook.com"
              : "We welcome partnerships with like-minded organizations. Please email details about your business and partnership proposal to gorollth@outlook.com."}
          </p>
        </div>
      </div>
    </div>
  );
}
