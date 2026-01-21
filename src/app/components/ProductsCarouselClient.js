"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

import { usePathname } from "next/navigation";

export default function ProductsCarouselClient({
  products = [],
  visible = 4,
  locale: propLocale,
}) {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % products.length);
    }, 3500);
    return () => clearInterval(id);
  }, [products.length]);

  useEffect(() => {
    // animate to new index
    const width = containerRef.current ? containerRef.current.clientWidth : 0;
    const itemWidth = width / Math.min(visible, products.length);
    const x = -index * itemWidth;
    controls.start({
      x,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    });
  }, [index, products.length, visible, controls]);

  // Detect current locale from path if not provided
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : undefined;
  let currentLocale = propLocale;
  if (!currentLocale && pathname) {
    const match = pathname.match(/\/pages\/(\w{2})/);
    if (match) currentLocale = match[1];
  }

  if (!products || products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto my-6 px-6">
      <h2 className="text-2xl font-bold mb-6"></h2>
      <div className="relative overflow-hidden" ref={containerRef}>
        <motion.div className="flex gap-4" animate={controls} style={{ x: 0 }}>
          {products.concat(products).map((p, idx) => {
            const isSpecial7 = p.id === 7 || p.id === "7";
            // Determine locale for this product
            const productLocale = p.locale || currentLocale || "fa";
            // فقط با کلاس dark استایل‌دهی کن
            const cardStyle = undefined;
            return (
              <Link
                key={`${p.id}-${idx}`}
                href={p.id ? `/pages/${productLocale}/products/${p.id}` : "#"}
                className="rounded-xl w-[26%] min-w-[25%] bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] p-6  shadow-md flex flex-col items-center hover:scale-105 transform transition-transform duration-300 md:w-[26%] md:min-w-[25%] md:p-4 max-md:w-[20%] max-md:min-w-[18%] max-md:p-2"
                tabIndex={0}
                style={cardStyle}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name || p.title}
                    className="w-auto h-[60px] md:h-[250px] max-md:h-[124px] object-cover cursor-pointer"
                  />
                )}
                {/* اگر محصول ۷ است و عکسش کوچکتر از حد معمول است، فضای خالی اضافه کن */}
                {isSpecial7 && (
                  <div
                    style={{ flex: 1, minHeight: 40 }}
                    className=" dark:bg-[linear-gradient(180deg,_#0d1a30_0%,_#0a1223_100%)]"
                  ></div>
                )}
                <div className=" p-4 mt-auto">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
                    {p.title || p.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


// bg-[radial-gradient(circle,rgba(255, 247, 247, 1)_0%,rgba(207, 255, 247, 1)_0%,rgba(240, 255, 254, 1)_19%,rgba(237, 237, 237, 1)_89%,rgba(191, 225, 255, 1)_100%)] 