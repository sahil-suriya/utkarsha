import { Mountain, Guitar, PenTool, Sparkles, Camera, Dumbbell } from "lucide-react";

export function Hobbies() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Hobbies & Interests
          </h1>
          <div className="h-px w-24 bg-white mx-auto"></div>
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <HobbyCard
            icon={<Mountain size={40} />}
            title="Mountain Travel"
            description="Passionate about exploring mountain destinations and connecting with nature. Regular trekking and adventure trips."
          />

          <HobbyCard
            icon={<Guitar size={40} />}
            title="Music & Guitar"
            description="Enjoy playing guitar and exploring different music genres. Regular practice and creative expression through music."
          />

          <HobbyCard
            icon={<PenTool size={40} />}
            title="Sketching & Art"
            description="Love creating sketches and artistic illustrations. Focus on fashion illustrations and portrait sketching."
          />

          <HobbyCard
            icon={<Sparkles size={40} />}
            title="Fashion & Style"
            description="Keen interest in fashion trends, styling, and personal fashion curation. Regularly experiment with different looks."
          />

          <HobbyCard
            icon={<Camera size={40} />}
            title="Content Creation"
            description="Creating engaging reels, videos, and visual content for social media. Passion for storytelling through digital media."
          />

          <HobbyCard
            icon={<Dumbbell size={40} />}
            title="Fitness & Wellness"
            description="Committed to maintaining physical fitness through regular workouts, yoga, and healthy lifestyle practices."
          />
        </div>
      </div>
    </div>
  );
}

function HobbyCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="border border-white/20 p-8 hover:border-white transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 
        className="text-2xl mb-3"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
      >
        {title}
      </h3>
      <p 
        className="text-gray-300"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );
}
