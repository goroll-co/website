import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
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

// Line Icon component
const LineIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

// X Icon component (formerly Twitter)
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
        <div className="flex space-x-4 flex-wrap">
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
            href="https://x.com/goroll_co"
            className="bg-gray-100 p-3 rounded-full text-black hover:bg-black hover:text-white transition-all transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <XIcon className="w-5 h-5" />
          </a>
          <a
            href="https://line.me/R/ti/p/@goroll"
            className="bg-gray-100 p-3 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-all transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Line Official"
          >
            <LineIcon className="w-5 h-5" />
          </a>
          {/* 
          <a
            href="#"
            className="bg-gray-100 p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
