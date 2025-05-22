import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const scenarios = [
  {
    title: "Beach Days",
    description:
      "Chill by the waves with a cold Rubber Ducky can in hand. 0% hangover, 100% good vibes.",
    image: "/images/lifestyle/beach-day.jpg",
  },
  {
    title: "Self-Care Nights",
    description:
      "Bubble bath, candles, and a refreshing Classic Margarita. Because you deserve it.",
    image: "/images/lifestyle/self-care.jpg",
  },
  {
    title: "Brunch Vibes",
    description:
      "Pair with pancakes or avocado toast. Rubber Ducky keeps the brunch energy high, no booze needed.",
    image: "/images/lifestyle/brunch.jpg",
  },
  {
    title: "Sober Curious, Still Fun",
    description:
      "Whether you’re cutting back or alcohol-free, Rubber Ducky’s got your back.",
    image: "/images/lifestyle/sober-curious.jpg",
  },
];

export const HowToEnjoy = () => {
  return (
    <section className="py-20 px-4 md:px-8 ">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-ducky-red mb-4">
          How to Enjoy Rubber Ducky
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto">
          Not just a drink — a whole vibe. Here’s how our community enjoys Rubber Ducky.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {scenarios.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg text-ducky-red mb-2">
                {item.title}
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/store-locator">
          <Button variant="yellow" size="lg">
            Find a Store Near You
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HowToEnjoy;
