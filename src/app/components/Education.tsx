export function Education() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Educational Background
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        {/* Education Items */}
        <div className="space-y-12">
          <EducationItem
            degree="Bachelor of Commerce (B.Com)"
            institution="Miranda House, University of Delhi"
            year="2021 - 2024"
            details="Current: 5th Semester"
          />

          <EducationItem
            degree="12th Standard - Commerce"
            institution="Delhi Public School, Delhi"
            year="2020"
            details="Percentage: 92.5%"
          />

          <EducationItem
            degree="10th Standard"
            institution="Delhi Public School, Delhi"
            year="2018"
            details="Percentage: 94%"
          />
        </div>
      </div>
    </div>
  );
}

function EducationItem({ 
  degree, 
  institution, 
  year, 
  details 
}: { 
  degree: string; 
  institution: string; 
  year: string; 
  details: string;
}) {
  return (
    <div className="border-l-2 border-black pl-8 py-4 relative">
      <div className="absolute left-0 top-6 w-4 h-4 bg-black rounded-full transform -translate-x-[9px]"></div>
      
      <h3 
        className="text-2xl mb-2"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
      >
        {degree}
      </h3>
      
      <p 
        className="text-lg text-gray-700 mb-1"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
      >
        {institution}
      </p>
      
      <div className="flex flex-col md:flex-row md:gap-6 text-gray-600">
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
          {year}
        </p>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
          {details}
        </p>
      </div>
    </div>
  );
}
