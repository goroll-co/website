// src/app/contact/page.tsx

"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formState.name.trim()) {
      errors.name =
        language === "th" ? "กรุณากรอกชื่อของคุณ" : "Please enter your name";
    }
    if (!formState.email.trim()) {
      errors.email =
        language === "th" ? "กรุณากรอกอีเมลของคุณ" : "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email =
        language === "th"
          ? "กรุณากรอกอีเมลที่ถูกต้อง"
          : "Please enter a valid email";
    }
    if (!formState.subject.trim()) {
      errors.subject =
        language === "th" ? "กรุณากรอกหัวข้อ" : "Please enter a subject";
    }
    if (!formState.message.trim()) {
      errors.message =
        language === "th" ? "กรุณากรอกข้อความ" : "Please enter your message";
    }
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setFormSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setFormSubmitting(false);
        setFormSubmitted(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setFormSubmitted(false), 5000);
      }, 1500);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] space-y-8">
      {/* Hero Section with Parallax Effect */}
      <div
        className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl overflow-hidden mb-12"
        style={{
          backgroundPositionY: `${scrollY * 0.3}px`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-down">
            {language === "th" ? "ติดต่อเรา" : "Get in Touch"}
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-up animation-delay-300">
            {language === "th"
              ? "มีคำถามหรือข้อเสนอแนะ? นี่คือวิธีที่คุณสามารถติดต่อเราได้"
              : "Have questions? Here's how you can reach us."}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information Side */}
        <div className="space-y-8 order-2 lg:order-1">
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
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/gorollth/"
                  className="bg-gray-100 p-3 rounded-full text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 12.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.35227979856!2d100.3529071!3d13.7248936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1715469381111!5m2!1sen!2sus"
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

        {/* Contact Form Side */}
        <div className="order-1 lg:order-2">
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
              {language === "th" ? "ส่งข้อความถึงเรา" : "Send Us a Message"}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </h2>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-scale-in">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {language === "th"
                    ? "ส่งข้อความสำเร็จ!"
                    : "Message Sent Successfully!"}
                </h3>
                <p className="text-green-700">
                  {language === "th"
                    ? "ขอบคุณที่ติดต่อเรา เราจะตอบกลับโดยเร็วที่สุด"
                    : "Thank you for contacting us. We will get back to you soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {language === "th" ? "ชื่อ" : "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder={
                      language === "th"
                        ? "กรุณากรอกชื่อของคุณ"
                        : "Enter your name"
                    }
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {language === "th" ? "อีเมล" : "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder={
                      language === "th"
                        ? "กรุณากรอกอีเมลของคุณ"
                        : "Enter your email"
                    }
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />{" "}
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {language === "th" ? "หัวข้อ" : "Subject"}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder={
                      language === "th" ? "กรุณากรอกหัวข้อ" : "Enter subject"
                    }
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />{" "}
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {language === "th" ? "ข้อความ" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder={
                      language === "th"
                        ? "กรุณากรอกข้อความของคุณ"
                        : "Enter your message"
                    }
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />{" "}
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors ${
                    formSubmitting
                      ? "opacity-80 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                >
                  {formSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {language === "th" ? "กำลังส่ง..." : "Sending..."}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {language === "th" ? "ส่งข้อความ" : "Send Message"}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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

      {/* Decorative Elements */}
      <div
        className="fixed -z-10 top-20 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div
        className="fixed -z-10 bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      ></div>
    </div>
  );
}
