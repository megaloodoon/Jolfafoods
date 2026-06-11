"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image"; // در صورت نیاز می‌توانید از این کامپوننت استفاده کنید

const SUFFIX_MAP = { en: "En", ar: "Ar", fr: "Fr", ru: "Ru", fa: "Fa" };

// دیکشنری ترجمه‌ها برای سرفصل و دکمه
const TRANSLATIONS = {
  fa: {
    title: "ایده های خوشمزه با محصولات جلفا",
    viewMore: "مشاهده بیشتر",
  },
  en: {
    title: "Delicious Ideas with Jolfa Products",
    viewMore: "View More",
  },
  ar: {
    title: "أفكار لذيذة مع منتجات جلفا",
    viewMore: "شاهد المزيد",
  },
  fr: {
    title: "Idées délicieuses avec les produits Jolfa",
    viewMore: "Voir plus",
  },
  ru: {
    title: "Вкусные идеи с продуктами Jolfa",
    viewMore: "Показать больше",
  },
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
    <div className="w-full flex flex-col items-center">
      {/* بخش عکس بالای صفحه (Hero Image) کاملا ریسپانسیو */}
      <div className="w-full relative">
        <img
          src="/Image/New/Friendly.png" // مسیر عکس هیرو را اینجا وارد کنید
          alt={t?.title || "Hero Image"}
          // ارتفاع عکس برای موبایل، تبلت، لپ‌تاپ و مانیتورهای بزرگ کنترل شده است
          className="w-full h-auto object-cover max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px]"
        />
      </div>

      {/* بخش پایینی شامل بک‌گراند پترن، عنوان و اسلایدر کارت‌ها */}
      <div className="w-full bg-[#f3f4f6] relative py-12 md:py-16 lg:py-20 flex-grow">
        {/* پترن پس‌زمینه (آیکون‌های محو) */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url("/Image/New/Left.png")', // مسیر فایل پترن را اینجا بگذارید
            backgroundSize: "300px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* کانتینر اصلی: عرض صفحه در اینجا با max-w-[1400px] افزایش یافته است */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-[1400px] 2xl:max-w-[1600px] mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#183f8b] mb-12 lg:mb-16">
            {t?.title}
          </h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="w-full pb-20 recipes-swiper"
            spaceBetween={30}
            // می‌توانید breakpoint های سوایپر را هم اینجا اضافه کنید اگر نیاز بود
          >
            {pages.map((page, idx) => (
              <SwiperSlide key={idx}>
                {/* گرید ریسپانسیو: 1 ستون موبایل، 2 ستون تبلت، 3 ستون لپ‌تاپ/دسکتاپ */}
                {/* فاصله بین کارت‌ها (gap) در صفحه‌های بزرگتر بیشتر می‌شود */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                  {page.map((r) => {
                    const slug = r.slug || `recipe-${r.id}`;
                    const suf = SUFFIX_MAP[locale] || "";
                    const title =
                      (suf && r[`title${suf}`]) || r.title || r.titleEn || "";

                    return (
                      <div
                        key={slug}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                      >
                        <div className="w-full aspect-video relative mb-5 rounded-lg overflow-hidden">
                          {r.thumbnail || r.image ? (
                            <img
                              src={r.thumbnail || r.image}
                              alt={title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                              Image Placeholder
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#183f8b] mb-5 text-center flex-grow">
                          {title}
                        </h3>

                        <Link
                          href={`/pages/${locale}/Doostane-ba-Jolfa/recipes/${slug}`}
                          className="bg-[#fbb03b] hover:bg-[#e09b30] text-white font-medium py-2.5 px-8 md:px-10 lg:px-12 rounded-full transition-all duration-300 text-sm md:text-base w-fit"
                        >
                          {t?.viewMore}
                        </Link>
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
        .recipes-swiper .swiper-pagination-bullet {
          background-color: #6b7280;
          opacity: 0.6;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        .recipes-swiper .swiper-pagination-bullet-active {
          background-color: #183f8b; /* تغییر رنگ بولت فعال به رنگ سازمانی */
          opacity: 1;
          width: 24px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
