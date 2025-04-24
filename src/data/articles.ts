
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  featured: boolean;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Rise of Non-Alcoholic Beverages: A Refreshing Revolution",
    slug: "rise-of-non-alcoholic-beverages",
    excerpt: "Explore the growing trend of premium non-alcoholic beverages and how they're changing the way we socialize and enjoy drinks.",
    content: `
# The Rise of Non-Alcoholic Beverages: A Refreshing Revolution

In recent years, a quiet revolution has been brewing in the beverage industry. As more people seek alternatives to traditional alcoholic drinks, non-alcoholic beverages have emerged from the shadows of mere substitutes to become stars in their own right.

## A Growing Market

The non-alcoholic beverage market has seen unprecedented growth, with sales increasing by over 30% in the past three years alone. This surge isn't just driven by those who abstain from alcohol entirely; it's increasingly fueled by the "sober curious" movement and those looking to moderate their alcohol consumption while still enjoying sophisticated flavor experiences.

## Beyond Simple Substitutes

Gone are the days when non-alcoholic options were limited to sugary sodas or plain sparkling water. Today's alcohol-free beverages bring complexity, craftsmanship, and creativity to the table. At Rubber Ducky Drink Co., we're proud to be part of this movement, creating drinks that stand on their own merits rather than trying to be simple imitations.

## The Social Experience

One of the most significant aspects of this revolution is how it's changing social dynamics. Non-alcoholic options are no longer an afterthought on menus but featured prominently in bars, restaurants, and social gatherings. This shift allows everyone to participate in the ritual and pleasure of enjoying a special drink, regardless of their relationship with alcohol.

## Looking Forward

As innovation continues in this space, we can expect even more exciting developments. From complex botanical blends to functional beverages that offer benefits beyond refreshment, the non-alcoholic category is just getting started. At Rubber Ducky Drink Co., we're excited to keep pushing boundaries and creating drinks that bring joy and flavor to every occasion.

Whether you're cutting back on alcohol, abstaining entirely, or simply exploring new flavor experiences, the non-alcoholic revolution welcomes you with open arms and full glasses!
    `,
    image: "/images/blog/blog1.jpg",
    author: "Jessica Wright",
    date: "2023-09-15",
    featured: true,
    tags: ["non-alcoholic", "beverage trends", "sober curious"]
  },
  {
    id: "2",
    title: "Crafting the Perfect Mocktail: Tips from Our Beverage Team",
    slug: "crafting-perfect-mocktail",
    excerpt: "Learn insider tips and techniques from our beverage experts on how to create stunning and delicious mocktails at home.",
    content: `
# Crafting the Perfect Mocktail: Tips from Our Beverage Team

Creating a truly memorable mocktail is about much more than simply removing alcohol from a recipe. It's an art form that requires attention to balance, presentation, and flavor complexity. Our beverage team shares their top tips for elevating your alcohol-free drinks at home.

## Balance is Everything

The secret to any great drink—alcoholic or not—is balance. "You need to consider the interplay between sweet, sour, bitter, and aromatic elements," explains our head of beverage development, Marcus Chen. "Without alcohol's warming effect, these other flavor components become even more important."

A simple ratio to remember: 2 parts sweet to 1 part sour is a good starting point for most mocktails.

## Fresh Ingredients Make the Difference

Nothing compares to fresh ingredients when crafting premium mocktails. Fresh-squeezed juices, just-picked herbs, and quality mixers (like our Rubber Ducky beverages!) provide vibrant flavors that bottled alternatives simply can't match.

## Don't Forget Texture

Texture is often overlooked in beverage creation but adds an important dimension to mocktails. Consider elements like:

- Carbonation for effervescence
- Egg whites or aquafaba for frothy tops
- Crushed, cubed, or clear ice for different cooling effects
- Muddled fruits or herbs for pulp and visual interest

## The Garnish Game

A thoughtful garnish isn't just decoration—it's an aromatic component and the first impression of your drink. "Think about complementary colors, aromas, and flavors when selecting a garnish," suggests our mixologist Samantha Lee. "And make it interactive when possible."

## Build Your Bar

Having the right tools and ingredients on hand makes mocktail creation much easier. Our team recommends starting with:

- A quality shaker set
- Jigger for precise measurements
- Muddler for herbs and fruits
- Selection of glassware
- Basic syrups (simple, honey, agave)
- Fresh citrus
- Aromatic bitters (many are non-alcoholic)
- Premium mixers (like Rubber Ducky Drink Co. beverages!)

With these fundamentals in mind, you're ready to start creating mocktails that will impress even the most discerning guests. Remember that the best drinks often come from experimentation—so don't be afraid to try unexpected combinations!
    `,
    image: "/images/blog/blog2.jpg",
    author: "Marcus Chen",
    date: "2023-10-22",
    featured: true,
    tags: ["mocktails", "recipes", "bartending"]
  },
  {
    id: "3",
    title: "The Story Behind Our Rubber Ducky: Brand Heritage and Vision",
    slug: "rubber-ducky-brand-story",
    excerpt: "Discover the inspiration behind our playful brand mascot and how it represents our company values and vision.",
    content: `
# The Story Behind Our Rubber Ducky: Brand Heritage and Vision

Every great brand has a story, and at Rubber Ducky Drink Co., ours begins with a simple yellow bath toy that has come to represent joy, playfulness, and unexpected delight.

## From Humble Beginnings

The idea for Rubber Ducky Drink Co. came to our founder, Alex Rivera, during a particularly stressful period in their life. "I was looking for ways to unwind without alcohol," Alex explains. "One evening, while taking a relaxing bath—complete with a little yellow rubber duck floating nearby—it hit me: what if we could bottle that same simple joy and playfulness in a premium non-alcoholic beverage?"

That moment of inspiration in 2018 set the wheels in motion for what would eventually become one of the fastest-growing non-alcoholic beverage brands in the country.

## More Than Just a Mascot

Our rubber ducky is more than just a cute face on our cans. It represents our core brand values:

- **Joy in simplicity**: Like a rubber duck that brings smiles with its mere presence, we believe the best things in life are often the simplest.
  
- **Approachability**: Just as a rubber duck is universally recognized and welcomed, we create beverages that are sophisticated yet accessible to everyone.
  
- **Unexpected quality**: At first glance, a rubber duck is just a toy—but the best ones are carefully crafted for durability, safety, and performance. Similarly, our drinks deliver surprising complexity and quality in every sip.

## Looking Forward While Honoring Tradition

As we grow and evolve, our rubber ducky remains at the heart of everything we do. "We're innovating in a category that's traditionally been very serious," says our Marketing Director, Jamie Kovacs. "The rubber ducky reminds us to maintain that sense of play and joy, even as we push the boundaries of what non-alcoholic beverages can be."

In the coming years, we plan to expand our product line while staying true to our mission of creating moments of unexpected delight through premium non-alcoholic beverages that bring people together.

So the next time you crack open a can of Rubber Ducky, take a moment to appreciate the little yellow friend on the label—a symbol of the joy, quality, and playful spirit we hope to bring to your day.
    `,
    image: "/images/blog/blog3.jpg",
    author: "Alex Rivera",
    date: "2023-11-30",
    featured: false,
    tags: ["brand story", "company values", "founder"]
  },
  {
    id: "4",
    title: "Why We Chose Real Ingredients (and Never Looked Back)",
    slug: "real-ingredients-rubber-ducky",
    excerpt:
      "From hand-squeezed lime juice to natural agave, here's why quality ingredients matter—and how they make our non-alcoholic drinks stand out.",
    content: `
  # Why We Chose Real Ingredients (and Never Looked Back)
  
  At Rubber Ducky Drink Co., we're obsessed with what goes *into* the can. From day one, our mission has been clear: create a non-alcoholic drink that’s not only refreshing but made with real, clean, and recognizable ingredients.
  
  ## No Fake Stuff, Ever
  
  We could’ve used flavor concentrates or artificial sweeteners like some brands—but that’s just not our style. We use:
  
  - Real lime juice for a zesty, authentic citrus punch  
  - Natural agave syrup for sweetness with character  
  - Purified water for a clean, crisp base  
  - A pinch of sea salt for balance
  
  That’s it. No added sugar, no preservatives, no nonsense.
  
  ## Taste You Can Trust
  
  When you drink a Rubber Ducky Classic Margarita, you're getting flavor that comes from the *actual source*, not a lab. It’s what gives our drinks their bright, clean finish and makes them so dang crushable.
  
  ## Feel-Good Sips
  
  Using real ingredients isn’t just about taste—it’s about how you *feel* after drinking. Our blends are light, clean, and leave you refreshed, not bloated or buzzed. Whether you're out with friends or sipping solo, you can enjoy every moment without compromise.
  
  ## A New Standard
  
  We believe everyone deserves better. That’s why we’re raising the bar in the non-alc space and challenging the norm. Once you’ve tasted a drink made with real ingredients, there’s no going back.
  
  So go ahead—crack open that can and taste the difference.
  
  Welcome to the Ducky way of doing things.
    `,
    image: "/images/blog/blog3.jpg", // You can update this path or image filename
    author: "Jamie Kovacs",
    date: "2024-01-05",
    featured: true,
    tags: ["ingredients", "healthy choices", "behind the scenes"]
  }
  
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};
