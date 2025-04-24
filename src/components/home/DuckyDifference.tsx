import React from "react";
import { Link } from "react-router-dom"; // ⬅️ Make sure this is at the top!
import { Leaf, Droplet, Flame, MapPin } from "lucide-react"; // Top of your file

const DuckyDifference = () => {
  return (
    <section
    className="relative w-full min-h-[800px] md:min-h-[1000px] bg-no-repeat bg-cover bg-center flex items-center px-4 md:px-12"
    style={{
      backgroundImage: "url('/images/classic_hand.jpg')",
      backgroundPosition: "65% center", // keeps the can in view
    }}
  >
  
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="md:max-w-[50%] bg-white/90 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm p-6 md:p-0 rounded-xl shadow-md md:shadow-none">
    <h2 className="text-4xl md:text-5xl font-extrabold text-ducky-red text-center mb-6 drop-shadow-md">
  The Ducky Difference
</h2>
<p className="text-lg md:text-xl text-ducky-red/80 text-center max-w-2xl mx-auto">
  Real lime juice. Natural agave. No added sugar. 0% alcohol. Just pure chill.
</p>

<div className="mt-8 flex flex-wrap justify-center gap-4">
  <div className="px-4 py-2 bg-white/90 rounded-full shadow text-sm font-medium text-black">
    🍋 Real Lime Juice
  </div>
  <div className="px-4 py-2 bg-white/90 rounded-full shadow text-sm font-medium text-black">
    🌵 Natural Agave
  </div>
  <div className="px-4 py-2 bg-white/90 rounded-full shadow text-sm font-medium text-black">
    🚫 0% Alcohol
  </div>
  <Link
  to="/store-locator"
  className="flex items-center gap-2 px-4 py-2 bg-ducky-red text-white rounded-full shadow text-sm font-medium hover:bg-ducky-red/90 transition"
>
  <MapPin className="h-4 w-4" />
  Find In Stores
</Link>
</div>
    </div>
    <div className="hidden md:block md:w-[45%]" />
  </div>
</section>

  );
};

export default DuckyDifference;

