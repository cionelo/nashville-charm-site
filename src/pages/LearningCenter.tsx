import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { articles } from "@/data/articles";

const LearningCenter = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="bg-secondary py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Learning Center
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              Educational articles to help you understand crawl space repair, waterproofing, and home protection.
            </p>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/learning-center/${article.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="bg-secondary/10 p-6 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-heading font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {article.preview}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default LearningCenter;
