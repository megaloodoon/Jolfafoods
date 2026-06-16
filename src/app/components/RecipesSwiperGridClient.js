"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const SUFFIX_MAP = { en: "En", ar: "Ar", fr: "Fr", ru: "Ru", fa: "Fa" };

const TRANSLATIONS = {
  fa: { title: "ایده های خوشمزه با محصولات جلفا", viewMore: "مشاهده بیشتر" },
  en: { title: "Delicious Ideas with Jolfa Products", viewMore: "View More" },
  ar: { title: "أفكار لذيذة مع منتجات جلفا", viewMore: "شاهد المزيد" },
  fr: {
    title: "Idées délicieuses avec les produits Jolfa",
    viewMore: "Voir plus",
  },
  ru: { title: "Вкусные идеи с продуктами Jolfa", viewMore: "Показать больше" },
};

export default function RecipesSwiperGridClient({
  recipes = [],
  locale = "fa",
}) {
  if (!recipes || recipes.length === 0) return null;

  const t = TRANSLATIONS[locale] || TRANSLATIONS.fa;

  const perSlide = 6;
  const pages = [];
  for (let i = 0; i < recipes.length; i += perSlide) {
    pages.push(recipes.slice(i, i + perSlide));
  }

  return (
    <div
      className="w-full flex flex-col items-center bg-[#f7f8fa]"
      style={{
        backgroundImage:
          "url('/Image/New/Backgrounds/LatestProducts-pattern-background2.svg')",
        backgroundSize: "50%",
      }}
    >
      {/* 1. بخش تصویر بنر */}
      <div className="w-full relative">
        <img
          src="/Image/New/recipes.png"
          alt={t.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 2. بخش محتوا 
          تغییرات: اضافه شدن z-10 و مارجین منفی (-mt-24 تا -mt-64) برای بالا کشیدن محتوا روی عکس
      */}
      <div className="relative z-10 w-full pb-12 flex-grow -mt-40 xs:-mt-24 sm:-mt-44 md:-mt-56 lg:-mt-80 xl:-mt-[450px] xxlg:-mt-[500px] 2xl:-mt-[550px]">
        {/* لایه پترن پس‌زمینه (فقط برای بخش محتوا) */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'url("/Image/New/Backgrounds/LatestProducts-pattern-background1.png")',
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* کانتینر اصلی محتوا */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-20">
          {/* سرتیتر: استفاده از رنگ سفید یا سایه برای خوانایی بهتر روی عکس بنر */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#183f8b] mb-10 md:mb-14 drop-shadow-md bg-white/60 w-fit mx-auto px-6 py-2 rounded-2xl backdrop-blur-sm">
            {t.title}
          </h2>

          {/* اسلایدر */}
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            className="w-full pb-16 recipes-swiper"
          >
            {pages.map((page, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-4">
                  {page.map((r) => {
                    const slug = r.slug || `recipe-${r.id}`;
                    const suf = SUFFIX_MAP[locale] || "";
                    const title =
                      (suf && r[`title${suf}`]) || r.title || r.titleEn || "";

                    return (
                      <div
                        key={slug}
                        className="bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)]"
                      >
                        <div className="w-full aspect-[4/3] relative mb-4 rounded-lg overflow-hidden bg-gray-100">
                          {r.thumbnail || r.image ? (
                            <img
                              src={r.thumbnail || r.image}
                              alt={title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                              بدون تصویر
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-[#183f8b] mb-6 text-center flex-grow">
                          {title}
                        </h3>

                        <div className="flex justify-center w-full pb-2">
                          <Link
                            href={`/pages/${locale}/Doostane-ba-Jolfa/recipes/${slug}`}
                            className="bg-[#fbb03b] hover:bg-[#e09b30] text-white font-semibold py-2 px-8 rounded-full transition-colors duration-300 text-sm md:text-base inline-block"
                          >
                            {t.viewMore}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .recipes-swiper .swiper-pagination-bullets {
          bottom: 0px !important;
        }
        .recipes-swiper .swiper-pagination-bullet {
          background-color: #4b5563;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .recipes-swiper .swiper-pagination-bullet-active {
          background-color: #374151;
          opacity: 0.9;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
