"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

function Mazetaen() {
  const [post, setPost] = useState([
    {
      id: 1,
      name: "Mazesta Mozzarella Block Cheese",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details: "Block-form mozzarella cheese with vegetable oil is ...",
    },
    {
      id: 2,
      name: "Mazesta Pasteurized Cream",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details: "Pasteurized cream, made from fresh...",
    },
    {
      id: 3,
      name: "Mazesta Pizza Cheese",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details: "This cheese contains a portion...",
    },
    {
      id: 4,
      name: "Mazesta Butter",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details: "Mazesta pasteurized butter is produced...",
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
              href={`/pages/en/Mazesta_Products/${mazesta.id}`}
            >
              {" "}
              More Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mazetaen;
