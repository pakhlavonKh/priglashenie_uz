import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Invito
            </h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-sm">
              {t("footer.branding")}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body font-medium tracking-widest uppercase text-foreground mb-4">{t("footer.product")}</h4>
            <div className="space-y-3">
              <Link to="/templates" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light">{t("navbar.templates")}</Link>
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light">{t("howitworks.title")}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-body font-medium tracking-widest uppercase text-foreground mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <a href="mailto:hello@invito.live" className="text-sm text-muted-foreground font-light">hello@invito.live</a>
              <div className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/invito.live/?utm_source=ig_web_button_share_sheet" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://t.me/invito_live" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 3.5L2.5 10.5c-1.4.5-1.4 1.4-.2 1.8l5.1 1.6 2 6.2c.3.9.7 1 1.3.6l2.8-2.1 4.2 3.1c.8.6 1.4.3 1.6-.7l3-14c.2-1-.3-1.4-1.2-1.1zM9.7 17.3l-.8-2.7 6.2-5.6c.3-.3-.1-.4-.4-.2l-7.7 4.8-2.6-.8c-.4-.1-.4-.4.1-.6l16.1-5.6c.4-.1.7.1.6.5l-2.7 12.7c-.1.4-.4.5-.7.3l-4.7-3.5-2.7 2.1c-.3.2-.6.1-.7-.3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-light tracking-wide">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="text-xs text-muted-foreground font-light tracking-wide flex items-center gap-1">
            {t("footer.madeWith")} <Heart size={10} className="text-accent-foreground" /> {t("footer.forBeautifulBeginnings")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
