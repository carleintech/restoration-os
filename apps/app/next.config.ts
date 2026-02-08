import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  turbopack: {}, // Silence Turbopack warning for webpack-based PWA config
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,

  // IMPORTANT: disable SW in dev to avoid caching headaches
  disable: process.env.NODE_ENV === "development",

  // Runtime caching rules (Workbox)
  runtimeCaching: [
    // Cache Next.js static assets aggressively
    {
      urlPattern: /^https?.*\.(?:js|css|woff2|png|jpg|jpeg|svg|webp|ico)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },

    // Cache pages navigation (HTML) as network-first (offline fallback)
    {
      urlPattern: ({ request }) => request.destination === "document",
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
      },
    },

    // Cache API GET responses carefully (NETWORK FIRST)
    // This allows "last seen" data offline.
    {
      urlPattern: ({ url, request }) => {
        // Only cache your API domain + GET requests
        const apiBase = process.env.NEXT_PUBLIC_API_URL || "";
        const apiHost = apiBase.replace(/^https?:\/\//, "");
        return request.method === "GET" && apiHost && url.host === apiHost;
      },
      handler: "NetworkFirst",
      options: {
        cacheName: "api-get",
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 6 }, // 6 hours
      },
    },
  ],
})(nextConfig);

