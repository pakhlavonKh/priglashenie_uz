import { useParams, Link } from "react-router-dom";
import { templates } from "@/data/templates";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";
import { Check, ExternalLink, ArrowLeft } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const TemplateDetails = () => {
  const { id } = useParams();
  const template = templates.find((t) => t.id === id);

  usePageTitle(
    template ? {
      title: `${template.name} - Digital Invitation Template | Nikaah Studio`,
      description: template.description,
    } : undefined
  );

  if (!template) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="font-display text-2xl text-foreground">Template not found</h1>
            <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 font-light tracking-widest uppercase">
              Back to Templates
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const related = templates.filter((t) => t.id !== template.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back */}
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 text-xs font-body font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to Templates
          </Link>

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Image */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-border shadow-card">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Right - Info (sticky) */}
            <div className="lg:sticky lg:top-28 lg:self-start space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  {template.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground">
                  {template.name}
                </h1>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  {template.description}
                </p>
              </div>

              <div className="text-3xl font-display font-medium text-foreground">
                ${template.price}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity duration-300">
                  Buy Template
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground text-xs font-body font-medium tracking-widest uppercase rounded-sm hover:bg-secondary transition-colors duration-300">
                  <ExternalLink size={14} /> Live Demo
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                  Features Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {template.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                        <Check size={12} className="text-accent-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 pt-2 border-t border-border">
                <div className="flex justify-between py-2">
                  <span className="text-xs text-muted-foreground font-light tracking-wide uppercase">Style</span>
                  <span className="text-sm text-foreground font-light">{template.style}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-border">
                  <span className="text-xs text-muted-foreground font-light tracking-wide uppercase">Culture</span>
                  <span className="text-sm text-foreground font-light">{template.culture}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-border">
                  <span className="text-xs text-muted-foreground font-light tracking-wide uppercase">Language</span>
                  <span className="text-sm text-foreground font-light">{template.language}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-24 lg:mt-32">
            <div className="text-center space-y-4 mb-14">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
                You May Also Like
              </p>
              <h2 className="text-3xl font-display font-medium text-foreground">
                Related Templates
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((t) => (
                <TemplateCard key={t.id} template={t} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateDetails;
