import Productsj from "@/app/components/Products";
import styles from "@/app/styles/products.module.css";

export default function EnglishProductsPage() {
  return (
    <section dir="rtl" className={styles.wrapper}>
      <Productsj lang="ar" />
    </section>
  );
}
