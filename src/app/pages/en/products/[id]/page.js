import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import { getAllProducts, getProductById } from "@/app/lib/cheeseData";

export default async function ProductDetail({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    return <section className={styles.wrapper}>Product not found.</section>;
  }

  const title = product.titleEn || product.title;
  const description = product.descriptionEn || product.description || title;

  return (
    <section className={styles.wrapper}>
      <div className={styles.detail}>
        <div className={styles.detailImageWrapper}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className={styles.detailContent}>
          <h1>{product.name}</h1>
          <p className={styles.detailSubtitle}>{title}</p>
          <p className={styles.detailDescription}>{description}</p>
          <Link className={styles.backLink} href="/pages/en/products">
            Back to products
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
