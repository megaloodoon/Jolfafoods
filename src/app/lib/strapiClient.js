// simple helper to fetch content from Strapi
export async function fetchFromStrapi(endpoint, options = {}) {
  const base = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!base) throw new Error("NEXT_PUBLIC_STRAPI_API_URL not set");
  const url = `${base.replace(/\/$/, "")}/${endpoint}`;
  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi request failed: ${res.status} ${text}`);
  }
  return res.json();
}

export function buildLocalizedEndpoint(collection, locale) {
  // user will provide links later; helper composes a common pattern
  // Example: 'articles?_locale=en' or 'products'
  if (!locale) return `${collection}`;
  return `${collection}?_locale=${locale}`;
}
