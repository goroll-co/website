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

// TikTok Icon component since it's not available in lucide-react
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.86-4.43V7.83a8.24 8.24 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.26z" />
  </svg>
);

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
              href="mailto:team@goroll.co"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              team@goroll.co
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
            href="https://www.facebook.com/goroll.co"
            className="bg-gray-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/goroll.co"
            className="bg-gray-100 p-3 rounded-full text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://www.tiktok.com/@goroll.co"
            className="bg-gray-100 p-3 rounded-full text-black hover:bg-black hover:text-white transition-all transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTokIcon className="w-5 h-5" />
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
