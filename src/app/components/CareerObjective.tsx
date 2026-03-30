export function CareerObjective() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Career Objective
          </h1>
          <div className="h-px w-24 bg-white"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p 
            className="text-xl md:text-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, lineHeight: "1.8" }}
          >
            A passionate and confident aspiring model with a creative mindset and a strong foundation 
            in content creation. Eager to leverage my experience in social media handling, reel production, 
            and collaboration with multiple production houses to establish a successful career in modeling 
            and the fashion industry.
          </p>
          
          <p 
            className="text-xl md:text-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, lineHeight: "1.8" }}
          >
            With a proven track record of working backstage at prestigious events like Miss Palampur 2026, 
            combined with my public speaking skills and stage presence, I aim to bring versatility, 
            professionalism, and creativity to every project I undertake.
          </p>
        </div>
      </div>
    </div>
  );
}
