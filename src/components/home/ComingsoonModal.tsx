// src/components/home/ComingSoonModal.tsx
import React from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ComingSoonModalProps {
  onClose: () => void;
}

export default function ComingSoonModal({ onClose }: ComingSoonModalProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-2xl p-6 max-w-md w-full m-4 shadow-xl transform transition-all animate-scale-in">
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="text-center pt-4">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t("coming_soon")}
          </h3>
          <p className="text-gray-600 mb-6">{t("working_hard")}</p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {t("got_it")}
          </button>
        </div>
      </div>
    </div>
  );
}
