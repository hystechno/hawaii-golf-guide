export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/","/_next/"] }],
    sitemap: "https://hawaiigolf.guide/sitemap.xml",
    host: "https://hawaiigolf.guide",
  };
}
