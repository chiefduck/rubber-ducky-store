
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
    id: "2",
    title: "Berry Mint Fizz",
    slug: "berry-mint-fizz",
    description: "A delightful combination of our Berry Bliss with fresh muddled mint and lime creates an elevated mocktail perfect for summer gatherings or a refreshing afternoon treat.",
    image: "/images/recipes/berry-mint-fizz.jpg",
    ingredients: [
      "1 can Rubber Ducky Berry Bliss",
      "6-8 fresh mint leaves",
      "½ lime, cut into wedges",
      "1 tsp simple syrup (optional)",
      "Fresh berries for garnish",
      "Crushed ice"
    ],
    instructions: [
      "In a glass, muddle mint leaves and lime wedges gently",
      "Add simple syrup if desired for additional sweetness",
      "Fill glass with crushed ice",
      "Pour Rubber Ducky Berry Bliss over the ice",
      "Stir gently to combine flavors",
      "Garnish with fresh berries and a mint sprig"
    ],
    prepTime: "8 minutes",
    servings: 1,
    featured: true,
    relatedProductIds: ["2"]
  },
  {
    id: "3",
    title: "Cucumber Cooler",
    slug: "cucumber-cooler",
    description: "Take our Crisp Cucumber to the next level with this spa-inspired cooler featuring fresh cucumber slices, basil, and a hint of honey for a perfectly balanced refreshment.",
    image: "/images/recipes/cucumber-cooler.jpg",
    ingredients: [
      "1 can Rubber Ducky Crisp Cucumber",
      "3-4 thin cucumber slices, plus extra for garnish",
      "2-3 fresh basil leaves",
      "½ tsp honey",
      "Squeeze of fresh lime juice",
      "Ice cubes"
    ],
    instructions: [
      "In a shaker or glass, muddle cucumber slices with basil leaves and honey",
      "Add a squeeze of fresh lime juice",
      "Add ice and shake well (or stir vigorously if using a glass)",
      "Strain into a tall glass filled with fresh ice",
      "Top with Rubber Ducky Crisp Cucumber",
      "Garnish with cucumber slice and basil leaf"
    ],
    prepTime: "7 minutes",
    servings: 1,
    featured: false,
    relatedProductIds: ["3"]
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
