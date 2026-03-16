import { Link } from "react-router-dom";
import type { Template } from "@/data/templates";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <Link to={`/templates/${template.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 group-hover:shadow-hover group-hover:-translate-y-1">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={template.image}
            alt={template.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-primary text-primary-foreground px-6 py-2.5 text-xs font-body font-medium tracking-widest uppercase rounded-sm">
              Preview Live
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 space-y-2">
          <h3 className="font-display text-lg font-medium text-foreground">{template.name}</h3>
          <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">
            {template.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-body font-medium text-foreground">${template.price}</span>
            <span className="text-xs text-muted-foreground font-light tracking-wide uppercase">
              {template.style}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
