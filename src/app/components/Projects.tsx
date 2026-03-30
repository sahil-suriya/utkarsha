export function Projects() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Academic Projects
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          <ProjectItem
            title="Digital Marketing Strategy for Fashion Brands"
            description="Comprehensive research project analyzing social media marketing strategies used by leading fashion brands. Focused on Instagram content creation and influencer marketing."
            category="Marketing Research"
            year="2023"
          />

          <ProjectItem
            title="Consumer Behavior in Fashion Industry"
            description="Detailed study on consumer purchasing patterns and preferences in the fashion sector. Included primary survey research and statistical analysis."
            category="Consumer Research"
            year="2024"
          />

          <ProjectItem
            title="Brand Building through Social Media"
            description="Case study presentation on successful brand building strategies using social media platforms. Analyzed content creation techniques and engagement metrics."
            category="Presentation"
            year="2023"
          />

          <ProjectItem
            title="Event Management: Fashion Show Planning"
            description="Comprehensive project on organizing and executing a college fashion show. Covered budgeting, logistics, marketing, and coordination."
            category="Event Management"
            year="2022"
          />

          <ProjectItem
            title="Impact of Influencer Marketing"
            description="Research paper examining the effectiveness of influencer marketing in the beauty and fashion industry. Included case studies and ROI analysis."
            category="Research Paper"
            year="2024"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ 
  title, 
  description, 
  category, 
  year 
}: { 
  title: string; 
  description: string; 
  category: string; 
  year: string;
}) {
  return (
    <div className="border-l-4 border-black pl-6 py-2">
      <div className="flex flex-wrap gap-4 items-start justify-between mb-2">
        <h3 
          className="text-2xl flex-1"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
        >
          {title}
        </h3>
        <span 
          className="text-sm px-3 py-1 border border-black uppercase tracking-wider"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          {year}
        </span>
      </div>
      
      <p 
        className="text-sm text-gray-500 mb-3 uppercase tracking-wider"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        {category}
      </p>
      
      <p 
        className="text-gray-700"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );
}
