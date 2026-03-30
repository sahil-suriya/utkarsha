import { Video, Camera, TrendingUp } from "lucide-react";

export function MediaWork() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Content & Media Work
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        {/* Media Work Grid */}
        <div className="space-y-12">
          <MediaCard
            icon={<Video size={40} />}
            title="Instagram Reels & Video Production"
            description="Extensive experience creating professional reels for multiple production houses. Specialized in fashion, lifestyle, and beauty content with strong engagement metrics."
            highlights={[
              "Collaborated with 5+ professional production houses",
              "Created 100+ reels across fashion and lifestyle niches",
              "Strong understanding of trending formats and audio",
              "Consistent growth in follower engagement and reach"
            ]}
          />

          <MediaCard
            icon={<Camera size={40} />}
            title="Camera Confidence & Modeling"
            description="Natural comfort in front of the camera with proven ability to take direction and deliver quality shots. Experience in both still photography and video shoots."
            highlights={[
              "Professional photo shoots for fashion and jewelry",
              "Strong posing techniques and body awareness",
              "Quick adaptation to different photography styles",
              "Experience with both studio and outdoor shoots"
            ]}
          />

          <MediaCard
            icon={<TrendingUp size={40} />}
            title="Social Media Management"
            description="Skilled in content strategy, creation, and social media management. Understanding of platform algorithms and audience engagement techniques."
            highlights={[
              "Personal brand building through Instagram",
              "Content planning and scheduling strategies",
              "Audience engagement and community building",
              "Analytics tracking and performance optimization"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function MediaCard({ 
  icon, 
  title, 
  description, 
  highlights 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  highlights: string[];
}) {
  return (
    <div className="border-2 border-black p-8">
      <div className="flex items-start gap-6">
        <div className="text-black flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 
            className="text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            {title}
          </h3>
          <p 
            className="text-gray-700 mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            {description}
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                <span>▪</span>
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
