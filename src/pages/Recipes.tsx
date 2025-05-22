import { useState } from "react";
import { Search, Clock, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { recipes } from "@/data/recipes";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = searchTerm
    ? recipes.filter(
        recipe =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : recipes;

  return (
    <main className="min-h-screen bg-ducky-cream">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Ducky Drink Recipes</h1>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Discover delicious ways to enjoy our non-alcoholic beverages. 
            From simple serves to creative mocktails, we've got recipes to elevate your Rubber Ducky experience.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 h-12 border-ducky-red focus:ring-ducky-red"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ducky-red h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-black/70">No recipes found. Try adjusting your search.</p>
            </div>
          ) : (
            filteredRecipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipes/${recipe.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    {recipe.image ? (
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0"
                        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-ducky-yellow/30 to-ducky-blue/20 flex items-center justify-center">
                        <span className="text-black/50 text-sm">Recipe Image</span>
                      </div>
                    )}
                    {recipe.featured && (
                      <div className="absolute top-2 right-2 bg-ducky-red text-white text-xs font-bold py-1 px-2 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-black group-hover:text-ducky-red transition-colors">
                      {recipe.title}
                    </h3>

                    <p className="text-black/70 mb-4 line-clamp-2">{recipe.description}</p>

                    <div className="flex items-center text-sm text-black/60 mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{recipe.prepTime}</span>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>Serves {recipe.servings}</span>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-ducky-red text-ducky-red hover:bg-ducky-red/10 group-hover:bg-ducky-red group-hover:text-white transition-colors"
                    >
                      View Recipe
                    </Button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Got a Great Recipe?</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-6">
            Have you created a delicious recipe featuring our Rubber Ducky drinks? 
            We'd love to see it! Share your creation on social media with #DuckyMixology 
            or submit your recipe to us for a chance to be featured.
          </p>
          <Button variant="yellow" size="lg">Submit Your Recipe</Button>
        </div>
      </div>
    </main>
  );
};

export default Recipes;
