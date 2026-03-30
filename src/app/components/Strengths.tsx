export function Strengths() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex items-center">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Core Strengths
          </h1>
          <div className="h-px w-24 bg-white mx-auto"></div>
        </div>

        {/* Strengths List */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          <StrengthItem
            number="01"
            title="Confidence & Self-Assurance"
            description="Natural confidence in front of camera and audiences. Comfortable in diverse settings and quick to adapt to different environments."
          />

          <StrengthItem
            number="02"
            title="Strong Stage Presence"
            description="Commanding presence on stage with excellent body language. Proven track record in public speaking and live performances."
          />

          <StrengthItem
            number="03"
            title="Creativity & Vision"
            description="Creative approach to content creation and styling. Ability to conceptualize and execute unique visual narratives."
          />

          <StrengthItem
            number="04"
            title="Adaptability & Versatility"
            description="Quick learner who adapts easily to new styles, concepts, and directions. Versatile across different modeling genres."
          />

          <StrengthItem
            number="05"
            title="Team Collaboration"
            description="Excellent teamwork skills with strong interpersonal abilities. Experience working with diverse production teams and professionals."
          />

          <StrengthItem
            number="06"
            title="Professional Work Ethic"
            description="Dedicated, punctual, and committed to delivering high-quality results. Strong time management and organizational skills."
          />
        </div>
      </div>
    </div>
  );
}

function StrengthItem({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string;
}) {
  return (
    <div>
      <div 
        className="text-6xl text-white/20 mb-3"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
      >
        {number}
      </div>
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
