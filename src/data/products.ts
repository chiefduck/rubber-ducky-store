export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  ingredients: string;
  nutrition: {
    servingSize: string;
    calories: number;
    totalFat: number;
    saturatedFat: number;
    transFat: number;
    cholesterol: number;
    sodium: number;
    totalCarbs: number;
    dietaryFiber: number;
    sugars: number;
    protein: number;
  };
  featured: boolean;
  category: string;
  isBundle?: boolean;
  originalPrice?: number;
  bundleItems?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Margarita",
    slug: "classic-margarita",
    price: 12.99,
    description: "Experience the refreshing taste of Margarita flavor & zests with the finest ingredients. Our proprietary blend offers the perfect combination of tangy citrus and subtle sweetness, creating a perfect alcohol-free alternative to the classic cocktail.",
    shortDescription: "The perfect blend of tangy lime and subtle sweetness.",
    image: "/images/products/yellow-can.png",
    gallery: [
      "/images/products/yellow-can.png",
      "/images/products/yellow-can-side.png",
      "/images/products/yellow-can-pack.png",
      "/images/products/yellow-can-ice.png",
    ],
    ingredients: "Carbonated Water, Natural Flavors, Citric Acid, Lime Juice Concentrate, Organic Cane Sugar, Stevia Leaf Extract, Natural Colors from Fruit and Vegetable Juice.",
    nutrition: {
      servingSize: "12 fl oz (355ml)",
      calories: 45,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 10,
      totalCarbs: 10,
      dietaryFiber: 0,
      sugars: 9,
      protein: 0
    },
    featured: true,
    category: "Classics"
  },
  {
    id: "2",
    name: "Berry Bliss",
    slug: "berry-bliss",
    price: 12.99,
    description: "A delightful medley of strawberry, raspberry, and blackberry creates a perfectly balanced berry sensation. Our proprietary blend offers a refreshing burst of flavor with subtle sweetness, perfect for any occasion.",
    shortDescription: "Refreshing blend of premium berries with a hint of sweetness.",
    image: "/images/products/pink-can.png",
    gallery: [
      "/images/products/pink-can.png",
      "/images/products/pink-can-side.png",
      "/images/products/pink-can-pack.png",
      "/images/products/pink-can-ice.png",
    ],
    ingredients: "Carbonated Water, Natural Berry Flavors, Citric Acid, Berry Juice Concentrate, Organic Cane Sugar, Stevia Leaf Extract, Natural Colors from Fruit Juice.",
    nutrition: {
      servingSize: "12 fl oz (355ml)",
      calories: 40,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 5,
      totalCarbs: 9,
      dietaryFiber: 0,
      sugars: 8,
      protein: 0
    },
    featured: true,
    category: "Classics"
  },
  {
    id: "3",
    name: "Crisp Cucumber",
    slug: "crisp-cucumber",
    price: 12.99,
    description: "A refreshing combination of cool cucumber and subtle lime creates a uniquely invigorating beverage. Perfect for a hot day or when you need a moment of refreshment, our Crisp Cucumber provides a spa-like experience in every sip.",
    shortDescription: "Cool cucumber and subtle lime for a refreshing experience.",
    image: "/images/products/green-can.png",
    gallery: [
      "/images/products/green-can.png",
      "/images/products/green-can-side.png",
      "/images/products/green-can-pack.png",
      "/images/products/green-can-ice.png",
    ],
    ingredients: "Carbonated Water, Natural Cucumber and Lime Flavors, Citric Acid, Lime Juice Concentrate, Organic Cane Sugar, Cucumber Extract, Stevia Leaf Extract, Natural Colors from Vegetable Juice.",
    nutrition: {
      servingSize: "12 fl oz (355ml)",
      calories: 35,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 5,
      totalCarbs: 8,
      dietaryFiber: 0,
      sugars: 7,
      protein: 0
    },
    featured: true,
    category: "Classics"
  },
  {
    id: "4",
    name: "Citrus Splash",
    slug: "citrus-splash",
    price: 12.99,
    description: "A vibrant blend of orange, lemon, and grapefruit creates a perfectly balanced citrus experience. Our Citrus Splash delivers a burst of sunshine in every sip, with just the right amount of sweetness to complement the natural tanginess of premium citrus.",
    shortDescription: "Zesty blend of premium citrus with a bright, refreshing finish.",
    image: "/images/products/blue-can.png",
    gallery: [
      "/images/products/blue-can.png",
      "/images/products/blue-can-side.png",
      "/images/products/blue-can-pack.png",
      "/images/products/blue-can-ice.png",
    ],
    ingredients: "Carbonated Water, Natural Citrus Flavors, Citric Acid, Orange and Lemon Juice Concentrate, Organic Cane Sugar, Stevia Leaf Extract, Natural Colors from Fruit Juice.",
    nutrition: {
      servingSize: "12 fl oz (355ml)",
      calories: 45,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 5,
      totalCarbs: 10,
      dietaryFiber: 0,
      sugars: 9,
      protein: 0
    },
    featured: true,
    category: "Classics"
  }
];

// Add a new bundle product
products.push({
  id: "bundle-1",
  name: "Variety Pack",
  slug: "variety-pack",
  price: 45.99,
  originalPrice: 51.96,
  description: "Try all four of our signature flavors in one convenient pack. Perfect for those who want to explore our full range or share with friends!",
  shortDescription: "All four signature flavors in one pack",
  image: "/images/products/bundle-pack.png",
  gallery: [
    "/images/products/bundle-pack.png",
    "/images/products/yellow-can.png",
    "/images/products/pink-can.png",
    "/images/products/green-can.png",
    "/images/products/blue-can.png"
  ],
  ingredients: "See individual products for ingredients",
  nutrition: {
    servingSize: "12 fl oz (355ml)",
    calories: 45,
    totalFat: 0,
    saturatedFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 10,
    totalCarbs: 10,
    dietaryFiber: 0,
    sugars: 9,
    protein: 0
  },
  featured: true,
  category: "Bundles",
  isBundle: true,
  bundleItems: ["1", "2", "3", "4"]
});

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
