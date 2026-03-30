import { Award, Star, Trophy } from "lucide-react";

export function Achievements() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Achievements & Awards
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AchievementCard
            icon={<Trophy size={32} />}
            title="Public Speaking Excellence"
            description="Winner of multiple inter-college public speaking competitions. Recognized for powerful delivery and stage command."
            year="2023-2026"
          />

          <AchievementCard
            icon={<Award size={32} />}
            title="Declamation Champion"
            description="First place in college-level declamation contest. Demonstrated exceptional oratory skills and confidence."
            year="2023-2026"
          />

          <AchievementCard
            icon={<Star size={32} />}
            title="Miss Palampur 2026"
            description="Key backstage coordinator and management team member. Played crucial role in event execution and model coordination."
            year="2026"
          />

          <AchievementCard
            icon={<Award size={32} />}
            title="Content Creation Collaboration"
            description="Successfully collaborated with multiple production houses for professional reels and content creation projects."
            year="2023-2026"
          />

          <AchievementCard
            icon={<Star size={32} />}
            title="College Cultural Participation"
            description="Active participant in college cultural events, fashion shows, and talent competitions. Multiple podium finishes."
            year="2023-2026"
          />

          <AchievementCard
            icon={<Trophy size={32} />}
            title="Leadership Recognition"
            description="Recognized for leadership qualities in event management and team coordination at college level."
            year="2025"
          />
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ 
  icon, 
  title, 
  description, 
  year 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  year: string;
}) {
  return (
    <div className="border border-black/10 p-8 hover:border-black transition-colors">
      <div className="mb-4 text-black">{icon}</div>
      <h3 
        className="text-2xl mb-3"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
      >
        {title}
      </h3>
      <p 
        className="text-gray-700 mb-3"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
      <p 
        className="text-sm text-gray-500 uppercase tracking-wider"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        {year}
      </p>
    </div>
  );
}
