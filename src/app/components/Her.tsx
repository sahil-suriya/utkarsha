export function Her() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Her
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto border border-black/10 p-8 md:p-10">
          <h2
            className="text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            A little about her
          </h2>

          <p
            className="text-gray-700 leading-8 mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            She is a BBA student with a creative spirit and a love for expression.
            She enjoys guitar, singing, sketching, travelling, and spending time in
            the mountains. Her personality blends confidence, curiosity, and calm
            energy, which reflects in both her work and her style.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-gray-800">
            {[
              "BBA Student",
              "Loves Guitar",
              "Passionate About Singing",
              "Enjoys Sketching",
              "Loves Travelling",
              "Mountain Lover",
            ].map((item) => (
              <p
                key={item}
                className="flex items-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                <span>•</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
