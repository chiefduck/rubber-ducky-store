import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const StoreCTA = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-ducky-yellow/90">
      <div className="container mx-auto text-center max-w-3xl">
        <MapPin className="mx-auto mb-4 text-ducky-red" size={36} />
        <h2 className="text-3xl font-extrabold text-ducky-red mb-4">
          Find Us Near You
        </h2>
        <p className="text-black/80 mb-6">
          Rubber Ducky is popping up in more and more locations every month.
          Find a store, bar, or café near you that carries our non-alcoholic margaritas.
        </p>
        <Link to="/store-locator" className="inline-block">
          <span className="bg-ducky-red text-white font-semibold px-6 py-3 rounded-full hover:bg-ducky-red/90 transition">
            Open Store Locator
          </span>
        </Link>
      </div>
    </section>
  );
};

export default StoreCTA;
