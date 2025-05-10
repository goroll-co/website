// src/components/contact/ContactInfo.tsx
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactInfo() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-8 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 relative inline-block">
          {language === "th" ? "ข้อมูลการติดต่อ" : "Contact Information"}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        </h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4 group">
            <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-900">
                {language === "th" ? "โทรศัพท์" : "Phone"}
              </h3>
              <a
                href="tel:+66830796796"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                +66 830796796
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-900">
                {language === "th" ? "อีเมล" : "Email"}
              </h3>
              <a
                href="mailto:gorollth@outlook.com"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                gorollth@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-900">
                {language === "th" ? "สถานที่" : "Location"}
              </h3>
              <p className="text-gray-700">Bangkok, Thailand</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-900">
                {language === "th" ? "เวลาทำการ" : "Business Hours"}
              </h3>
              <p className="text-gray-700">
                {language === "th"
                  ? "จันทร์ - ศุกร์: 10:00 - 18:00"
                  : "Monday - Friday: 10:00 - 18:00"}
              </p>
              <p className="text-gray-700">
                {language === "th"
                  ? "เสาร์ - อาทิตย์: ปิด"
                  : "Saturday - Sunday: Closed"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">
            {language === "th" ? "ติดตามเรา" : "Follow Us"}
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Goroll-Thailand-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%A7%E0%B8%B5%E0%B8%A5%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C/61567019297171/"
              className="bg-gray-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/gorollth/"
              className="bg-gray-100 p-3 rounded-full text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 12.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-xl shadow-md p-6 h-80 overflow-hidden">
        <h3 className="text-lg font-semibold mb-4">
          {language === "th" ? "แผนที่และตำแหน่งที่ตั้ง" : "Map & Location"}
        </h3>
        <div className="rounded-lg overflow-hidden h-60 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.35227979856!2d100.3529071!3d13.7248936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2us!4v1715469381111!5m2!1sen!2us"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GOROLL Location"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
