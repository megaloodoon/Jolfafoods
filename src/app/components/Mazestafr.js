"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

function Mazetafr() {
  const [post, setPost] = useState([
    {
      id: 1,
      name: "Fromage à pâte molle Mazesta",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details: "Le fromage mozzarella moulé avec de la matière...",
    },
    {
      id: 2,
      name: "Crème pasteurisée Mazesta",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details: "Le lait pasteurisé, fabriqué à partir...",
    },
    {
      id: 3,
      name: "Fromage pour pizza Mazesta",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details: "Ce fromage contient une partie...",
    },
    {
      id: 4,
      name: "Beurre Mazesta",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details: "Le beurre pasteurisé Mazesta est produit à...",
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
              href={`/pages/fr/Mazesta_Products/${mazesta.id}`}
            >
              {" "}
              Plus de détails
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mazetafr;
