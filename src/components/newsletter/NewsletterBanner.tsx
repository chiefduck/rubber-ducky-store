
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { NewsletterSignup } from "./NewsletterSignup";
import { useNewsletterState } from "@/hooks/useNewsletterState";

export const NewsletterBanner = () => {
  const { isBannerDismissed, dismissBanner } = useNewsletterState();

  if (isBannerDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-ducky-yellow p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-black font-semibold">Get 10% off your first order!</h3>
          <p className="text-sm text-black/70">
            Subscribe to our newsletter for exclusive deals and updates.
          </p>
        </div>
        <div className="flex-1">
          <NewsletterSignup source="banner" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={dismissBanner}
          className="absolute top-2 right-2"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
