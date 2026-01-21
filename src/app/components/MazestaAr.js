"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

function MazetaAr() {
  const [post, setPost] = useState([
    {
      id: 1,
      name: "جبنة موزاريلا مازستا",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details: "جبنة موزاريلا مُشكّلة بالزبدة النباتية...",
    },
    {
      id: 2,
      name: "حليب مازستا المبستر",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details: "الحليب البستوري هو منتج صحي وطبيعي...",
    },
    {
      id: 3,
      name: "جبنة بيتزا مازستا",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details: "يحتوي هذا الجبن على جزء من الدهون...",
    },
    {
      id: 4,
      name: "زبدة مازستا",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details: "يُنتج زبدة مازستا المعبأة بالتعقيم من دهون ...",
    },
  ]);
  return (
    <div dir="rtl" className={styles.mazestaList}>
      {post.map((mazesta) => (
        <div key={mazesta.id} className={styles.mazestaItem}>
          <img
            className={styles.mazestaImage}
            src={mazesta.image}
            alt={mazesta.name}
          />
          <div className={styles.textContent}>
            <h3 className={styles.mazestaName}>{mazesta.name}</h3>
            <p className={styles.mazestaDetails}>{mazesta.Details}</p>
            <Link
              className={styles.link}
              href={`/pages/ar/Mazesta_Products/${mazesta.id}`}
            >
              {" "}
              المزيد من التفاصيل
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MazetaAr;
