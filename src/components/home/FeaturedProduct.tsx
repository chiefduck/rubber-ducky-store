import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Product = {
  name: string;
  subtitle: string;
  price: number;
  image: string;
  link: string;
  bgColor: string; // new prop for card color
};

const featuredProducts: Product[] = [
  {
    name: "Classic Margarita",
    subtitle: "0% ABV",
    price: 14.99,
    image: "/images/products/yellow-can.png",
    link: "https://rubberduckydrinkco.com/products/classic-margarita",
    bgColor: "bg-[#FDF221]", // Ducky yellow
  },
  {
    name: "Ducky Tee",
    subtitle: "Unisex / Soft Cotton",
    price: 24.99,
    image: "/images/products/ducky-shirt.png",
    link: "#",
    bgColor: "bg-[#D9B3FF]", // Soft lavender
  },
  {
    name: "Performance Hoodie",
    subtitle: "Warm Up Hoodie",
    price: 44.99,
    image: "/images/products/sports_hoodie.png",
    link: "#",
    bgColor: "bg-[#ADE9C5]", // Fresh mint green
  },
  {
    name: "High Ball Glass",
    subtitle: "10oz Glass",
    price: 13.99,
    image: "/images/products/10oz_glass.png",
    link: "#",
    bgColor: "bg-[#A7D8F5]", // Aqua blue
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-transparent">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-ducky-red mb-4">
          Featured Products
        </h2>
        <p className="text-black/80 max-w-xl mx-auto">
          Sip the sunshine. Stock up on our Classic Margarita or grab some Ducky merch to vibe in style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {featuredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <div className={`h-64 flex items-center justify-center ${product.bgColor}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-44 object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-ducky-red mb-1">{product.name}</h3>
              <p className="text-sm text-black/70 mb-2">{product.subtitle}</p>
              <p className="text-xl font-bold text-black mb-4">${product.price.toFixed(2)}</p>
              <Link to={product.link}>
                <Button className="w-full rounded-full" variant="red">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

