import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { articles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/learning-center" replace />;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="bg-secondary py-10 md:py-14">
          <div className="container mx-auto px-4">
            <Link
              to="/learning-center"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-semibold mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Learning Center
            </Link>
            <h1 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground leading-tight max-w-3xl">
              {article.title}
            </h1>
          </div>
        </section>

        <section className="bg-background py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose-article">
              {article.content.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-xl md:text-2xl font-heading font-bold text-foreground mt-8 mb-4"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
                  />
                );
              })}

              <div className="mt-10 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center">
                <p className="font-heading font-bold text-foreground text-lg mb-3">
                  Ready to protect your home?
                </p>
                <a
                  href="tel:+14053349493"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-6 py-3 rounded hover:brightness-110 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call (405) 334-9493 for a FREE Inspection
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ArticlePage;
