import { useState } from "react";
import { CitrusIcon, Store, BanIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Features = () => {
  const [showIngredientsModal, setShowIngredientsModal] = useState(false);

  const features = [
    {
      icon: <CitrusIcon className="h-8 w-8 text-ducky-red" />,
      title: "Real Ingredients",
      description:
        "Made with real lime juice, organic agave, and natural extracts — never artificial ingredients.",
      action: "Learn More",
      link: "/ingredients", // triggers modal
    },
    {
      icon: <Store className="h-8 w-8 text-ducky-red" />,
      title: "Wholesale",
      description:
        "Interested in carrying the Ducky Drinks in your restaurant or store? Contact us today!",
      action: "Contact Us",
      link: "/wholesale/apply",
    },
    {
      icon: <BanIcon className="h-8 w-8 text-ducky-red" />,
      title: "0.0% Alcohol",
      description:
        "Booze-free and proud — enjoy the taste and vibes of a margarita with absolutely zero alcohol.",
      action: "Shop Now",
      link: "https://duckydrinks.com/products/classic-margarita",
    },
  ];

  return (
    <>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-black/70 mb-4">{feature.description}</p>

                {feature.link === "/ingredients" ? (
                  <Button
                    variant="outline"
                    className="border-ducky-red text-ducky-red hover:bg-ducky-red/10"
                    onClick={() => setShowIngredientsModal(true)}
                  >
                    {feature.action}
                  </Button>
                ) : feature.link.startsWith("http") ? (
                  <Button
                    variant="outline"
                    className="border-ducky-red text-ducky-red hover:bg-ducky-red/10"
                    asChild
                  >
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {feature.action}
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="border-ducky-red text-ducky-red hover:bg-ducky-red/10"
                    asChild
                  >
                    <Link to={feature.link}>{feature.action}</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTS MODAL */}
      <Dialog open={showIngredientsModal} onOpenChange={setShowIngredientsModal}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-ducky-red">
              Classic Margarita Ingredients
            </DialogTitle>
            <DialogDescription className="mt-2 text-black/80">
              Always 0.0% ABV. No artificial nonsense.
            </DialogDescription>
          </DialogHeader>
          <ul className="mt-4 space-y-3 text-black text-base font-medium list-disc list-inside">
            <li>Water</li>
            <li>Organic Agave Syrup</li>
            <li>Lime Juice Concentrate</li>
            <li>Natural Flavors</li>
            <li>Sodium Citrate</li>
            <li>Potassium Chloride</li>
            <li>Lime Essence</li>
          </ul>
          <p className="mt-6 text-sm text-black/60">
            *Ingredients may vary by flavor. This list reflects our Classic Margarita.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Features;

