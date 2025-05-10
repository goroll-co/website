// src/components/contact/ContactForm.tsx
import { useState } from "react";
import { AlertCircle, Check, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const { language } = useLanguage();

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
                language === "th" ? "กรุณากรอกชื่อของคุณ" : "Enter your name"
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
                language === "th" ? "กรุณากรอกอีเมลของคุณ" : "Enter your email"
              }
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.email}
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
                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.subject}
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
                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.message}
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
  );
}
