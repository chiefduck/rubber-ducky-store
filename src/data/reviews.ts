
export interface Review {
  id: string;
  productId: string;
  name: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  images?: string[];
}

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    name: "Sarah Johnson",
    rating: 5,
    date: "2023-06-15",
    title: "Absolutely Delicious!",
    content: "The taste of the Rubber Ducky drink is absolutely amazing! It's like a burst of flavors in every sip. Perfect for a hot summer day or when you want something refreshing without the alcohol. Will definitely buy again!",
    images: ["/images/reviews/review-1-1.jpg", "/images/reviews/review-1-2.jpg", "/images/reviews/review-1-3.jpg"]
  },
  {
    id: "2",
    productId: "1",
    name: "Michael Thompson",
    rating: 4,
    date: "2023-07-02",
    title: "Great Alternative",
    content: "I've been looking for a good non-alcoholic alternative and this hits the spot. The Classic Margarita flavor is very close to the real thing but without the alcohol. Would recommend to anyone looking to cut back on drinking but still enjoy the experience.",
    images: ["/images/reviews/review-2-1.jpg", "/images/reviews/review-2-2.jpg"]
  },
  {
    id: "3",
    productId: "2",
    name: "Emily Wilson",
    rating: 5,
    date: "2023-08-10",
    title: "Berry Bliss is Amazing",
    content: "The Berry Bliss flavor is my absolute favorite! Such a perfect balance of sweetness and berry flavor. I keep my fridge stocked with these at all times now. Great for parties too as a mixer or on its own!",
    images: ["/images/reviews/review-3-1.jpg", "/images/reviews/review-3-2.jpg", "/images/reviews/review-3-3.jpg"]
  },
  {
    id: "4",
    productId: "3",
    name: "David Chen",
    rating: 5,
    date: "2023-09-05",
    title: "So Refreshing",
    content: "The Crisp Cucumber is exactly what I needed. It's incredibly refreshing and has become my go-to after workouts. The cucumber flavor is authentic and not artificial tasting. Highly recommend!",
  },
  {
    id: "5",
    productId: "4",
    name: "Jessica Martinez",
    rating: 4,
    date: "2023-10-20",
    title: "Bright & Zesty",
    content: "Citrus Splash is like summer in a can! The balance of different citrus flavors works really well together. Not too sweet, not too tart - just right. Great packaging too, looks fun in my fridge!",
    images: ["/images/reviews/review-5-1.jpg"]
  }
];

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};

export const getAverageRating = (productId: string): number => {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  
  const sum = productReviews.reduce((total, review) => total + review.rating, 0);
  return sum / productReviews.length;
};

export const getRatingCounts = (productId: string): Record<number, number> => {
  const productReviews = getReviewsByProductId(productId);
  const counts: Record<number, number> = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  
  productReviews.forEach(review => {
    counts[review.rating] = (counts[review.rating] || 0) + 1;
  });
  
  return counts;
};
