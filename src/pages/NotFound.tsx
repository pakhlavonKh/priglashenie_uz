import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePageTitle } from "@/hooks/use-page-title";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  usePageTitle({
    title: t("pages.notfound.title"),
    description: t("pages.notfound.description"),
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notfound.message")}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t("notfound.returnHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
