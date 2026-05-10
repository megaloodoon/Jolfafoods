import Link from "next/link";
import Image from "next/image";
import SuggestedRecipes from "@/app/components/SuggestedRecipes";

export default function PageEN() {
  return (
    <main dir="ltr" className="flex min-h-screen flex-col font-sans bg-white">
      {/* Hero Section */}
      <div className="w-full relative">
        <Image
          src="/Image/New/First-Home-pic.png"
          alt="Jolfa, a new taste"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main Title */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a4b8c] mb-4">
          Jolfa, the start of a new taste
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-800 font-semibold">
          Our Products
        </h2>
      </div>

      {/* Product Icons Bar */}
      <div
        className="grid grid-cols-4 justify-items-center items-center w-full bg-cover bg-center bg-no-repeat text-white
    gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 
    py-10 sm:py-14 md:py-20 lg:py-28 lg:py-45 xl:py-52 
    px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20"
        style={{
          backgroundImage:
            "url('/Image/New/Backgrounds/Products-background.png')",
        }}
      >
        {/* Cheese */}
        <Link
          href="/pages/en/products?category=cheese"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/cheese-icon.png"
            alt="Cheese"
            width={150}
            height={150}
            className="h-auto object-contain w-10 xs:w-8 sm:w-14 md:w-20 lg:w-24 xl:w-32"
          />
          <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            Cheese
          </span>
        </Link>

        {/* Sauce */}
        <Link
          href="/pages/en/products?category=sauce"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/sauce-icon.png"
            alt="Sauce"
            width={150}
            height={150}
            className="h-auto object-contain w-5 xs:w-6 sm:w-10 md:w-13.5 lg:w-20 xl:w-24"
          />
          <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            Sauce
          </span>
        </Link>

        {/* Butter */}
        <Link
          href="/pages/en/products?category=butter"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/butter-icon.png"
            alt="Butter"
            width={150}
            height={150}
            className="h-auto object-contain w-10 xs:w-9 sm:w-14 md:w-20 lg:w-28 xl:w-40"
          />
          <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            Butter
          </span>
        </Link>

        {/* Cream */}
        <Link
          href="/pages/en/products?category=cream"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/cream-icon.png"
            alt="Cream"
            width={150}
            height={150}
            className="h-auto object-contain w-10 xs:w-9 sm:w-14 md:w-20 lg:w-28 xl:w-40"
          />
          <span className="text-white shadow-sm font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            Cream
          </span>
        </Link>
      </div>

      {/* Cows & Cream Image */}
      <div className="w-full">
        <Image
          src="/Image/New/Main-Home-Pic.png"
          alt="Jolfa nature and cream"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Why Jolfa */}
      <div
        className="py-16 md:py-24 lg:py-56 px-6 text-center bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage:
            "url('/Image/New/Backgrounds/Why-Jolfa-background.png')",
        }}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-[#1a4b8c] mb-6 drop-shadow-md">
          Why Jolfa?
        </h3>
        <p className="max-w-4xl mx-auto text-[#1a4b8c] font-bold md:text-lg leading-relaxed drop-shadow-sm">
          Jolfa means a combination of quality, health, and authentic tastes. By
          producing the best types of cheese, butter, cream, and sauces from
          completely fresh raw materials, we have created new standards in the
          food industry. With Jolfa products, feel the difference in freshness
          and quality in every bite.
        </p>
      </div>

      {/* Recipes Section */}
      <div
        className="py-10 text-center"
        style={{
          backgroundImage: "url('/Image/New/Backgrounds/Home-recepie.png')", // مسیر عکس خود را اینجا قرار دهید
        }}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-[#1a4b8c] mb-10">
          Tips and Tricks with Jolfa Recipes
        </h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-24 px-4 justify-items-center">
          <div className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/fast-icon.png"
              alt="Fast"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">Fast</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/delicious-icon.png"
              alt="Delicious"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">Delicious</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/different-icon.png"
              alt="Different"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">Different</span>
          </div>
        </div>
      </div>

      {/* Recipes Slider */}
      <div
        className="py-12 w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/Image/New/Backgrounds/Recipes-background.png')",
        }}
      >
        <div className="relative z-10">
          <SuggestedRecipes locale="en" />
        </div>
      </div>
    </main>
  );
}
