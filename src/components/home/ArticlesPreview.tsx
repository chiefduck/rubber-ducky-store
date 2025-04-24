
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getFeaturedArticles } from "@/data/articles";

export const ArticlesPreview = () => {
  const articles = getFeaturedArticles().slice(0, 3);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-black/70 max-w-2xl mx-auto">
            Discover tips, recipes, and insights about non-alcoholic beverages and mindful drinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group"
            >
              <div className="bg-ducky-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 relative overflow-hidden">
  <img
    src={article.image}
    alt={article.title}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />
</div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-ducky-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-black/70 mb-4 line-clamp-2">{article.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full border-ducky-red text-ducky-red hover:bg-ducky-red/10"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/articles">
            <Button variant="yellow" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
