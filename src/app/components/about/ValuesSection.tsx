// src/app/components/about/ValuesSection.tsx
import { Users, Target, Heart, Clock } from "lucide-react";

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ValuesSection() {
  const values: ValueItem[] = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Inclusivity",
      description:
        "We believe in creating a world where every space is accessible and welcoming for wheelchair users and people of all abilities.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Community-Driven",
      description:
        "Our strength comes from our community. We empower users to share experiences and support each other in making mobility more accessible.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Accessibility First",
      description:
        "Every feature we build starts with accessibility in mind, ensuring our solutions truly serve the needs of wheelchair users.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Empowerment",
      description:
        "We are dedicated to helping wheelchair users travel independently and confidently, transforming challenges into opportunities.",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-4 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
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
