"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

import styles from "@/app/styles/articles.module.css";


export default function ArticlesListClient({ articles = [], locale = "en", basePath = "/pages/en/Articles" }) {
  const results = articles;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDark = () => {
        setIsDark(document.documentElement.classList.contains("dark") || document.body.classList.contains("dark"));
      };
      checkDark();
      const observer = new MutationObserver(checkDark);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    }
  }, []);

  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section className={styles.articlesWrap}>
      <div className={styles.headerRow}>
        <div className={styles.count}>{results.length} {locale === "fa" ? "مورد" : locale === "ar" ? "نتيجة" : locale === "ru" ? "рез." : locale === "fr" ? "rés." : "results"}</div>
      </div>

      <Masonry breakpointCols={breakpointCols} className={styles.masonry} columnClassName={styles.column}>
        {results.map((a) => {
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
              className={isDark ? `${styles.card} ${styles.cardDark}` : styles.card}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.995 }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Link href={`${basePath}/${a.id}`} className={styles.cardLink}>
                {a.image && <img src={a.image} alt={title} className={styles.thumb} />}
                <div className={styles.cardContent}>
                  <h3 className={styles.title}>{title}</h3>
                  {summary && <p className={styles.desc}>{summary}</p>}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </Masonry>
    </section>
  );
}
