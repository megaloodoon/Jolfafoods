"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const SUFFIX_MAP = { en: "En", ar: "Ar", fr: "Fr", ru: "Ru", fa: "Fa" };

export default function RecipesSwiperGridClient({
  recipes = [],
  locale = "en",
}) {
  if (!recipes || recipes.length === 0) return null;

  const perSlide = 9; // 3x3 grid
  const pages = [];
  for (let i = 0; i < recipes.length; i += perSlide) {
    pages.push(recipes.slice(i, i + perSlide));
  }

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="w-full"
    >
      {pages.map((page, idx) => (
        <SwiperSlide key={idx}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {page.map((r) => {
              const slug = r.slug || `recipe-${r.id}`;
              const suf = SUFFIX_MAP[locale] || "";
              const title =
                (suf && r[`title${suf}`]) || r.title || r.titleEn || "";
              const summary =
                (suf && r[`summary${suf}`]) || r.summary || r.summaryEn || "";

              return (
                <Link
                  key={slug}
                  href={`/pages/${locale}/recipes/${slug}`}
                  className="block"
                >
                  <div className="bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] rounded-lg p-3 border border-gray-100 dark:border-gray-800 shadow-sm h-full">
                    { (r.thumbnail || r.image) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={r.thumbnail || r.image}
                        alt={title}
                        className="w-full h-36 object-cover rounded-md mb-3"
                      />
                    ) : (
                      <div className="w-full h-36 bg-orange-100 rounded-md mb-3" />
                    )}

                    <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                      {title}
                    </h3>
                    {summary && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {summary}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
