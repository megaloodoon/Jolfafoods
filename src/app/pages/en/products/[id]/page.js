import Link from "next/link";
import styles from "@/app/styles/products.module.css";
import { getAllProducts, getProductById } from "@/app/lib/cheeseData";
import Image from "next/image";

export default async function ProductDetail({ params }) {
  const product = await getProductById((await params).id);

  if (!product) {
    return <section className={styles.wrapper}>Product not found.</section>;
  }

  const title = product.titleEn || product.title;
  const description = product.descriptionEn || product.description || title;

  return (
    <section dir="ltr" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-black/5 bg-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-md dark:border-white/10 dark:bg-[#0b1230]/70 dark:shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[360px,1fr] md:gap-8">
            {/* Image */}
            <div className="overflow-hidden rounded-xl bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={720}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                {product.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base font-medium text-neutral-500 dark:text-neutral-300">
                {title}
              </p>

              <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-200">
                {description}
              </p>

              <Link
                href="/pages/en/products?category=cheese"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
              >
                Back to products <span className="text-base">↩︎</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ id: product.id.toString() }));
}
