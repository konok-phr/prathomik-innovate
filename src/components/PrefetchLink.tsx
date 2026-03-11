import { Link as RouterLink, LinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { prefetchRoute } from "@/hooks/usePrefetch";

const PrefetchLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, onMouseEnter, ...props }, ref) => {
    const path = typeof to === "string" ? to : to.pathname || "";

    return (
      <RouterLink
        ref={ref}
        to={to}
        onMouseEnter={(e) => {
          prefetchRoute(path);
          onMouseEnter?.(e);
        }}
        {...props}
      />
    );
  }
);

PrefetchLink.displayName = "PrefetchLink";

export default PrefetchLink;
