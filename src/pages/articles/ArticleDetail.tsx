// Enhancements for the article detail page
// Drop this into ArticleDetail.tsx or similar

import { useParams } from "react-router-dom";
import { getArticleBySlug } from "@/data/articles";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { marked } from "marked";
import { Calendar, User } from "lucide-react";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug!);

  if (!article) {
    return <div className="text-center py-12 text-black">Article not found.</div>;
  }

  return (
    <div className="bg-ducky-cream min-h-screen">
      <Header />

      <main className="container mx-auto py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-ducky-red mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-black/60 text-sm mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="bg-ducky-yellow/40 text-black text-xs font-medium px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="prose prose-ducky max-w-none"
            dangerouslySetInnerHTML={{ __html: marked.parse(article.content) }}
          />

          <div className="mt-12 border-t pt-8 text-center">
            <h3 className="text-2xl font-bold text-ducky-red mb-2">Enjoyed this article?</h3>
            <p className="text-black/70 mb-4">Join our newsletter for more non-alcoholic tips, recipes, and exclusive content!</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-ducky-red rounded-md focus:outline-none focus:ring-2 focus:ring-ducky-red"
              />
              <button
                type="submit"
                className="bg-ducky-red text-white font-bold px-6 py-3 rounded-md hover:bg-ducky-red/90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;

