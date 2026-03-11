import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = "https://prathomik.com";
const DEFAULT_TITLE = "Prathomik — Custom Software, AI/ML & Cloud Solutions";
const DEFAULT_DESC = "Prathomik builds intelligent software solutions — custom web & mobile apps, AI/ML systems, and scalable cloud architecture for businesses worldwide.";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEOHead = ({
  title,
  description = DEFAULT_DESC,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  jsonLd,
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | Prathomik` : DEFAULT_TITLE;
  const url = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // JSON-LD
    const ldId = "seo-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    const ldData = jsonLd || {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Prathomik",
      url: BASE_URL,
      logo: `${BASE_URL}/favicon.ico`,
      description: DEFAULT_DESC,
      sameAs: [
        "https://github.com/prathomik",
        "https://linkedin.com/company/prathomik",
      ],
    };
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldData);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [fullTitle, description, url, type, image, jsonLd]);

  return null;
};

export default SEOHead;
