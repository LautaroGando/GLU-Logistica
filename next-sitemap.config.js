/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.glulogistica.com.ar",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/admin/*", "/private/*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/"],
      },
    ],
  },
  additionalPaths: async () => [
    { loc: "/", changefreq: "monthly", priority: 1 },
    { loc: "/warehouse", changefreq: "monthly", priority: 0.8 },
    { loc: "/logistics-services", changefreq: "monthly", priority: 0.8 },
    { loc: "/payment-methods", changefreq: "monthly", priority: 0.8 },
    { loc: "/questions", changefreq: "monthly", priority: 0.8 },
  ],
};
