
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export const ReviewSubmission = ({ isLoggedIn = false }: { isLoggedIn?: boolean }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented with auth later
    console.log("Review submission will be implemented with auth");
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-4">Write a Review</h3>
          <p className="text-gray-600 mb-6">
            Please sign in to share your experience with this product.
          </p>
          <Link to="/auth">
            <Button variant="yellow" className="w-full sm:w-auto">
              <LogIn className="w-4 h-4 mr-2" />
              Sign in to Review
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Write a Review</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <Input type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-2xl focus:outline-none"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoveredRating || rating)
                      ? "fill-ducky-yellow text-ducky-yellow"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your Review</label>
          <Textarea 
            placeholder="Share your thoughts about this product..."
            className="min-h-[120px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Add Photos (Optional)
          </label>
          <Input
            type="file"
            accept="image/*"
            multiple
            className="cursor-pointer"
          />
          <p className="text-sm text-gray-500 mt-1">
            You can upload up to 3 images
          </p>
        </div>

        <Button type="submit" variant="red" className="w-full md:w-auto">
          Submit Review
        </Button>
      </form>
    </div>
  );
};
