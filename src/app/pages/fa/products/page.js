import Productsj from "@/app/components/Products";
import styles from "@/app/styles/products.module.css";

export default function ProductsPage() {


  return (
    <section  dir="rtl" className={styles.wrapper}>
      <Productsj />
    </section>
  );
}
