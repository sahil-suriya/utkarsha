export function Experience() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Professional Experience
          </h1>
          <div className="h-px w-24 bg-white mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          <ExperienceItem
            role="Content Creator & Model"
            organization="Multiple Production Houses"
            duration="2023 - PRESENT"
            responsibilities={[
              "Collaborated with multiple production houses for Instagram reels and video shoots",
              "Created engaging content focused on fashion, lifestyle, and beauty",
              "Developed strong camera presence and posing techniques",
              "Managed personal social media presence with consistent content strategy"
            ]}
          />

          <ExperienceItem
            role="Backstage Coordinator"
            organization="Miss Palampur 2026"
            duration="2026"
            responsibilities={[
              "Coordinated backstage operations for major beauty pageant event",
              "Managed model schedules, wardrobe changes, and show logistics",
              "Worked closely with production team to ensure smooth event execution",
              "Gained valuable insight into professional modeling industry standards"
            ]}
          />

          <ExperienceItem
            role="Event Participant & Anchor"
            organization="College Cultural Events"
            duration="2023 - 2026"
            responsibilities={[
              "Participated in multiple college fashion shows and cultural events",
              "Hosted and anchored various college programs and competitions",
              "Demonstrated public speaking skills in front of large audiences",
              "Coordinated with event management teams for successful execution"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ 
  role, 
  organization, 
  duration, 
  responsibilities 
}: { 
  role: string; 
  organization: string; 
  duration: string; 
  responsibilities: string[];
}) {
  return (
    <div className="border-l-2 border-white pl-8 py-4 relative">
      <div className="absolute left-0 top-6 w-4 h-4 bg-white rounded-full transform -translate-x-[9px]"></div>
      
      <h3 
        className="text-3xl mb-2"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
      >
        {role}
      </h3>
      
      <p 
        className="text-xl mb-1"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
      >
        {organization}
      </p>
      
      <p 
        className="text-sm text-gray-400 mb-4 uppercase tracking-wider"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        {duration}
      </p>

      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li 
            key={index}
            className="flex gap-3"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            <span className="mt-1">▪</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
