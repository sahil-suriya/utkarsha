import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Import all 4 images
import image1 from "../../img/Gemini_Generated_Image_keaxegkeaxegkeax.png";
import image2 from "../../img/Gemini_Generated_Image_10br0910br0910br.png";
import image3 from "../../img/Gemini_Generated_Image_7not1n7not1n7not.png";
import image4 from "../../img/Gemini_Generated_Image_8o0ob88o0ob88o0o (1).png";

const images = [
  image1,
  image2,
  image3,
  image4
];

export function CoverPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background image slideshow with overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={images[currentImageIndex]}
              alt={`Portfolio cover ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="mb-8">
          <h1 
            className="text-7xl md:text-9xl tracking-wide mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            UTKARSHA KATOCH
          </h1>
          <div className="h-px w-32 bg-white mx-auto my-8"></div>
          <p 
            className="text-2xl md:text-3xl tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Model Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
