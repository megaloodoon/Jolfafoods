"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

function MazetaFarsi() {
  const [post, setPost] = useState([
    {
      id: 1,
      name: "پنیر قالبی موزارلا مازستا",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details: "پنیر قالبی موزارلا مازستا یکی از محبوب ترین ...", },
    {
      id: 2,
      name: "خامه پاستوریزه مازستا",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details: "خامه پاستوریزه چرب مازستا از شیر تازه و تحت ...",
    },
    {
      id: 3,
      name: "پنیر پیتزا مازستا",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details: "در پنیر موزارلا با چربی گیاهی مازستا...",
    },
    {
      id: 4,
      name: "کره مازستا",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details: "کره پاستوریزه  مازستا محصولی کاملاً حیوانی و ...",
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
              href={`/pages/fa/Mazesta_Products/${mazesta.id}`}
            >
              {" "}
              ادامه جزئیات
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MazetaFarsi;
