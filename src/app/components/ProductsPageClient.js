"use client";

import { useState } from "react";
import BrandSelector from "@/app/components/BrandSelector";
import ProductsByBrand from "@/app/components/ProductsByBrand";
import styles from "@/app/styles/products.module.css";

export default function ProductsPageClient({ locale = "fa" }) {
  const [selectedBrand, setSelectedBrand] = useState("jolfa");

  const dirClass = locale === "fa" || locale === "ar" ? "rtl" : "ltr";

  return (
    <section dir={dirClass} className={styles.wrapper}>
      <BrandSelector onBrandSelect={setSelectedBrand} locale={locale} />
      <ProductsByBrand brandId={selectedBrand} locale={locale} />
    </section>
  );
}
