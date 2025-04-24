
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReviewCard } from "./ReviewCard";
import { ReviewStats } from "./ReviewStats";
import { 
  getReviewsByProductId, 
  getAverageRating,
  getRatingCounts,
} from "@/data/reviews";

interface ProductReviewsProps {
  productId: string;
}

export const ProductReviews = ({ productId }: ProductReviewsProps) => {
  const [showForm, setShowForm] = useState(false);
  const reviews = getReviewsByProductId(productId);
  const averageRating = getAverageRating(productId);
  const ratingCounts = getRatingCounts(productId);
  const totalReviews = reviews.length;
  
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-8 text-black">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {reviews.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-black/70">No reviews yet. Be the first to review this product!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
          
          <div className="mt-8">
            <Button 
              variant="yellow" 
              onClick={() => setShowForm(!showForm)}
              className="w-full md:w-auto"
            >
              {showForm ? "Cancel Review" : "Write a Review"}
            </Button>
            
            {showForm && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-black">Share Your Experience</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="review-name">Your Name</Label>
                    <Input id="review-name" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="review-title">Review Title</Label>
                    <Input id="review-title" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label>Rating</Label>
                    <div className="flex space-x-1 mt-1">
                      {Array(5).fill(0).map((_, i) => (
                        <button key={i} className="text-gray-300 hover:text-ducky-red">
                          <Star className="h-6 w-6" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="review-content">Your Review</Label>
                    <Textarea 
                      id="review-content" 
                      className="mt-1" 
                      rows={5} 
                      placeholder="Share your thoughts about this product..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="review-photos">Add Photos (optional)</Label>
                    <Input 
                      id="review-photos" 
                      type="file" 
                      className="mt-1" 
                      accept="image/*" 
                      multiple 
                    />
                  </div>
                  
                  <Button variant="red">Submit Review</Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <ReviewStats 
            averageRating={averageRating}
            totalReviews={totalReviews}
            ratingCounts={ratingCounts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
