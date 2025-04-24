
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products, Product } from "@/data/products";

export const ProductCarousel = () => {
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
    <section className="py-12 px-4 md:px-8 bg-ducky-cream">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">Featured Products</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={scrollPosition <= 0}
              className="rounded-full bg-white border-ducky-yellow hover:bg-ducky-yellow/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={scrollPosition >= maxScroll}
              className="rounded-full bg-white border-ducky-yellow hover:bg-ducky-yellow/10"
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex-shrink-0 w-[280px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <Link to={`/products/${product.slug}`} className="block p-4">
        <div className="h-48 flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain"
          />
        </div>
        <h3 className="font-bold text-lg mb-1 text-black">{product.name}</h3>
        <p className="text-black/70 text-sm mb-2 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-black">${product.price.toFixed(2)}</span>
          <Button variant="yellow" size="sm" className="rounded-full">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCarousel;
