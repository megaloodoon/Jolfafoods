"use client";

import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductsPage() {
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
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const getTitle = (product) => product.titleEn || product.title;

  // Divide products into pages with 6 products per page (2 rows of 3)
  const productsPerPage = 6;
  const pages = [];
  for (let i = 0; i < products.length; i += productsPerPage) {
    pages.push(products.slice(i, i + productsPerPage));
  }

  return (
    <section className={styles.wrapper}>
     

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
                      href={`/pages/en/products/${product.id}`}
                      className={styles.card}
                    >
                      <div
                        className={`${styles.imageWrapper} ${product.id == 7 ? styles.imgSize7 : product.id == 9 ? styles.imgSize9 : ""}`}
                      >
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className={styles.cardContent}>
                        <h3>{product.name}</h3>
                        <p>{getTitle(product)}</p>
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
    </section>
  );
}
