'use client';

import AchievementCard from '../components/achievement-card';

const achievements = [
  {
    title: "Product Launch Success",
    description: "Successfully launched our flagship product reaching 100,000+ users within the first month. The launch included a comprehensive marketing campaign across multiple channels and received positive feedback from industry experts.",
    date: "2024",
    icon: "🚀",
    category: "Product"
  },
  {
    title: "Industry Award",
    description: "Received the prestigious Industry Innovation Award for our revolutionary approach to solving customer problems. The award recognizes outstanding achievements in technology and innovation.",
    date: "2023",
    icon: "🏆",
    category: "Recognition"
  },
  {
    title: "Market Expansion",
    description: "Successfully expanded operations to 5 new international markets, establishing strong partnerships and growing our global user base significantly.",
    date: "2023",
    icon: "🌍",
    category: "Growth"
  },
  {
    title: "Customer Milestone",
    description: "Reached 1 million active users on our platform, with a 95% satisfaction rate. This milestone represents significant growth in our user base and validates our customer-centric approach.",
    date: "2023",
    icon: "👥",
    category: "Milestone"
  },
  {
    title: "Tech Innovation",
    description: "Developed and patented new technology that improved system efficiency by 200%. This breakthrough has set new industry standards for performance and reliability.",
    date: "2022",
    icon: "💡",
    category: "Innovation"
  },
  {
    title: "Sustainability Goal",
    description: "Achieved carbon neutrality in all operations, implementing green technologies and sustainable practices across the organization.",
    date: "2022",
    icon: "🌱",
    category: "Sustainability"
  }
];

export default function AchievementPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Celebrating our milestones and successes as we continue to innovate and grow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            {...achievement}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600">
          These achievements represent our commitment to excellence and innovation.
          <br />
          Stay tuned for more exciting milestones!
        </p>
      </div>
    </div>
  );
}