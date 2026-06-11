"use client"; // این خط برای کارکرد Swiper الزامی است

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ایمپورت استایل‌های Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecipeSlider({ items, locale }) {
  return (
    <>
      {/* استایل اختصاصی برای پایین بردن نقطه‌های پجینیشن */}
      <style>{`
        /* پدینگ کانتینر اصلی برای جا دادن فلش‌ها در کنار و نقطه‌ها در پایین */
        .recipeSwiper {
          padding-left: 60px !important;
          padding-right: 60px !important;
          padding-bottom: 80px !important; 
          padding-top: 40px !important;
        }

        /* انتقال نقطه‌های پجینیشن به پایین‌تر و بیرون از کارت‌ها */
        .recipeSwiper .swiper-pagination {
          bottom: 15px !important;
        }
        
        .recipeSwiper .swiper-pagination-bullet-active {
          background-color: #ffff; /* رنگ آبی برای نقطه فعال */
        }

        /* استایل فلش‌های نویگیشن */
        .recipeSwiper .swiper-button-next,
        .recipeSwiper .swiper-button-prev {
          display: none !important;
        }
        
        .recipeSwiper .swiper-button-next:hover,
        .recipeSwiper .swiper-button-prev:hover {
          background: #1d4ed8;
          transform: scale(1.1);
        }

        /* قرار دادن فلش‌ها در لبه‌های بیرونی کانتینر */
        .recipeSwiper .swiper-button-prev {
          left: 5px !important;
        }
        .recipeSwiper .swiper-button-next {
          right: 5px !important;
        }

        .recipeSwiper .swiper-button-next:after,
        .recipeSwiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: 900;
        }

        /* در موبایل فلش‌ها را مخفی می‌کنیم و پدینگ کنار را کم می‌کنیم */
        @media (max-width: 768px) {
          .recipeSwiper {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          .recipeSwiper .swiper-button-next,
          .recipeSwiper .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={55}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          360: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-20 pt-10 px-4 recipeSwiper" // پدینگ بالا و پایین برای دیده شدن افکت درخشش
      >
        {items.map((r) => (
          <SwiperSlide key={r.id} className="!h-auto flex py-4 px-2">
            {/* پدینگ (py-4) اضافه شد تا هنگام بزرگ‌نمایی در هاور، سایه کارت بریده نشود */}
            <article
              className="group w-full h-full bg-white dark:bg-[#1a1a1a] rounded-xl flex flex-col overflow-hidden
    border-[14px] border-white dark:border-gray-700 hover:border-[#fdb714] dark:hover:border-[#fdb714]
    shadow-md hover:shadow-2xl hover:shadow-[#fdb714]/30
    transform hover:scale-105 transition-all duration-300 ease-out"
            >
              {/* بخش تصویر با افکت زوم ملایم */}
              <div className="relative h-48 w-full overflow-hidden">
                {r.image && (
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                {/* یک هاله ملایم روی عکس که هنگام هاور ظاهر می‌شود */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5 flex flex-col flex-grow text-center">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-[#fdb714] transition-colors duration-300">
                  {r.title}
                </h3>

                <Link
                  href={`/pages/${locale}/Doostane-ba-Jolfa/recipes/${r.slug || r.id}`}
                  className="mt-auto mx-auto px-6 py-2 text-white dark:text-gray-900 bg-[#fdb714] hover:bg-[#e5a20e] 
          font-medium rounded-xl shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-300"
                >
                  {locale === "fa" || locale === "ar" ? "مشاهده" : "View"}
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
