
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NewsletterSignup } from "./NewsletterSignup";
import { useNewsletterState } from "@/hooks/useNewsletterState";

export const NewsletterModal = () => {
  const { isModalShown, hideModal } = useNewsletterState();

  return (
    <Dialog open={isModalShown} onOpenChange={hideModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join our Duck Club! 🦆</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-gray-600">
            Subscribe to our newsletter and get 10% off your first order, plus exclusive access to new flavors and special offers!
          </p>
          <NewsletterSignup source="modal" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
