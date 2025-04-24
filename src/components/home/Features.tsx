
import { CitrusIcon, Store, BanIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Features = () => {
  const features = [
    {
      icon: <CitrusIcon className="h-8 w-8 text-ducky-red" />,
      title: "Real Ingredients",
      description: "Made with real lime juice, organic agave, and natural extracts — never artificial ingredients.",
      action: "Learn More"
    },
    {
      icon: <Store className="h-8 w-8 text-ducky-red" />,
      title: "Wholesale",
      description: "Interested in carrying the Ducky Drinks in your restaurant or store? Contact us today!",
      action: "Contact Us"
    },
    {
      icon: <BanIcon className="h-8 w-8 text-ducky-red" />,
      title: "0.0% Alcohol",
      description: "Booze-free and proud — enjoy the taste and vibes of a margarita with absolutely zero alcohol.",
      action: "Shop Now"
    }
  ];
  
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">{feature.title}</h3>
              <p className="text-black/70 mb-4">{feature.description}</p>
              <Button variant="outline" className="border-ducky-red text-ducky-red hover:bg-ducky-red/10">
                {feature.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
