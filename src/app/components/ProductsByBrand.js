"use client";

import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductsByBrand({ brandId, locale = "fa" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.15 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    setVisible(false);
    fetch(`/api/products-by-brand?brandId=${brandId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [brandId]);

  if (loading) {
    return <div className="text-center py-20">در حال بارگذاری...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        {locale === "fa"
          ? "محصولی برای این برند موجود نیست"
          : locale === "ar"
          ? "لا توجد منتجات لهذه العلامة التجارية"
          : locale === "en"
          ? "No products for this brand"
          : locale === "fr"
          ? "Aucun produit pour cette marque"
          : "Нет продуктов для этого бренда"}
      </div>
    );
  }

  const productsPerPage = 6;
  const pages = [];
  for (let i = 0; i < products.length; i += productsPerPage) {
    pages.push(products.slice(i, i + productsPerPage));
  }

  const dirClass = locale === "fa" || locale === "ar" ? "rtl" : "ltr";
  const baseUrl =
    locale === "fa"
      ? "/pages/fa/products"
      : locale === "ar"
      ? "/pages/ar/products"
      : locale === "en"
      ? "/pages/en/products"
      : locale === "fr"
      ? "/pages/fr/products"
      : "/pages/ru/products";

  return (
    <div dir={dirClass}>
      <div ref={containerRef}>
        {visible ? (
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="w-full spring-swiper"
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={28}
            grabCursor={true}
            speed={700}
            slideToClickedSlide={true}
            style={{
              paddingBottom: "60px",
            }}
          >
            {pages.map((pageProducts, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <div className={styles.grid}>
                  {pageProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`${baseUrl}/${product.id}`}
                      className={styles.card}
                    >
                      <div
                        className={`${styles.imageWrapper} ${
                          product.id == 7
                            ? styles.imgSize7
                            : product.id == 9
                            ? styles.imgSize9
                            : ""
                        }`}
                      >
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className={styles.cardContent}>
                        <h3>{product.name}</h3>
                        <p>
                          {locale === "fa"
                            ? product.titleFa || product.title
                            : locale === "ar"
                            ? product.titleAr || product.title
                            : locale === "en"
                            ? product.titleEn || product.title
                            : locale === "fr"
                            ? product.titleFr || product.title
                            : product.titleRu || product.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div style={{ minHeight: 300 }} />
        )}
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--text-color);
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: var(--text-color);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
