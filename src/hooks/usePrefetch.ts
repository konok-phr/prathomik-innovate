import { useCallback } from "react";

// Map of route prefixes to their lazy import functions
const routeImports: Record<string, () => Promise<unknown>> = {
  "/products/": () => import("@/pages/ProductDetail"),
  "/news/": () => import("@/pages/NewsDetail"),
  "/news": () => import("@/pages/AllNews"),
  "/careers": () => import("@/pages/Careers"),
  "/testimonials": () => import("@/pages/AllTestimonials"),
};

const prefetchedRoutes = new Set<string>();

export const prefetchRoute = (path: string) => {
  if (prefetchedRoutes.has(path)) return;

  for (const [prefix, importFn] of Object.entries(routeImports)) {
    if (path === prefix || path.startsWith(prefix)) {
      prefetchedRoutes.add(path);
      importFn();
      return;
    }
  }
};

export const usePrefetch = () => {
  const onMouseEnter = useCallback((path: string) => {
    prefetchRoute(path);
  }, []);

  return { onMouseEnter };
};
