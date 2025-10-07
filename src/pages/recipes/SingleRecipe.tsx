import { useParams } from 'react-router-dom';
import { getRecipeBySlug } from '@/data/recipes';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Clock, User } from 'lucide-react';

const RecipePage = () => {
  const { slug } = useParams();
  const recipe = getRecipeBySlug(slug || '');

  if (!recipe) {
    return (
      <div className="min-h-screen bg-ducky-cream">
        <Header />
        <main className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-black">Recipe not found</h1>
          <p className="text-black/70 mt-4">Try browsing other tasty creations on our Recipes page!</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />

      <main className="container mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ducky-red mb-4">
            {recipe.title}
          </h1>
          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-6">
            {recipe.description}
          </p>
          <div className="flex justify-center items-center gap-4 text-black/70 text-sm">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {recipe.prepTime}
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" /> Serves {recipe.servings}
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg mb-12">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full object-cover h-[400px]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-ducky-red mb-4">Ingredients</h2>
              <ul className="list-disc list-inside text-black/80 space-y-2">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ducky-red mb-4">Instructions</h2>
              <ol className="list-decimal list-inside text-black/80 space-y-2">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-xl text-ducky-red font-semibold mb-2">
            Got a Ducky Mixology Masterpiece?
          </h3>
          <p className="text-black/70 mb-4">
            Share your creations on Instagram with <span className="font-semibold">#DuckyMixology</span>
            — you might be featured!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecipePage;
