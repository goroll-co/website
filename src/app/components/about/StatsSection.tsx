// src/app/components/about/StatsSection.tsx

type StatItem = {
  value: string;
  label: string;
};

export default function StatsSection() {
  const stats: StatItem[] = [
    {
      value: "0",
      label: "Active Users",
    },
    {
      value: "3", // ปรับจาก 4 เป็น 3 ตามจำนวนทีมปัจจุบัน
      label: "Team Members",
    },
    {
      value: "1",
      label: "Countries",
    },
    {
      value: "0%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16 px-4 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
