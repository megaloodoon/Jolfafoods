"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "@/app/styles/heroSlider.module.css";



import React from "react";

export default function HeroSlider({ locale = "fa" }) {
  const [slides, setSlides] = React.useState([]);

  React.useEffect(() => {
    fetch(`/api/banners?locale=${locale}`)
      .then((res) => res.json())
      .then((data) => {
        setSlides(
          (data || []).map((b) => ({
            image: b.image,
            title: b.title,
            subtitle: b.subtitle || "",
          }))
        );
      });
  }, [locale]);

  if (!slides.length) return null;

  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <Slide image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Slide({ image }) {
  return (
    <div className={styles.slide} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        {/* CTA removed per request */}
      </div>
    </div>
  );
}
