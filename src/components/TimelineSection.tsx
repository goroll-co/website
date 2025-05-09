// src/app/components/about/TimelineSection.tsx

type Milestone = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineSection() {
  const milestones: Milestone[] = [
    {
      year: "2024",
      title: "Company Founded",
      description: "Started with a simple idea and a passionate team of four.",
    },
    {
      year: "2024",
      title: "Series A Funding",
      description: "Raised THB 500K to accelerate growth and expand our team.",
    },
    // สามารถเพิ่ม milestone อื่นๆ ได้ในอนาคต
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2" />
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10" />
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <span className="text-sm text-blue-600 font-semibold">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
