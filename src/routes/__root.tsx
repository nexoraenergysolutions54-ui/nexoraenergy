import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteSplash } from "@/components/SiteSplash";
import splashCss from "@/components/site-splash.css?inline";
import { SPLASH_BOOTSTRAP } from "@/lib/site-splash";

import { canonicalUrl, seoPages, type SeoRoutePath } from "@/lib/seo";

import appCss from "../styles.css?url";
import interFont from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";
import displayFont from "@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2?url";

const siteUrl = "https://www.nexoraqa.com";
const defaultDescription =
  "Nexora Energy Solutions delivers engineering, procurement, maintenance and operational support for Qatar and GCC energy infrastructure.";
const defaultOgImage = `${siteUrl}/og-nexora-energy.jpg`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nexora Energy Solutions" },
      { name: "application-name", content: "Nexora Energy Solutions" },
      { name: "theme-color", content: "#071b2d" },
      {
        name: "description",
        content: defaultDescription,
      },
      { property: "og:site_name", content: "Nexora Energy Solutions" },
      { property: "og:title", content: "Nexora Energy Solutions" },
      { property: "og:description", content: defaultDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: defaultOgImage },
      { property: "og:image:secure_url", content: defaultOgImage },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Nexora Energy Solutions industrial project support" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nexora Energy Solutions" },
      { name: "twitter:description", content: defaultDescription },
      { name: "twitter:image", content: defaultOgImage },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "Nexora AI summary" },
      { rel: "stylesheet", href: appCss },
      { rel: "preload", href: interFont, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      {
        rel: "preload",
        href: displayFont,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const path = (pathname.replace(/\/+$/, "") || "/") as SeoRoutePath;
  const canonical = seoPages[path] ? canonicalUrl(path) : undefined;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: splashCss }} />
        <script dangerouslySetInnerHTML={{ __html: SPLASH_BOOTSTRAP }} />
        {/*
         * og:image injected BEFORE HeadContent because TanStack Start / React 19
         * silently drops meta[property] tags that appear after the HeadContent flush.
         */}
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:image:secure_url" content={defaultOgImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Nexora Energy Solutions - Qatar and GCC Technical Manpower"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOgImage} />
        <HeadContent />
        {canonical && <link rel="canonical" href={canonical} />}
      </head>
      <body>
        <SiteSplash />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
