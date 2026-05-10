"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/products.module.css";

export default function BrandSelector({ onBrandSelect, locale = "fa" }) {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  const brandLabels = {
    fa: { jolfa: "جلفا", mazesta: "مازستا", ragib: "راغب" },
    en: { jolfa: "Jolfa", mazesta: "Mazesta", ragib: "Ragib" },
    ar: { jolfa: "جلفا", mazesta: "مازستا", ragib: "راغب" },
    fr: { jolfa: "Jolfa", mazesta: "Mazesta", ragib: "Ragib" },
    ru: { jolfa: "Jolfa", mazesta: "Mazesta", ragib: "Ragib" },
  };

  useEffect(() => {
    fetch("/api/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
        if (data.length > 0) {
          setSelectedBrand(data[0].id);
          onBrandSelect(data[0].id);
        }
      })
      .catch(() => setLoading(false));
  }, [onBrandSelect]);

  if (loading) {
    return <div className="text-center py-20">در حال بارگذاری...</div>;
  }

  const dirClass = locale === "fa" || locale === "ar" ? "rtl" : "ltr";

  return (
    <div className={styles.brandSelector} dir={dirClass}>
      <h2 className={styles.brandTitle}>
        {locale === "fa"
          ? "انتخاب برند"
          : locale === "ar"
          ? "اختر العلامة التجارية"
          : locale === "en"
          ? "Select Brand"
          : locale === "fr"
          ? "Sélectionner la marque"
          : "Выберите бренд"}
      </h2>
      <div className={styles.brandButtons}>
        {brands.map((brand) => (
          <button
            key={brand.id}
            className={`${styles.brandButton} ${
              selectedBrand === brand.id ? styles.active : ""
            }`}
            onClick={() => {
              setSelectedBrand(brand.id);
              onBrandSelect(brand.id);
            }}
          >
            {brandLabels[locale]?.[brand.id] || brand.name}
          </button>
        ))}
      </div>
    </div>
  );
}
