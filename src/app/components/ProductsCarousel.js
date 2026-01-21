import React from "react";
import { getAllProducts } from "@/app/lib/cheeseData";
import ProductsCarouselClient from "./ProductsCarouselClient";

export default async function ProductsCarousel({ limit = 8, visible = 4, locale = "fa" }) {
  const products = await getAllProducts();
  const suffixMap = { fa: "Fa", en: "En", ar: "Ar", fr: "Fr", ru: "Ru" };
  const suf = suffixMap[locale] || "";

  const items = (products || [])
    .map((p) => {
      const title =
        (suf && (p[`title${suf}`] || p[`name${suf}`])) ||
        p.title ||
        p.name ||
        p.titleFa ||
        p.titleEn ||
        "";
      const image = p.image || p.thumbnail || p.url || "";
      return {
        id: p.id ?? p._id ?? p.slug ?? Math.random().toString(36).slice(2, 9),
        title,
        image,
      };
    });

  return <ProductsCarouselClient products={items} visible={visible} />;
}
