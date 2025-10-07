// src/components/ShopCategoryNav.tsx
import { Link } from "react-router-dom";

const categories = [
  { name: "All", path: "/shop" },
  { name: "Drinks", path: "/shop/drinks" },
  { name: "Merch", path: "/shop/merch" },
  { name: "Wholesale", path: "/shop/wholesale" },
];

export default function ShopCategoryNav({ current }: { current: string }) {
  return (
    <div className="flex justify-center mb-12 flex-wrap gap-3">
      {categories.map((cat) => {
        const isActive = current.toLowerCase() === cat.name.toLowerCase() || 
                         (current === "all" && cat.name === "All");
        return (
          <Link
            key={cat.path}
            to={cat.path}
            className={`px-5 py-2 rounded-full font-semibold border transition-all ${
              isActive
                ? "bg-ducky-red text-white border-ducky-red"
                : "border-black/20 text-black/70 hover:text-ducky-red hover:border-ducky-red"
            }`}
          >
            {cat.name}
          </Link>
        );
      })}
    </div>
  );
}
