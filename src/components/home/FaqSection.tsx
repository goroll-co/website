// src/components/home/FaqSection.tsx
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import FaqComponent from "../FaqComponent";

export default function FaqSection() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq1_question"),
      answer: t("faq1_answer"),
    },
    {
      question: t("faq2_question"),
      answer: t("faq2_answer"),
    },
    {
      question: t("faq3_question"),
      answer: t("faq3_answer"),
    },
    {
      question: t("faq4_question"),
      answer: t("faq4_answer"),
    },
  ];

  return <FaqComponent title={t("faq_title")} faqs={faqs} />;
}
