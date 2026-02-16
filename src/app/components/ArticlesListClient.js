// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Masonry from "react-masonry-css";
// import { motion } from "framer-motion";

// import styles from "@/app/styles/articles.module.css";


// export default function ArticlesListClient({ articles = [], locale = "en", basePath = "/pages/en/Articles" }) {
//   const results = articles;
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const checkDark = () => {
//         setIsDark(document.documentElement.classList.contains("dark") || document.body.classList.contains("dark"));
//       };
//       checkDark();
//       const observer = new MutationObserver(checkDark);
//       observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
//       observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
//       return () => observer.disconnect();
//     }
//   }, []);

//   const breakpointCols = {
//     default: 3,
//     1100: 2,
//     700: 1,
//   };

//   return (
//     <section className={styles.articlesWrap}>
//       <div className={styles.headerRow}>
//         <div className={styles.count}>{results.length} {locale === "fa" ? "مورد" : locale === "ar" ? "نتيجة" : locale === "ru" ? "рез." : locale === "fr" ? "rés." : "results"}</div>
//       </div>

//       <Masonry breakpointCols={breakpointCols} className={styles.masonry} columnClassName={styles.column}>
//         {results.map((a) => {
//           let title = a.title || '';
//           let summary = a.summary || '';
//           if (locale === 'fa') {
//             title = a.titleFa || a.title || '';
//             summary = a.summaryFa || a.summary || '';
//           } else if (locale === 'en') {
//             title = a.titleEn || a.title || '';
//             summary = a.summaryEn || a.summary || '';
//           } else if (locale === 'ar') {
//             title = a.titleAr || a.title || '';
//             summary = a.summaryAr || a.summary || '';
//           } else if (locale === 'fr') {
//             title = a.titleFr || a.title || '';
//             summary = a.summaryFr || a.summary || '';
//           } else if (locale === 'ru') {
//             title = a.titleRu || a.title || '';
//             summary = a.summaryRu || a.summary || '';
//           }
//           return (
//             <motion.div
//               key={a.id}
//               className={isDark ? `${styles.card} ${styles.cardDark}` : styles.card}
//               whileHover={{ y: -6 }}
//               whileTap={{ scale: 0.995 }}
//               initial={{ opacity: 0, y: 6 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35 }}
//             >
//               <Link href={`${basePath}/${a.id}`} className={styles.cardLink}>
//                 {a.image && <img src={a.image} alt={title} className={styles.thumb} />}
//                 <div className={styles.cardContent}>
//                   <h3 className={styles.title}>{title}</h3>
//                   {summary && <p className={styles.desc}>{summary}</p>}
//                 </div>
//               </Link>
//             </motion.div>
//           );
//         })}
//       </Masonry>
//     </section>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react"; // یک آیکون زیبا برای هدر

// دیگر نیازی به styles و useEffect و useState نیست!

export default function ArticlesListClient({ articles = [], locale = "en", basePath = "/pages/en/Articles" }) {
  const results = articles;
  
  // ترجمه‌های مربوط به تعداد نتایج
  const countText = {
    fa: "مقاله",
    ar: "نتيجة",
    ru: "статьи",
    fr: "résultats",
    en: "articles",
  };

  const breakpointCols = {
    default: 3,
    1024: 2, // breakpoint کمی بهتر شد
    640: 1,  // breakpoint کمی بهتر شد
  };
  
  // انیمیشن برای هر کارت
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // تاخیر برای نمایش آبشاری کارت‌ها
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    // کانتینر اصلی با پدینگ و عرض استاندارد
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* هدر جدید و شیک */}
      <header className="mb-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-amber-500" />
            </div>
          <div className="px-4 py-1.5 text-sm font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 rounded-full">
            {results.length} {countText[locale] || "results"}
          </div>
        </div>
      </header>

      <Masonry
        breakpointCols={breakpointCols}
        // کلاس‌های Tailwind برای Masonry grid
        className="flex -ml-4" // ml-4- برای جبران gutter
        columnClassName="pl-4 bg-clip-padding"
      >
        {results.map((a, index) => {
          // منطق انتخاب زبان شما بدون تغییر باقی می‌ماند
          let title = a.title || '';
          let summary = a.summary || '';
          if (locale === 'fa') {
            title = a.titleFa || a.title || '';
            summary = a.summaryFa || a.summary || '';
          } else if (locale === 'en') {
            title = a.titleEn || a.title || '';
            summary = a.summaryEn || a.summary || '';
          } else if (locale === 'ar') {
            title = a.titleAr || a.title || '';
            summary = a.summaryAr || a.summary || '';
          } else if (locale === 'fr') {
            title = a.titleFr || a.title || '';
            summary = a.summaryFr || a.summary || '';
          } else if (locale === 'ru') {
            title = a.titleRu || a.title || '';
            summary = a.summaryRu || a.summary || '';
          }
          
          return (
            <motion.div
              key={a.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, scale: 1.02 }} // انیمیشن هاور بهبود یافته
              whileTap={{ scale: 0.98 }}
              className="mb-4" // فاصله بین ردیف‌های کارت
            >
              {/* طراحی جدید کارت با استایل صفحه داخلی */}
              <Link href={`${basePath}/${a.id}`} className="block">
                <div className="
                  group
                  bg-white dark:bg-slate-900 
                  rounded-2xl overflow-hidden 
                  ring-1 ring-slate-200/80 dark:ring-slate-800
                  hover:ring-amber-500/70 dark:hover:ring-amber-400/70
                  transition-all duration-300 ease-in-out
                  shadow-sm hover:shadow-2xl hover:shadow-slate-300/20 dark:hover:shadow-black/40
                ">
                  {/* تصویر در بالای کارت */}
                  {a.image && (
                    <div className="overflow-hidden">
                      <img 
                        src={a.image} 
                        alt={title} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                      />
                    </div>
                  )}
                  
                  {/* محتوای کارت با پدینگ */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 leading-snug">
                      {title}
                    </h3>
                    {summary && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                        {summary}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </Masonry>
    </section>
  );
}
