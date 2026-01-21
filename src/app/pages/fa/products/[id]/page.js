import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import { getAllProducts, getProductById } from "@/app/lib/cheeseData";

export default async function ProductDetail({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    return <section className={styles.wrapper}>محصولی پیدا نشد.</section>;
  }

  return (
    <section  dir="rtl" className={styles.wrapper}>
      <div className={styles.detail}>
        <div className={styles.detailImageWrapper}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className={styles.detailContent}>
          <h1>{product.name}</h1>
          <p className={styles.detailSubtitle}>{product.titleFa || product.title}</p>
          <p className={styles.detailDescription}>
            {product.descriptionFa || product.description || product.titleFa || product.title}
          </p>
          <Link className={styles.backLink} href="/pages/fa/products">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ id: product.id.toString() }));
}

