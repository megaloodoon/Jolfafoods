import fs from "fs/promises";
import path from "path";

const dbPath = path.join(process.cwd(), "data/db.json");

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const q = (url.searchParams.get("q") || "").toLowerCase();
    const locale = url.searchParams.get("locale") || "fa";

    const raw = await fs.readFile(dbPath, "utf-8");
    const data = JSON.parse(raw);

    const locales = ["fa","en","ar","fr","ru"];
    // Merge articles/posts across all locales so search covers every language regardless of UI locale
    const articlesMap = new Map();
    for (const loc of locales) {
      const arr = data[`articles_${loc}`] || [];
      for (const a of arr) {
        const id = a.id ?? a.slug ?? `${loc}-${Math.random().toString(36).slice(2,8)}`;
        const existing = articlesMap.get(String(id)) || { id, image: a.image || "", titles: {}, descriptions: {}, contents: {} };
        if (a.image) existing.image = existing.image || a.image;
        const suffix = loc === 'fa' ? '' : loc.charAt(0).toUpperCase() + loc.slice(1);
        // collect possible fields
        if (a.title) existing.titles['default'] = existing.titles['default'] || a.title;
        if (a[`title${suffix}`]) existing.titles[suffix] = a[`title${suffix}`];
        if (a.titleFa) existing.titles['Fa'] = existing.titles['Fa'] || a.titleFa;
        if (a.titleEn) existing.titles['En'] = existing.titles['En'] || a.titleEn;
        if (a.summary) existing.descriptions['default'] = existing.descriptions['default'] || a.summary || a.description;
        if (a.description) existing.descriptions['default'] = existing.descriptions['default'] || a.description;
        if (a[`summary${suffix}`]) existing.descriptions[suffix] = a[`summary${suffix}`];
        if (a.summaryFa) existing.descriptions['Fa'] = existing.descriptions['Fa'] || a.summaryFa;
        if (a.summaryEn) existing.descriptions['En'] = existing.descriptions['En'] || a.summaryEn;
        if (a.content) existing.contents['default'] = existing.contents['default'] || a.content;
        if (a.contentFa) existing.contents['Fa'] = existing.contents['Fa'] || a.contentFa;
        if (a.contentEn) existing.contents['En'] = existing.contents['En'] || a.contentEn;
        existing.slug = existing.slug || a.slug || id;
        articlesMap.set(String(id), existing);
      }
    }
    const articles = Array.from(articlesMap.values());
    const postsMap = new Map();
    for (const loc of locales) {
      const arr = data[`posts_${loc}`] || [];
      for (const p of arr) {
        const id = p.id ?? p.slug ?? `${loc}-${Math.random().toString(36).slice(2,8)}`;
        const existing = postsMap.get(String(id)) || { id, image: p.image || "", titles: {}, descriptions: {} };
        const suffix = loc === 'fa' ? '' : loc.charAt(0).toUpperCase() + loc.slice(1);
        if (p.title) existing.titles['default'] = existing.titles['default'] || p.title;
        if (p[`title${suffix}`]) existing.titles[suffix] = p[`title${suffix}`];
        if (p.titleFa) existing.titles['Fa'] = existing.titles['Fa'] || p.titleFa;
        if (p.titleEn) existing.titles['En'] = existing.titles['En'] || p.titleEn;
        if (p.summary) existing.descriptions['default'] = existing.descriptions['default'] || p.summary || p.description;
        if (p.description) existing.descriptions['default'] = existing.descriptions['default'] || p.description;
        if (p[`summary${suffix}`]) existing.descriptions[suffix] = p[`summary${suffix}`];
        if (p.summaryFa) existing.descriptions['Fa'] = existing.descriptions['Fa'] || p.summaryFa;
        if (p.summaryEn) existing.descriptions['En'] = existing.descriptions['En'] || p.summaryEn;
        existing.slug = existing.slug || p.slug || id;
        postsMap.set(String(id), existing);
      }
    }
    const posts = Array.from(postsMap.values());
    const products = data.products || [];
    const recipes = data.recipes || [];

    const normalize = (s) => (s || "").toString().toLowerCase();

    const pool = [];

    const localeSuffixMap = { fa: "Fa", en: "En", ar: "Ar", fr: "Fr", ru: "Ru" };
    function getLocalized(obj, field, locale) {
      const suf = localeSuffixMap[locale] || "";
      // obj may be merged structure with `titles`/`descriptions` buckets
      if (obj.titles) {
        if (suf && obj.titles[suf]) return obj.titles[suf];
        if (locale === 'fa' && obj.titles['Fa']) return obj.titles['Fa'];
        if (obj.titles['default']) return obj.titles['default'];
        // fallback to any available
        const keys = Object.keys(obj.titles);
        return keys.length ? obj.titles[keys[0]] : "";
      }
      if (suf && obj[`${field}${suf}`]) return obj[`${field}${suf}`];
      if (obj[field]) return obj[field];
      if (obj[`${field}Fa`]) return obj[`${field}Fa`];
      if (obj[`${field}En`]) return obj[`${field}En`];
      return "";
    }

      articles.forEach((a) => {
        const title = getLocalized(a, 'title', locale) || a.titles?.default || Object.values(a.titles || {})[0] || '';
        const description = (a.descriptions && (a.descriptions[localeSuffixMap[locale]] || a.descriptions['default'])) || '';
        const searchText = [
          title,
          description,
          ...(Object.values(a.titles || {})),
          ...(Object.values(a.descriptions || {})),
          ...(Object.values(a.contents || {})),
        ].join(' ').toLowerCase();
        pool.push({ type: "article", id: a.id, title, description: description || '', image: a.image, url: `/pages/${locale}/Doostane-ba-Jolfa/Articles/${a.slug || a.id}`, searchText });
      });

    posts.forEach((p) => {
      const title = getLocalized(p, 'title', locale) || p.titles?.default || Object.values(p.titles || {})[0] || '';
      const description = (p.descriptions && (p.descriptions[localeSuffixMap[locale]] || p.descriptions['default'])) || '';
      const searchText = [title, description, ...(Object.values(p.titles || {})), ...(Object.values(p.descriptions || {}))].join(' ').toLowerCase();
      pool.push({ type: "post", id: p.id, title, description: description || '', image: p.image, url: `/pages/${locale}/posts/${p.slug || p.id}`, searchText });
    });

    products.forEach((p) => {
      const title = getLocalized(p, 'title', locale) || p.title || p.name;
      const desc = getLocalized(p, 'description', locale) || p.description || "";
      const searchText = [title, desc, p.titleFa || '', p.titleEn || ''].join(' ').toLowerCase();
      pool.push({ type: "product", id: p.id, title: title, description: desc, image: p.image, url: `/pages/${locale}/products/${p.id}`, searchText });
    });

    recipes.forEach((r) => {
      const title = getLocalized(r, 'title', locale) || r.title || r.titleFa || r.titleEn || r.slug || "Recipe";
      const desc = getLocalized(r, 'summary', locale) || getLocalized(r, 'description', locale) || r.summary || r.description || "";
      const slug = r.slug || r.id;
      const searchText = [title, desc, r.titleFa || '', r.titleEn || '', r.summaryFa || '', r.summaryEn || ''].join(' ').toLowerCase();
      pool.push({ type: "recipe", id: r.id || slug, title: title, description: desc, image: r.image || r.thumbnail || "", url: `/pages/${locale}/Doostane-ba-Jolfa/recipes/${slug}`, searchText });
    });

    if (!q) {
      return new Response(JSON.stringify(pool.slice(0, 40)), { status: 200 });
    }

    const filtered = pool.filter((item) => {
      if (item.searchText) return item.searchText.includes(q);
      return normalize(item.title).includes(q) || normalize(item.description).includes(q);
    });

    return new Response(JSON.stringify(filtered.slice(0, 40)), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
