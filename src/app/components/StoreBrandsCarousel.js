"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const stores = [
  { name: "Amiran", img: "/Image/Amiran.webp" },
  { name: "HyperMe", img: "/Image/HyperMe.webp" },
  { name: "Shahrvand", img: "/Image/Shahrvand.webp" },
  { name: "Hyperstar", img: "/Image/Hyperstar.webp" },
];

const storeData = {
  fa: {
    title: "محصولات مازستا",
    stores: [
      { name: "موزارلا", img: "/Image/Mazesta/Mazesta-Mozzarella.webp" },
      { name: "خامه", img: "/Image/Mazesta/Mazesta-Cream.webp" },
      { name: "کره", img: "/Image/Mazesta/Mazesta-Butter.webp" },
      { name: "پنیر پیتزا", img: "/Image/Mazesta/Mazesta-2kg.webp" },
    ],
  },
  en: {
    title: "Mazesta Products",
    stores: [
      { name: "Mozzarella", img: "/Image/Mazesta/Mazesta-Mozzarella.webp" },
      { name: "Cream", img: "/Image/Mazesta/Mazesta-Cream.webp" },
      { name: "Butter", img: "/Image/Mazesta/Mazesta-Butter.webp" },
      { name: "Mozzarella Classic", img: "/Image/Mazesta/Mazesta-2kg.webp" },
    ],
  },
  ar: {
    title: "مازستا",
    stores: [
      { name: "موزاريلا", img: "/Image/Mazesta/Mazesta-Mozzarella.webp" },
      { name: "كريمة", img: "/Image/Mazesta/Mazesta-Cream.webp" },
      { name: "زبدة", img: "/Image/Mazesta/Mazesta-Butter.webp" },
      { name: "موزاريلا كلاسيك", img: "/Image/Mazesta/Mazesta-2kg.webp" },
    ],
  },
  fr: {
    title: "Mazesta",
    stores: [
      { name: "Mozzarella", img: "/Image/Mazesta/Mazesta-Mozzarella.webp" },
      { name: "Crème", img: "/Image/Mazesta/Mazesta-Cream.webp" },
      { name: "Beurre", img: "/Image/Mazesta/Mazesta-Butter.webp" },
      { name: "Mozzarella classique", img: "/Image/Mazesta/Mazesta-2kg.webp" },
    ],
  },
  ru: {
    title: "Mazesta",
    stores: [
      { name: "моцарелла", img: "/Image/Mazesta/Mazesta-Mozzarella.webp" },
      { name: "Пастеризованные", img: "/Image/Mazesta/Mazesta-Cream.webp" },
      { name: "Пастеризованное", img: "/Image/Mazesta/Mazesta-Butter.webp" },
      {
        name: "Классическая моцарелла",
        img: "/Image/Mazesta/Mazesta-2kg.webp",
      },
    ],
  },
};

export default function StoreBrandsCarousel({ locale = "fa" }) {
  const { title, stores } = storeData[locale] || storeData["fa"];
  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="text-center text-lg font-bold mb-4">{title}</div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="rounded-lg"
      >
        {stores.map((store) => (
          <SwiperSlide key={store.name}>
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src={store.img}
                alt={store.name}
                className="card bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] p-6 rounded shadow-md flex flex-col items-center hover:scale-105 transform transition-transform duration-300"
              />
              <div className="mt-2 text-base font-semibold">{store.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
