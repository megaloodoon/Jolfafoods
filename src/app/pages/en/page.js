import StoreBrandsCarousel from "@/app/components/StoreBrandsCarousel";
import Link from "next/link";
import HeroSlider from "@/app/components/HeroSlider";
import SuggestedRecipes from "@/app/components/SuggestedRecipes";
import ProductsCarousel from "@/app/components/ProductsCarousel";

const enSlides = [
  // This line is kept for context
  {
    image: "/Image/banner/1.jpg",
    title: "Professional pizza cheese",
    subtitle: "High stretch, clean melt",
  },
  {
    image: "/Image/banner/2.jpg",
    title: "Designed for fast food",
    subtitle: "Consistent flavor, stable performance",
  },
  {
    image: "/Image/banner/3.jpg",
    title: "Reliable quality",
    subtitle: "Suitable for industrial and home baking",
  },
  {
    image: "/Image/banner/4.jpg",
    title: "Even results every bake",
    subtitle: "Controlled melt and standard stretch for QSR kitchens",
  },
  {
    image: "/Image/banner/5.jpg",
    title: "Stable production, precise formula",
    subtitle: "Quality you can repeat in every order",
  },
  {
    image: "/Image/banner/6.jpg",
    title: "Professional results at home",
    subtitle: "Ideal texture for oven and pan cooking",
  },
];

export default function Page() {
  return (
    <main
      className="flex min-h-screen flex-col font-sans bg-cover bg-center bg-no-repeat bg-fixed"

    >
      <div className="hero-section relative min-h-screen flex items-center justify-center">
       
        <div className="relative z-10 text-center px-4 mx-auto flex flex-col items-center gap-6">
          <HeroSlider locale="en" />
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mt-4">
            Welcome to Jolfa Foods
          </h1>
          <p className="hero-subtitle text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premium pizza cheese for an unforgettable experience
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pages/en/products"
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              Our Products
            </Link>
            <Link
              href="/pages/en/About-us"
              className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      {/* <StoreBrandsCarousel locale="en" /> */}
      <ProductsCarousel locale="en" />
      <SuggestedRecipes locale="en" />
    </main>
  );
}
