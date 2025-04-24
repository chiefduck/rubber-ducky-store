
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: "1",
    name: "Sarah J.",
    quote: "The taste of the Rubber Ducky drink is absolutely amazing! It's like a burst of flavors in every sip.",
    rating: 5,
    location: "Los Angeles, CA"
  },
  {
    id: "2",
    name: "Michael T.",
    quote: "Perfect alternative to alcoholic drinks. My friends couldn't even tell the difference at our last BBQ!",
    rating: 5,
    location: "Chicago, IL"
  },
  {
    id: "3",
    name: "Emily W.",
    quote: "I keep these stocked in my fridge at all times. The Berry Bliss is my absolute favorite!",
    rating: 5,
    location: "Austin, TX"
  },
  {
    id: "4",
    name: "David C.",
    quote: "As someone who doesn't drink alcohol, these are a game-changer for social gatherings. Finally, a sophisticated option!",
    rating: 4,
    location: "Seattle, WA"
  }
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollAmount = 300;
  const maxScroll = containerRef.current
    ? containerRef.current.scrollWidth - containerRef.current.clientWidth
    : 0;
  
  const scrollLeft = () => {
    if (containerRef.current) {
      const newPosition = Math.max(scrollPosition - scrollAmount, 0);
      containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      const newPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
      containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };
  
  return (
    <section className="py-16 px-4 md:px-8 bg-ducky-yellow/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">What Our Customers Say</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={scrollPosition <= 0}
              className="rounded-full bg-white border-ducky-red hover:bg-ducky-red/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={scrollPosition >= maxScroll}
              className="rounded-full bg-white border-ducky-red hover:bg-ducky-red/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 -mx-2 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="flex items-center justify-center mb-2">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-ducky-red text-ducky-red" />
            ))}
          </div>
          <p className="text-sm text-black/70">Based on 100+ verified reviews</p>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < testimonial.rating 
                ? "fill-ducky-red text-ducky-red" 
                : "fill-gray-200 text-gray-200"
            }`} 
          />
        ))}
      </div>
      <p className="text-black/80 mb-4 italic">"{testimonial.quote}"</p>
      <div>
        <p className="font-semibold text-black">{testimonial.name}</p>
        <p className="text-sm text-black/60">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default Testimonials;
