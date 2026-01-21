import Link from "next/link";
import HeroSlider from "@/app/components/HeroSlider";
import SuggestedRecipes from "@/app/components/SuggestedRecipes";

import ProductsCarousel from "@/app/components/ProductsCarousel";
import StoreBrandsCarousel from "@/app/components/StoreBrandsCarousel";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="hero-section relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 text-center p-4 max-w-auto mx-auto flex flex-col items-center gap-6">
          <HeroSlider />
          <h1 className="hero-title text-3xl md:text-6xl font-extralight mt-8 text-white">
            جلفا ، شروع یک طعم جدید
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            پنیر پیتزای حرفه‌ای برای تجربه‌ای بی‌نظیر
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pages/fa/products"
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              محصولات ما
            </Link>
            <Link
              href="/pages/fa/About-us"
              className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              درباره ما
            </Link>
          </div>
        </div>
      </div>

      {/* <StoreBrandsCarousel /> */}
      <ProductsCarousel locale="fa" />
      <SuggestedRecipes locale="fa" />
    </main>
  );
}
