import fs from "fs/promises";
import path from "path";

const dbPath = path.join(process.cwd(), "data/db.json");

async function readLocalData() {
  const data = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(data);
}

async function readLocalProducts() {
  const data = await readLocalData();
  return data.products || [];
}

async function fetchFromStrapi(endpoint) {
  const base = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!base) return null;
  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/${endpoint}`);
    if (!res.ok) throw new Error("Strapi fetch failed");
    const json = await res.json();
    return json;
  } catch (err) {
    console.warn("Strapi fetch error:", err.message);
    return null;
  }
}

export async function getAllProducts() {
  // اگر آدرس Strapi تنظیم شده باشد، از آن استفاده کن (انتظار آرایه در فیلد data یا مستقیم)
  const remote = await fetchFromStrapi("products");
  if (remote) {
    // ممکن است Strapi خروجی متفاوت داشته باشد؛ سعی می‌کنیم انعطاف‌پذیر باشیم
    if (Array.isArray(remote)) return remote;
    if (Array.isArray(remote.data)) return remote.data;
    return remote.products || remote;
  }

  return readLocalProducts();
}

export async function getProductById(id) {
  const products = await getAllProducts();
  return products.find((p) => p.id === Number(id) || String(p.id) === String(id));
}

export async function getBanners(locale = "fa") {
  const remote = await fetchFromStrapi(`banners?_locale=${locale}`);
  if (remote) {
    if (Array.isArray(remote)) return remote;
    if (Array.isArray(remote.data)) return remote.data;
    return remote.banners || remote;
  }

  const data = await readLocalData();
  return data[`banners_${locale}`] || [];
}

export async function getPosts(locale = "fa") {
  const remote = await fetchFromStrapi(`posts?_locale=${locale}`);
  if (remote) {
    if (Array.isArray(remote)) return remote;
    if (Array.isArray(remote.data)) return remote.data;
    return remote.posts || remote;
  }

  const data = await readLocalData();
  return data[`posts_${locale}`] || [];
}

export async function getArticles(locale = "fa") {
  const remote = await fetchFromStrapi(`articles?_locale=${locale}`);
  if (remote) {
    if (Array.isArray(remote)) return remote;
    if (Array.isArray(remote.data)) return remote.data;
    return remote.articles || remote;
  }

  const data = await readLocalData();
  return data[`articles_${locale}`] || [];
}

export async function getArticleById(locale = "fa", id) {
  const articles = await getArticles(locale);
  return articles.find((a) => String(a.id) === String(id));
}

export async function getRecipes(locale = "fa") {
  const remote = await fetchFromStrapi(`recipes?_locale=${locale}`);
  if (remote) {
    if (Array.isArray(remote)) return remote;
    if (Array.isArray(remote.data)) return remote.data;
    return remote.recipes || remote;
  }

  const data = await readLocalData();
  const items = data.recipes || [];
  // attempt to localize title/summary where possible — prefer the locale-specific field, then generic
  const suffixMap = { fa: "Fa", en: "En", ar: "Ar", fr: "Fr", ru: "Ru" };
  const suf = suffixMap[locale] || "";
  return items.map((r) => {
    const title = (suf && r[`title${suf}`]) || r.title || "";
    const summary = (suf && r[`summary${suf}`]) || r.summary || "";
    return {
      id: r.id,
      slug: r.slug,
      title,
      summary,
      image: r.image || r.thumbnail || "",
    };
  });
}
