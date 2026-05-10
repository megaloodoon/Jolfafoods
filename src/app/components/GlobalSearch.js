"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const translations = {
  fa: {
    placeholder: "محصول، مقاله یا...",
    close: "بستن",
    searching: "در حال جستجو...",
    noResults: "نتیجه‌ای برای این عبارت پیدا نشد.",
    info: "برای جستجو تایپ کنید و برای بستن کلیک کنید",
  },
  en: {
    placeholder: "Search for products, articles...",
    close: "Close",
    searching: "Searching...",
    noResults: "No results found for your search.",
    info: "Type to search, click outside to close",
  },
  ar: {
    placeholder: "ابحث عن المنتجات والمقالات...",
    close: "إغلاق",
    searching: "جارٍ البحث...",
    noResults: "لم يتم العثور على نتائج لبحثك.",
    info: "اكتب للبحث، وانقر بالخارج للإغلاق",
  },
  fr: {
    placeholder: "Rechercher des produits, articles...",
    close: "Fermer",
    searching: "Recherche en cours...",
    noResults: "Aucun résultat trouvé pour votre recherche.",
    info: "Tapez pour rechercher, cliquez à l'extérieur pour fermer",
  },
  ru: {
    placeholder: "Поиск продуктов, статей...",
    close: "Закрыть",
    searching: "Поиск...",
    noResults: "По вашему запросу ничего не найдено.",
    info: "Начните печатать для поиска, кликните вне окна для закрытия",
  },
};

export default function GlobalSearch({ locale = "fa", open = false, onClose = () => {} }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef(null);

  const isRtl = locale === "fa" || locale === "ar";
  // انتخاب متون بر اساس زبان، اگر زبان پیدا نشد پیش‌فرض انگلیسی باشد
  const t = translations[locale] || translations.en;

  useEffect(() => {
    if (!open) return;
    setQ("");
    setResults([]);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!q) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      fetch(`/api/search?locale=${locale}&q=${encodeURIComponent(q)}`)
        .then((r) => r.json())
        .then((data) => setResults(data || []))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 220);
    return () => clearTimeout(timer.current);
  }, [q, locale, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          dir={isRtl ? "rtl" : "ltr"}
          /* z-[100] باعث می‌شود که روی تمام اجزای منو از جمله لوگو قرار بگیرد */
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4 pb-4 font-sans"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          ></div>

          {/* Modal Container */}
          <motion.div
            initial={{ y: -20, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Search Input Area */}
            <div className="relative p-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.placeholder}
                className="w-full bg-transparent text-gray-800 text-lg placeholder-gray-400 border-none outline-none focus:ring-0"
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                title={t.close}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {loading && (
                <div className="p-8 text-center text-gray-500 flex flex-col items-center justify-center gap-3">
                  <div className="w-6 h-6 border-2 border-[#1a4b8c] border-t-transparent rounded-full animate-spin"></div>
                  <span>{t.searching}</span>
                </div>
              )}

              {!loading && results.length === 0 && q && (
                <div className="p-8 text-center text-gray-500">
                  {t.noResults}
                </div>
              )}

              <ul className="space-y-1">
                {results.map((r) => (
                  <li key={`${r.type}-${r.id}`}>
                    <Link
                      href={r.url}
                      onClick={() => onClose()}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#1a4b8c]/5 transition-colors group"
                    >
                      {r.image ? (
                        <img
                          src={r.image}
                          alt={r.title}
                          className="w-14 h-14 object-cover rounded-lg shadow-sm border border-gray-100 group-hover:border-[#1a4b8c]/20"
                        />
                      ) : (
                        <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                      )}
                      
                      <div className="flex flex-col flex-1">
                        <span className="font-semibold text-gray-800 group-hover:text-[#1a4b8c] transition-colors line-clamp-1">
                          {r.title}
                        </span>
                        <span className="text-sm text-gray-400 mt-0.5">
                          {r.type}
                        </span>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 text-gray-300 group-hover:text-[#1a4b8c] transition-colors ${isRtl ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Footer / Info */}
            <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                <span className="text-xs text-gray-400">
                    {t.info}
                </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
