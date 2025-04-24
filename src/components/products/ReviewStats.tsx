
import { Star } from "lucide-react";

interface ReviewStatsProps {
  averageRating: number;
  totalReviews: number;
  ratingCounts: Record<number, number>;
}

export const ReviewStats = ({ averageRating, totalReviews, ratingCounts }: ReviewStatsProps) => {
  return (
    <div className="bg-ducky-yellow/20 p-6 rounded-lg">
      <h3 className="font-bold text-lg mb-4 text-black">Overall Customer Reviews</h3>
      
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${
              i < Math.round(averageRating) 
                ? "fill-ducky-red text-ducky-red" 
                : "text-gray-300"
            }`} 
          />
        ))}
        <span className="ml-2 font-bold text-black">
          {averageRating.toFixed(1)} out of 5
        </span>
      </div>
      
      <p className="text-sm text-black/70 mb-4">
        Based on {totalReviews} review{totalReviews !== 1 ? 's' : ''}
      </p>
      
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center">
            <div className="w-12 text-sm text-black/70">{rating} star</div>
            <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-ducky-red" 
                style={{ 
                  width: `${totalReviews ? (ratingCounts[rating] / totalReviews) * 100 : 0}%` 
                }}
              ></div>
            </div>
            <div className="w-8 text-sm text-black/70 text-right">
              {ratingCounts[rating]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
