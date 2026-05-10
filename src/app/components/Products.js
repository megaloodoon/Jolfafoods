"use client";

import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const DICTIONARY = {
  fa: {
    all: "همه",
    cheese: "پنیر",
    sauce: "سس",
    butter: "کره",
    cream: "خامه",
    loading: "در حال بارگذاری...",
    noProducts: "محصولی در این دسته یافت نشد.",
  },
  en: {
    all: "All",
    cheese: "Cheese",
    sauce: "Sauce",
    butter: "Butter",
    cream: "Cream",
    loading: "Loading...",
    noProducts: "No products found in this category.",
  },
  ar: {
    all: "الكل",
    cheese: "جبنة",
    sauce: "صلصة",
    butter: "زبدة",
    cream: "قشدة",
    loading: "جار التحميل...",
    noProducts: "لم يتم العثور على منتجات في هذه الفئة.",
  },
  ru: {
    all: "Все",
    cheese: "Сыр",
    sauce: "Соус",
    butter: "Масло",
    cream: "Крем",
    loading: "Загрузка...",
    noProducts: "В этой категории нет товаров.",
  },
  fr: {
    all: "Tout",
    cheese: "Fromage",
    sauce: "Sauce",
    butter: "Beurre",
    cream: "Crème",
    loading: "Chargement...",
    noProducts: "Aucun produit trouvé dans cette catégorie.",
  },
};

const getProductCategory = (id) => {
  const numId = parseInt(String(id).match(/\d+/)?.[0]);
  if ([1, 2, 3, 4, 7, 8, 9, 12, 14].includes(numId)) return "cheese";
  if ([5, 6].includes(numId)) return "sauce";
  if ([10, 13].includes(numId)) return "cream";
  if ([11].includes(numId)) return "butter";
  return "other";
};

export default function Productsj({ lang = "fa" }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryFromUrl = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const currentLang = typeof lang === "string" ? lang : "fa";
  const t = DICTIONARY[currentLang] || DICTIONARY["fa"];

  const CATEGORIES = [
    { id: "all", label: t.all },
    { id: "cheese", label: t.cheese },
    { id: "sauce", label: t.sauce },
    { id: "cream", label: t.cream },
    { id: "butter", label: t.butter },
  ];

  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    if (!containerRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [loading]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products || data;
        const formattedProducts = productList.map((p) => ({
          ...p,
          category: p.category || getProductCategory(p.id),
        }));
        setProducts(formattedProducts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const params = new URLSearchParams(searchParams);
    if (catId === "all") {
      params.delete("category");
    } else {
      params.set("category", catId);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (loading) {
    return <div className="text-center py-20 text-[#1a4b8c]">{t.loading}</div>;
  }

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const getLocalizedTitle = (product) => {
    switch (currentLang) {
      case "fa":
        return product.title || product.name;
      case "en":
        return product.titleEn || product.name;
      case "ar":
        return product.titleAr || product.title;
      case "fr":
        return product.titleFr || product.title;
      case "ru":
        return product.titleRu || product.title;
      default:
        return product.title;
    }
  };

    return (
    <div className="w-full">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-7 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide transition-all duration-500 ease-out border ${
              activeCategory === cat.id
                ? "bg-[#1a4b8c] text-white border-[#1a4b8c] shadow-[0_8px_20px_-6px_rgba(26,75,140,0.5)] scale-105"
                : "bg-white text-gray-500 border-gray-200/80 hover:text-gray-800 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Swiper Container */}
      <div ref={containerRef} className="px-4 md:px-8">
        {visible ? (
          filteredProducts.length > 0 ? (
            <Swiper
              key={`${currentLang}-${activeCategory}`}
              dir={["fa", "ar"].includes(currentLang) ? "rtl" : "ltr"}
              modules={[Pagination]}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="w-full spring-swiper pb-20 pt-4"
              grabCursor={true}
              speed={800}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 24 },
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
                1280: { slidesPerView: 4, spaceBetween: 32 },
              }}
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id} className="!h-auto flex justify-center py-4">
                  {/* Premium Product Card */}
                  <Link
                    href={`/pages/${currentLang}/products/${product.id}`}
                    className="group flex flex-col w-full max-w-[320px] mx-auto bg-white rounded-[2rem] overflow-hidden border border-gray-100/50 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Image Wrapper */}
                    <div
                      className={`relative aspect-square flex justify-center items-center p-8 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden ${
                        product.id == 7 ? "p-10" : product.id == 9 ? "p-6" : ""
                      }`}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-sm"
                      />
                    </div>
                    
                    {/* Card Content */}
                    <div className="flex flex-col items-center justify-center px-6 pb-8 pt-4 mt-auto">
                      <h3 className="font-semibold text-center text-gray-800 text-lg sm:text-xl transition-colors duration-300 group-hover:text-[#1a4b8c] line-clamp-2">
                        {getLocalizedTitle(product)}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 font-medium text-lg">
              {t.noProducts}
            </div>
          )
        ) : (
          <div style={{ minHeight: 400 }} />
        )}
      </div>

      {/* Modern Global Styles for Swiper Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db !important; /* gray-300 */
          opacity: 0.6 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          border-radius: 9999px !important;
        }
        .swiper-pagination-bullet-active {
          background: #1a4b8c !important;
          opacity: 1 !important;
          width: 24px !important; /* Pill shape for active */
        }
      `}</style>
    </div>
  );

}
