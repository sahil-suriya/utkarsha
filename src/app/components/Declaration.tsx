export function Declaration() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Declaration
          </h1>
          <div className="h-px w-24 bg-white mx-auto"></div>
        </div>

        {/* Declaration Content */}
        <div className="border border-white/30 p-12">
          <p 
            className="text-xl leading-relaxed mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            I hereby declare that the above information is true to the best of my knowledge 
            and belief. All details regarding my education, experience, achievements, and skills 
            have been provided accurately and can be verified upon request.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
            <div>
              <p 
                className="text-sm text-gray-400 mb-2 uppercase tracking-wider"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                Date
              </p>
              <p 
                className="text-lg"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                March 30, 2026
              </p>
            </div>

            <div className="text-right">
              <p 
                className="text-sm text-gray-400 mb-2 uppercase tracking-wider"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                Signature
              </p>
              <p 
                className="text-4xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'italic' }}
              >
                Sophia Anderson
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400">
          <p 
            className="text-sm"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            For inquiries or collaborations, please contact via email or phone
          </p>
          <p 
            className="text-sm mt-2"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            sophia.anderson@email.com | +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  );
}
