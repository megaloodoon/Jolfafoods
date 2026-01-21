"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

function Mazetaru() {
  const [post, setPost] = useState([
    {
      id: 1,
      name: "Моцарелла в брикетах Мазеста",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details: "Моцарелла в форме блоков с растительными жирами...",
    },
    {
      id: 2,
      name: "Пастеризованное молоко Мазеста",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details: "Пастеризованное молоко, изготовленное из свежего...",
    },
    {
      id: 3,
      name: "Сыр для пиццы Мазеста",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details: "Этот сыр содержит часть растительного жира...",
    },
    {
      id: 4,
      name: "Масло Мазеста",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details: "Маргарин пастеризованный Mazesta производится...",
    },
  ]);
  return (
    <div className={styles.mazestaList}>
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
              href={`/pages/ru/Mazesta_Products/${mazesta.id}`}
            >
              {" "}
              Продолжить детали
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mazetaru;
