import { ImageWithFallback } from "./figma/ImageWithFallback";
import coverBackground from "../../img/Gemini_Generated_Image_keaxegkeaxegkeax.png";

export function CoverPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={coverBackground}
          alt="Portfolio cover"
          className="w-full h-full object-cover"
        />
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
