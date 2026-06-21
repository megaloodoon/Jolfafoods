"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticlesListClient({
  articles = [],
  locale = "en",
  basePath = "/pages/en/Articles",
}) {
  const results = articles;

  // ترجمه‌های عنوان صفحه
  const pageTitles = {
    fa: "مقاله ها",
    en: "Articles",
    ar: "المقالات",
    fr: "Articles",
    ru: "Статьи",
  };

  // ترجمه‌های دکمه "مشاهده بیشتر"
  const buttonTexts = {
    fa: "مشاهده بیشتر",
    en: "Read More",
    ar: "شاهد المزيد",
    fr: "Voir plus",
    ru: "Подробнее",
  };

  // انیمیشن برای نمایش کارت‌ها
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-white min-h-screen pb-20 font-kalame relative">
      {/* بخش هدر (کادر آبی + عکس + پترن) */}
      <div className="relative w-full">
        {/* کادر آبی پس‌زمینه که قسمت بالایی را کاور می‌کند */}
        {/* می‌توانید درصد ارتفاع (h-[65%]) را بسته به نیاز خود تغییر دهید */}
        {/* کادر آبی پس‌زمینه که قسمت بالایی را کاور می‌کند */}
        <div className="absolute top-0 left-0 w-full h-[65%] sm:h-[75%] bg-[#a4c7f5] z-0">
          {/* لبه پایینی که به خاطر قرار گرفتن داخل دایو بالا، با top-full دقیقاً به زیر آن می‌چسبد */}
          <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_white.svg')] bg-repeat-x bg-top z-10 top-full -mt-1 bg-[length:auto_101%] border-none outline-none"></div>
        </div>

        {/* کانتینر محتوای هدر */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pt-16 px-6 sm:px-10 pb-8">
          {/* کانتینر عکس برای موقعیت‌دهی دقیق پترن */}
          <div className="relative w-full mx-auto">
            {/* پترن گوشه راست پایین */}
            {/* مقادیر right و bottom را می‌توانید برای جابجایی دقیق پترن تنظیم کنید */}
            <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-20 h-20 sm:w-32 sm:h-32 z-0">
              <img
                src="/Image/New/Backgrounds/pattern.svg" // آدرس عکس پترن خود را اینجا قرار دهید
                alt="Pattern"
                className="w-full h-full object-contain opacity-90"
              />
            </div>

            {/* عکس اصلی (بدون برش خوردن) */}
            <img
              src="/Image/New/cheese-box-hero.png" // مسیر عکس هدر خود را جایگزین کنید
              alt="Articles Hero"
              // استفاده از object-contain و h-auto باعث می‌شود عکس در هیچ سایزی بریده نشود
              className="relative z-10 w-full h-auto max-h-[70vh] object-contain rounded-xl drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* عنوان صفحه */}
      <div className="text-center mb-10 mt-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-kalame text-[#153B75]">
          {pageTitles[locale] || "مقاله ها"}
        </h2>
      </div>

      {/* گرید مقاله‌ها */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 bg-gradient-to-b from-white to-[#fff0f0e9]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {results.map((a, index) => {
            // انتخاب زبان
            let title = a.title || "";
            let summary = a.summary || "";
            if (locale === "fa") {
              title = a.titleFa || a.title || "";
              summary = a.summaryFa || a.summary || "";
            } else if (locale === "en") {
              title = a.titleEn || a.title || "";
              summary = a.summaryEn || a.summary || "";
            } else if (locale === "ar") {
              title = a.titleAr || a.title || "";
              summary = a.summaryAr || a.summary || "";
            } else if (locale === "fr") {
              title = a.titleFr || a.title || "";
              summary = a.summaryFr || a.summary || "";
            } else if (locale === "ru") {
              title = a.titleRu || a.title || "";
              summary = a.summaryRu || a.summary || "";
            }

            return (
              <motion.div
                key={a.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="h-full flex"
              >
                <Link
                  href={`${basePath}/${a.id}`}
                  className="w-full flex flex-col"
                >
                  {/* بک‌گراند آبی روشن کارت */}
                  <div className="bg-[#a4c7f5] p-4 flex flex-col h-full rounded-sm hover:shadow-xl transition-all duration-300">
                    {/* تصویر مقاله */}
                    {a.image && (
                      <div className="w-full overflow-hidden rounded-sm mb-4">
                        <img
                          src={a.image}
                          alt={title}
                          className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>
                    )}

                    {/* عنوان مقاله */}
                    <div className="flex-grow flex flex-col items-center justify-start px-2">
                      <h3 className="text-[#153B75] text-center font-bold text-lg md:text-[1.1rem] leading-snug mb-4 line-clamp-3">
                        {title}
                      </h3>
                    </div>

                    {/* دکمه نارنجی مشاهده بیشتر */}
                    <div className="w-full flex justify-center mt-auto pt-2">
                      <button className="bg-[#FFB03A] text-white font-medium px-6 py-1.5 rounded-md hover:bg-[#F29F29] transition-colors text-sm">
                        {buttonTexts[locale] || "مشاهده بیشتر"}
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
