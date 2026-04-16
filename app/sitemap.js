import { PRODUCTS } from "@/lib/products";

const BASE_URL = "https://tma-holding.net";

export default function sitemap() {
  const now = new Date().toISOString();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/a-propos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/boutique", priority: 0.9, changeFrequency: "weekly" },
    { path: "/realisations", priority: 0.8, changeFrequency: "weekly" },
    { path: "/devis", priority: 0.9, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  ];

  const products = PRODUCTS.map((p) => ({
    path: `/boutique/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...routes, ...products].map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
