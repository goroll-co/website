// src/components/about/ValuesSection.tsx
import { Users, Target, Heart, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ValuesSection() {
  const { t } = useLanguage();

  const values: ValueItem[] = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t("value_inclusivity"),
      description: t("value_inclusivity_desc"),
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: t("value_community"),
      description: t("value_community_desc"),
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: t("value_accessibility"),
      description: t("value_accessibility_desc"),
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: t("value_empowerment"),
      description: t("value_empowerment_desc"),
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-4 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-12">
        {t("our_values")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
