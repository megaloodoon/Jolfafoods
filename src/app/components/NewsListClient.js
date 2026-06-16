"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TRANSLATIONS = {
  fa: { readMore: "مشاهده بیشتر" },
  en: { readMore: "Read More" },
  ar: { readMore: "اقرأ المزيد" },
  fr: { readMore: "Voir Plus" },
  ru: { readMore: "Подробнее" },
};

const SUFFIX_MAP = {
  fa: "fa",
  en: "en",
  ar: "ar",
  fr: "fr",
  ru: "ru",
};

export default function NewsListClient({ newsList, locale }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // تعداد خبر در هر صفحه بر اساس عکس (۳ ردیف)

  const suffix = SUFFIX_MAP[locale] || "fa";
  const t = TRANSLATIONS[locale] || TRANSLATIONS.fa;

  // محاسبه پجینیشن
  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const currentNews = newsList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* لیست اخبار */}
      <div className="flex flex-col gap-6">
        {currentNews.map((news, index) => {
          const title = news[`title_${suffix}`];
          const excerpt = news[`excerpt_${suffix}`];
          // در زبان‌های راست‌چین (fa, ar)، ایندکس زوج متن راست است. برای چپ‌چین برعکس می‌شود.
          const isRtl = locale === "fa" || locale === "ar";
          const isTextFirst = isRtl ? index % 2 === 0 : index % 2 !== 0;

          return (
            <div
              key={news.id}
              className="grid grid-cols-1 md:grid-cols-2 rounded-[1rem] overflow-hidden bg-[#e8f1ff] min-h-[300px]"
            >
              {/* بخش تصویر */}
              <div
                className={`relative h-64 md:h-auto ${
                  isTextFirst ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image
                  src={news.image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* بخش متن */}
              <div
                className={`relative p-8 md:p-12 flex flex-col justify-center ${
                  isTextFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                {/* واتر مارک پس زمینه (نام برند به صورت محو) */}
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-5 pointer-events-none select-none">
                  <div
                    className="transform -rotate-12 w-full h-full" // دادن ابعاد کامل
                    style={{
                      backgroundImage: "url('/Image/Jolfa-logo.png')",
                      backgroundSize: "100%", // یا مثلاً "300px"
                      backgroundRepeat: "no-repeat", // برای جلوگیری از تکرار عکس
                      backgroundPosition: "center", // برای وسط‌چین شدن عکس
                    }}
                  ></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 relative z-10">
                  {title}
                </h3>
                <p className="text-[#1e3a8a]/80 text-justify mb-8 relative z-10 line-clamp-3">
                  {excerpt}
                </p>
                <div className="mt-auto relative z-10">
                  <Link
                    href={`/pages/${locale}/Doostane-ba-Jolfa/News/${news.id}`}
                    className="inline-block bg-[#ffb800] hover:bg-[#e5a600] text-white font-bold py-2 px-6 rounded-full transition-colors"
                  >
                    {t.readMore}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* پجینیشن (نقطه‌ها) */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentPage === idx ? "bg-[#555555] scale-110" : "bg-[#999999]"
              }`}
              aria-label={`Page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
