import StoreBrandsCarousel from "@/app/components/StoreBrandsCarousel";
import Link from "next/link";
import HeroSlider from "@/app/components/HeroSlider";
import SuggestedRecipes from "@/app/components/SuggestedRecipes";
import ProductsCarousel from "@/app/components/ProductsCarousel";

export const metadata = {
  alternates:{
    canonical:"https://jolfafoods.com/pages/ru",
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="hero-section relative min-h-screen flex items-center justify-center">
       
        <div className="relative z-10 text-center px-4 mx-auto flex flex-col items-center gap-6"> 
          <HeroSlider locale="ru" />
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mt-4">
            Добро пожаловать в Jolfa Foods
          </h1>
          <p className="hero-subtitle text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
            Премиальная пицца-сыр для незабываемого вкуса
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pages/ru/products"
                className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              Наши продукты
            </Link>
            <Link
              href="/pages/ru/About-us"
                className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              О нас
            </Link>
          </div>
        </div>
      </div>
      {/* <StoreBrandsCarousel locale="ru" /> */}
      <ProductsCarousel locale="ru" />
      <SuggestedRecipes locale="ru" />
    </main>
  );
}
