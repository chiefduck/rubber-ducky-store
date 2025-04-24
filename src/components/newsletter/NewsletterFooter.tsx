
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterFooter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Join our newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">
        Get exclusive offers and be the first to know about new flavors!
      </p>
      <form className="flex flex-col sm:flex-row gap-3">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-1"
        />
        <Button type="submit" variant="yellow">
          Subscribe
        </Button>
      </form>
    </div>
  );
};
