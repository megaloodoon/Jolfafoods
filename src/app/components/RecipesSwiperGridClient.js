"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const SUFFIX_MAP = { en: "En", ar: "Ar", fr: "Fr", ru: "Ru", fa: "Fa" };

// دیکشنری ترجمه‌ها
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

  // تقسیم‌بندی رسپی‌ها به صفحات ۶ تایی (برای نمایش ۳ در ۲ در دسکتاپ)
  const perSlide = 6;
  const pages = [];
  for (let i = 0; i < recipes.length; i += perSlide) {
    pages.push(recipes.slice(i, i + perSlide));
  }

  return (
    <div
      className="w-full flex flex-col items-center bg-[#f7f8fa] "
      style={{
        backgroundImage:
          "url('/Image/New/Backgrounds/LatestProducts-pattern-background3.svg')",
        backgroundSize:
          "50%" /* این مقدار را می‌توانید به درصد یا پیکسل مثل 300px تغییر دهید */,
      }}
    >
      {/* 1. بخش تصویر بنر (Hero Image) تمام عرض */}
      <div className="w-full relative">
        <img
          src="/Image/New/Friendly.png" // مسیر عکس بنر اصلی
          alt={t.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 2. بخش محتوا و پس‌زمینه پترن */}
      <div className="relative w-full py-12 md:py-16 lg:py-20 flex-grow">
        {/* لایه پترن پس‌زمینه */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'url("/Image/New/Backgrounds/pattern.png")', // مسیر عکس پترن خطی (doodle)
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* کانتینر اصلی محتوا */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          {/* سرتیتر */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#183f8b] mb-10 md:mb-14">
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
                {/* گرید کارت‌ها: موبایل 1، تبلت 2، دسکتاپ 3 ستون */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                  {page.map((r) => {
                    const slug = r.slug || `recipe-${r.id}`;
                    const suf = SUFFIX_MAP[locale] || "";
                    const title =
                      (suf && r[`title${suf}`]) || r.title || r.titleEn || "";

                    return (
                      // طراحی دقیق کارت مطابق عکس
                      <div
                        key={slug}
                        className="bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)]"
                      >
                        {/* کادر تصویر رسپی (با حاشیه سفید داخل کارت) */}
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

                        {/* عنوان رسپی */}
                        <h3 className="text-lg md:text-xl font-bold text-[#183f8b] mb-6 text-center flex-grow">
                          {title}
                        </h3>

                        {/* دکمه مشاهده بیشتر */}
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

      {/* استایل‌های اختصاصی نقطه‌های اسلایدر (دقیقاً مشابه عکس) */}
      <style jsx global>{`
        .recipes-swiper .swiper-pagination-bullets {
          bottom: 0px !important;
        }
        .recipes-swiper .swiper-pagination-bullet {
          background-color: #4b5563; /* رنگ خاکستری تیره */
          opacity: 0.4;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .recipes-swiper .swiper-pagination-bullet-active {
          background-color: #374151; /* رنگ تیره‌تر برای حالت فعال */
          opacity: 0.9;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
