
export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: number;
  featured: boolean;
  relatedProductIds: string[];
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Sunrise Splash",
    slug: "sunrise-splash",
    description: "Start your day with this refreshing citrus mocktail that brings together our Citrus Splash with fresh orange juice and a splash of grenadine for a beautiful sunrise effect.",
    image: "/images/recipes/sunrise-splash.jpg",
    ingredients: [
      "1 can Rubber Ducky Citrus Splash",
      "2 oz fresh orange juice",
      "½ oz grenadine syrup",
      "Orange slice and cherry for garnish",
      "Ice cubes"
    ],
    instructions: [
      "Fill a highball glass with ice cubes",
      "Pour in the fresh orange juice",
      "Slowly add the Rubber Ducky Citrus Splash",
      "Gently pour the grenadine down the inside of the glass so it settles at the bottom",
      "Garnish with an orange slice and cherry",
      "Do not stir - enjoy the layered effect!"
    ],
    prepTime: "5 minutes",
    servings: 1,
    featured: true,
    relatedProductIds: ["4"]
  },
  {
    "id": "2",
    "title": "Minty Lime Fizz",
    "slug": "minty-lime-fizz",
    "description": "A bright, refreshing mocktail made with Rubber Ducky Classic Lime, fresh mint, and lime wedges. Perfect for sunny afternoons or a quick, zesty pick-me-up!",
    "image": "/images/recipes/minty-lime-fizz.jpg",
    "ingredients": [
      "1 can Rubber Ducky Classic Lime",
      "6-8 fresh mint leaves",
      "½ lime, cut into wedges",
      "1 tsp simple syrup (optional)",
      "Crushed ice"
    ],
    "instructions": [
      "In a glass, gently muddle the mint leaves and lime wedges.",
      "Add simple syrup if desired for a touch of sweetness.",
      "Fill the glass with crushed ice.",
      "Pour Rubber Ducky Classic Lime over the ice.",
      "Stir gently and enjoy immediately."
    ],
    "prepTime": "5 minutes",
    "servings": 1,
    "featured": true,
    "relatedProductIds": ["1"]
  },
  
  {
    "id": "3",
    "title": "Cucumber Lime Cooler",
    "slug": "cucumber-lime-cooler",
    "description": "A cool, crisp refresher made with Rubber Ducky Classic Lime, fresh cucumber, and a squeeze of lime. A spa day in a glass!",
    "image": "/images/recipes/cucumber-lime-cooler.jpg",
    "ingredients": [
      "1 can Rubber Ducky Classic Lime",
      "3-4 thin cucumber slices, plus extra for garnish",
      "2-3 fresh basil leaves or mint leaves",
      "½ tsp honey or agave (optional)",
      "Ice cubes"
    ],
    "instructions": [
      "In a shaker or glass, gently muddle cucumber slices with basil (or mint) and honey (or agave).",
      "Add ice and a splash of fresh lime juice if desired.",
      "Shake well or stir vigorously.",
      "Pour Rubber Ducky Classic Lime over the mix.",
      "Strain into a glass filled with ice, garnish with cucumber slices and herbs."
    ],
    "prepTime": "5 minutes",
    "servings": 1,
    "featured": false,
    "relatedProductIds": ["1"]
  },
  
  {
    id: "4",
    title: "Margarita Mocktail Supreme",
    slug: "margarita-mocktail-supreme",
    description: "Elevate our Classic Margarita with this restaurant-quality mocktail featuring a salted rim, fresh lime, and agave nectar for an authentic margarita experience without the alcohol.",
    image: "/images/recipes/margarita-mocktail.jpg",
    ingredients: [
      "1 can Rubber Ducky Classic Margarita",
      "1 lime, cut into wedges",
      "1 tsp agave nectar",
      "Sea salt for rim",
      "Ice cubes"
    ],
    instructions: [
      "Rub a lime wedge around the rim of your glass and dip in sea salt",
      "Fill glass with ice cubes",
      "Squeeze juice from two lime wedges into the glass",
      "Add agave nectar and stir briefly",
      "Pour in Rubber Ducky Classic Margarita",
      "Garnish with a lime wedge on the rim"
    ],
    prepTime: "5 minutes",
    servings: 1,
    featured: true,
    relatedProductIds: ["1"]
  }
];

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.slug === slug);
};

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};
