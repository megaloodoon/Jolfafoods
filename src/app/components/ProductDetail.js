import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import { allProducts } from "@/data/allProducts";

export default async function ProductDetail({ params }) {
  // ۱. اضافه کردن await برای params طبق استاندارد Next.js 15
  const resolvedParams = await params;

  // ۲. استفاده از resolvedParams.id برای پیدا کردن محصول
  const product = allProducts.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return <div className="text-center py-20">محصول یافت نشد</div>;
  }

  return (
    <section dir="rtl" className={styles.wrapper}>
      <div className={styles.detail}>
        <div className={styles.detailImageWrapper}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.detailContent}>
          <h1>{product.name}</h1>
          <p className={styles.detailDescription}>{product.description}</p>
          <Link className={styles.backLink} href="/pages/fa/products">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    </section>
  );
}
