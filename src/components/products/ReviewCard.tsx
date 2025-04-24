
import { UserCircle2, Star } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-center mb-3">
        <UserCircle2 className="h-10 w-10 text-gray-400 mr-3" />
        <div>
          <p className="font-semibold text-black">{review.name}</p>
          <p className="text-xs text-black/60">
            {new Date(review.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
      
      <div className="flex mb-2">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < review.rating 
                ? "fill-ducky-red text-ducky-red" 
                : "text-gray-300"
            }`} 
          />
        ))}
      </div>
      
      <h4 className="font-bold text-black mb-2">{review.title}</h4>
      <p className="text-black/70 mb-4">{review.content}</p>
      
      {review.images && review.images.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {review.images.map((image, i) => (
            <div key={i} className="w-16 h-16 rounded overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-black/50 text-xs">Review Image</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
