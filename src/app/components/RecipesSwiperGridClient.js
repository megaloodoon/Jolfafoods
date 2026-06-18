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
      className="w-full flex flex-col items-center bg-white"
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

      {/* 2. بخش محتوا */}
      <div className="relative z-10 w-full pb-12 flex-grow -mt-40 xs:-mt-24 sm:-mt-44 md:-mt-56 lg:-mt-[380px] xl:-mt-[450px] xxlg:-mt-[520px] 2xl:-mt-[650px] xxxlg:-mt-[750px]">
        {/* لایه پترن پس‌زمینه */}
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
          {/* سرتیتر */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#183f8b] mb-10 md:mb-14 drop-shadow-md bg-white/70 w-fit mx-auto px-8 py-3 rounded-2xl backdrop-blur-md border border-gray-200">
            {t.title}
          </h2>

          {/* اسلایدر */}
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            className="w-full pb-20 recipes-swiper"
          >
            {pages.map((page, idx) => (
              <SwiperSlide key={idx} className="py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                  {page.map((r) => {
                    const slug = r.slug || `recipe-${r.id}`;
                    const suf = SUFFIX_MAP[locale] || "";
                    const title =
                      (suf && r[`title${suf}`]) || r.title || r.titleEn || "";

                    return (
                      <div
                        key={slug}
                        // --- تغییر در این خط: استفاده از border-gray-200 و سایه پایه قوی‌تر برای تمایز از پس‌زمینه سفید ---
                        className="group relative bg-white/95 backdrop-blur-xl border border-gray-200 rounded-[2rem] p-5 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(24,63,139,0.2)] hover:border-[#183f8b]/20"
                      >
                        {/* --- بخش تصویر --- */}
                        <div className="w-full aspect-[4/3] relative mb-5 rounded-2xl overflow-hidden bg-gray-100">
                          {r.thumbnail || r.image ? (
                            <img
                              src={r.thumbnail || r.image}
                              alt={title}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                              بدون تصویر
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* --- عنوان --- */}
                        <h3 className="text-lg md:text-xl font-extrabold text-[#183f8b] mb-6 text-center flex-grow transition-colors duration-300 group-hover:text-[#fbb03b] px-2">
                          {title}
                        </h3>

                        {/* --- دکمه --- */}
                        <div className="flex justify-center w-full pb-2">
                          <Link
                            href={`/pages/${locale}/Doostane-ba-Jolfa/recipes/${slug}`}
                            className="bg-gradient-to-r from-[#fbb03b] to-[#f39c12] hover:from-[#f39c12] hover:to-[#e67e22] text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-[0_4px_15px_-3px_rgba(251,176,59,0.4)] hover:shadow-[0_8px_25px_-5px_rgba(251,176,59,0.6)] transform group-hover:-translate-y-1 text-sm md:text-base inline-block"
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
          background-color: #cbd5e1;
          opacity: 0.8;
          width: 8px;
          height: 8px;
          margin: 0 6px !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 10px;
        }
        .recipes-swiper .swiper-pagination-bullet-active {
          background-color: #183f8b;
          opacity: 1;
          width: 24px;
          background-image: linear-gradient(to right, #183f8b, #3b82f6);
        }
      `}</style>
    </div>
  );
}
