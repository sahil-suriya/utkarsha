import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Portfolio Gallery
          </h1>
          <div className="h-px w-24 bg-black mx-auto mb-4"></div>
          <p 
            className="text-gray-600"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            A collection of professional modeling work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-16">
          {/* Close-up Shots */}
          <section>
            <h2 
              className="text-3xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Close-up & Portrait Shots
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <PortfolioImage
                src="https://images.unsplash.com/photo-1706824253369-01f14db0466e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtb2RlbCUyMGhlYWRzaG90JTIwc3R1ZGlvfGVufDF8fHx8MTc3NDg4MDA5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional headshot"
              />
              <PortfolioImage
                src="https://images.unsplash.com/photo-1624851806638-67069486bb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMGpld2VscnklMjBjbG9zZXVwJTIwZmFjZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NDg4MDA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Jewelry focus shot"
              />
              <PortfolioImage
                src="https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdCUyMG1pbmltYWwlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc0NzgzMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Minimal portrait"
              />
            </div>
          </section>

          {/* Full Body Shots */}
          <section>
            <h2 
              className="text-3xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Full Body & Fashion Shots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <PortfolioImage
                src="https://images.unsplash.com/photo-1704137926348-56efc3c3dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMGZ1bGwlMjBib2R5JTIwc3R1ZGlvJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ4ODAwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Full body fashion"
                tall
              />
              <PortfolioImage
                src="https://images.unsplash.com/photo-1760044567490-196ee8b09ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3ZXN0ZXJuJTIwb3V0Zml0JTIwY2hpY3xlbnwxfHx8fDE3NzQ4ODAwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Western outfit"
                tall
              />
            </div>
          </section>

          {/* Traditional & Minimal */}
          <section>
            <h2 
              className="text-3xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Traditional & Minimal Looks
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <PortfolioImage
                src="https://images.unsplash.com/photo-1756483510802-0acac24ab4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMHRyYWRpdGlvbmFsJTIwZXRobmljJTIwZmFzaGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0ODgwMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional ethnic wear"
              />
              <PortfolioImage
                src="https://images.unsplash.com/photo-1759357251907-cb8302565818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMG1vZGVsJTIwbW9ub2Nocm9tZXxlbnwxfHx8fDE3NzQ4ODAwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Minimal monochrome"
              />
              <PortfolioImage
                src="https://images.unsplash.com/photo-1620122303020-87ec826cf70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0JTIwZWxlZ2FudCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzc0ODgwMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant portrait"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function PortfolioImage({ 
  src, 
  alt, 
  tall = false 
}: { 
  src: string; 
  alt: string; 
  tall?: boolean;
}) {
  return (
    <motion.div 
      className={`border border-black/10 transition-colors ${tall ? 'aspect-[3/4]' : 'aspect-square'}`}
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02, rotateY: -10, rotateX: 5, z: 30, boxShadow: "0px 25px 40px -15px rgba(0,0,0,0.3)" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-sm shadow-xl"
        style={{ transform: "translateZ(20px)" }} // Pops image out from card background
      />
    </motion.div>
  );
}
