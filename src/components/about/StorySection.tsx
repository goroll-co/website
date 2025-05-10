// src/components/about/StorySection.tsx
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function StorySection() {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative h-96">
        <Image
          src="/home.png"
          alt={t("our_story")}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-600">{t("our_story")}</h2>
        <p className="text-gray-900">{t("story_desc1")}</p>
        <p className="text-gray-600">{t("story_desc2")}</p>
      </div>
    </section>
  );
}
