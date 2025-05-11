
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      headline: "SIP BACK & SMILE — IT’S DUCKY TIME",
      subheading: "Non-alcoholic margaritas made with real lime, natural agave, and feel-good energy. All the flavor, none of the Buzz.",
      ctaText: "Find in Stores",
      ctaLink: "/Store-Locator",
      image: "/images/products/yellow-can.png",
      bgColor: "bg-ducky-yellow"
    },
    {
      headline: "QUACK ONE OPEN AND LET THE GOOD TIMES POUR",
      subheading: "Delicious zero-proof drinks made with real ingredients—crafted for good vibes, better taste, and sunny moments anytime, anywhere.",
      ctaText: "Find in Stores",
      ctaLink: "/Store-Locator",
      image: "/images/products/yellow-can-dual.png",
      bgColor: "bg-ducky-yellow"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const currentSlideData = slides[currentSlide];
  
  return (
    <section className="relative transition-colors duration-500">
  {/* Color Overlay */}
  <div className={`absolute inset-0 z-0 ${currentSlideData.bgColor} opacity-100 backdrop-blur-sm`} />

  {/* Hero Content */}
  <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px] px-4 md:px-8">
    <div className="flex flex-col justify-center py-16 order-2 md:order-1">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
        {currentSlideData.headline}
      </h1>
      <p className="text-lg md:text-xl text-black/80 mb-8 max-w-lg">
        {currentSlideData.subheading}
      </p>
      <div>
        <Link to={currentSlideData.ctaLink}>
          <Button variant="red" size="xl" className="group">
            {currentSlideData.ctaText}
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>

    <div className="flex items-center justify-center order-1 md:order-2 py-8 md:py-0">
      <img
        src={currentSlideData.image}
        alt="Rubber Ducky Drink"
        className="max-h-[350px] md:max-h-[450px] object-contain animate-[float_6s_ease-in-out_infinite]"
        style={{
          animation: "float 6s ease-in-out infinite",
          filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))",
        }}
      />
    </div>
  </div>
</section>

  );
};

export default Hero;
