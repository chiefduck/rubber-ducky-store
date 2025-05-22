import { useState } from "react";
import { Search, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Link } from "react-router-dom";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = searchTerm
    ? articles.filter(
        article =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : articles;

  return (
    <main className="min-h-screen bg-ducky-cream">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Ducky Blog</h1>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Dive into our articles about non-alcoholic drinks, the benefits of reducing alcohol consumption, 
            and tips for enjoying social occasions with delicious alternatives.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 h-12 border-ducky-red focus:ring-ducky-red"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ducky-red h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-black/70">No articles found. Try adjusting your search.</p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <Link key={article.id} to={`/articles/${article.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    {article.featured && (
                      <div className="absolute top-2 right-2 bg-ducky-red text-white text-xs font-bold py-1 px-2 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-xl mb-2 text-black group-hover:text-ducky-red transition-colors">
                      {article.title}
                    </h3>

                    <div className="flex items-center text-sm text-black/60 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{article.author}</span>
                    </div>

                    <p className="text-black/70 mb-4 flex-1">{article.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-ducky-yellow/30 text-black/70 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-auto border-ducky-red text-ducky-red hover:bg-ducky-red/10 group-hover:bg-ducky-red group-hover:text-white transition-colors"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-6">
            Stay updated with our latest articles, recipes, and product launches. 
            Join the Rubber Ducky community today!
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-ducky-red focus:ring-ducky-red"
            />
            <Button variant="yellow">Subscribe</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Articles;
