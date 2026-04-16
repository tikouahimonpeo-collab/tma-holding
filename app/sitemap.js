import { PRODUCTS } from "@/lib/products";
import { ARTICLES } from "@/lib/articles";

const BASE_URL = "https://tma-holding.net";

export default function sitemap() {
  const now = new Date().toISOString();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/a-propos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/boutique", priority: 0.9, changeFrequency: "weekly" },
    { path: "/realisations", priority: 0.8, changeFrequency: "weekly" },
    { path: "/devis", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  ];

  const products = PRODUCTS.map((p) => ({
    path: `/boutique/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const articles = ARTICLES.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: a.date,
  }));

  return [...routes, ...products, ...articles].map(
    ({ path, priority, changeFrequency, lastModified }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: lastModified || now,
      changeFrequency,
      priority,
    })
  );
}
