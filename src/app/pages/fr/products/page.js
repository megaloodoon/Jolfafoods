import Productsj from "@/app/components/Products";
import styles from "@/app/styles/products.module.css";

export default function FranceProductsPage() {
  return (
    <section dir="ltr" className={styles.wrapper}>
      <Productsj lang="fr" />
    </section>
  );
}
