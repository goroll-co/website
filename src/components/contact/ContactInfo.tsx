import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactInfo() {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-md p-8 transform transition-transform hover:-translate-y-1 hover:shadow-lg h-full">
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
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/gorollth/"
            className="bg-gray-100 p-3 rounded-full text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="bg-gray-100 p-3 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="bg-gray-100 p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
