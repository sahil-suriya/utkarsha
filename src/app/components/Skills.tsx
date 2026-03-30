export function Skills() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Skills & Competencies
          </h1>
          <div className="h-px w-24 bg-white mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Professional Skills */}
          <div>
            <h2 
              className="text-3xl mb-8 pb-4 border-b border-white/30"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Professional Skills
            </h2>
            <ul className="space-y-4">
              {[
                "Communication & Interpersonal Skills",
                "Public Speaking & Presentation",
                "Leadership & Team Management",
                "Teamwork & Collaboration",
                "Event Coordination & Management",
                "Time Management",
                "Adaptability & Flexibility"
              ].map((skill, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                >
                  <span className="text-white mt-1">▪</span>
                  <span className="text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 
              className="text-3xl mb-8 pb-4 border-b border-white/30"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Technical Skills
            </h2>
            <ul className="space-y-4">
              {[
                "Social Media Content Creation",
                "Instagram Reels Production",
                "Video Editing & Photography",
                "Digital Marketing Basics",
                "MS Office Suite (Word, Excel, PowerPoint)",
                "Content Strategy & Planning",
                "Camera Presence & Posing Techniques"
              ].map((skill, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                >
                  <span className="text-white mt-1">▪</span>
                  <span className="text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
