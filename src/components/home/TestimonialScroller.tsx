import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The taste of the Rubber Ducky drink is absolutely amazing! It's like a burst of flavors in every sip.",
    name: "John Doe",
    title: "CEO, ABC Company"
  },
  {
    quote: "Finally a non-alcoholic drink that doesn’t taste like regret.",
    name: "Samantha B.",
    title: "Bartender, Beach Vibes Bar"
  },
  {
    quote: "Delicious, refreshing, and perfect for pool days. I’m hooked!",
    name: "Kyle M.",
    title: "Margarita Enthusiast"
  }
];

export const TestimonialScroller = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="py-16 px-4 md:px-8 text-center">
      <div className="mb-4 text-ducky-red flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-ducky-red max-w-2xl mx-auto mb-2">
        {`“${current.quote}”`}
      </h3>
      <p className="text-black/60">{current.name} — {current.title}</p>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button onClick={prev} className="rounded-full p-2 border border-ducky-red text-ducky-red hover:bg-ducky-red hover:text-white transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="rounded-full p-2 border border-ducky-red text-ducky-red hover:bg-ducky-red hover:text-white transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
