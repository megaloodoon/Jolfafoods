import Link from "next/link";
import Image from "next/image";
import SuggestedRecipes from "@/app/components/SuggestedRecipes";
import ProductsCarousel from "@/app/components/ProductsCarousel";

export const metadata = {
  alternates: {
    canonical: "https://jolfafoods.com/pages/fa",
  },
};
export default function Home() {
  return (
    <main dir="rtl" className="flex min-h-screen flex-col font-sans bg-white">
      <link rel="canonical" href="https://jolfafoods.com/pages/fa" />

      {/* بخش هیرو (تصویر بالای صفحه) */}
      <div className="w-full relative">
        <Image
          src="/Image/New/First-Home-pic.png" // مسیر عکس سالاد را اینجا قرار دهید
          alt="جلفا طعم جدید"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* تیتر اصلی */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a4b8c] mb-4">
          جلفا، شروع یک طعم جدید
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-800 font-semibold">
          محصولات ما
        </h2>
      </div>

      {/* نوار آبی آیکون‌های محصولات */}
      <div
        className="grid grid-cols-4 justify-items-center items-center w-full bg-cover bg-center bg-no-repeat text-white gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 py-10 sm:py-14 md:py-20 lg:py-45 xl:py-52 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20"
        style={{
          backgroundImage:
            "url('/Image/New/Backgrounds/Products-background.png')",
        }}
      >
        {/* آیکون پنیر */}
        <Link
          href="/pages/fa/products?category=cheese"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/cheese-icon.png"
            alt="پنیر"
            width={150}
            height={150}
            className="h-auto object-contain w-10 xs:w-8 sm:w-14 md:w-20 lg:w-24 xl:w-32"
          />
          <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            پنیر
          </span>
        </Link>

        {/* آیکون سس */}
        <Link
          href="/pages/fa/products?category=sauce"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/sauce-icon.png"
            alt="سس"
            width={150}
            height={150}
            className="h-auto object-contain w-5 xs:w-6 sm:w-10 md:w-13.5 lg:w-20 xl:w-24"
          />
          <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            سس
          </span>
        </Link>

        {/* آیکون کره */}
        <Link
          href="/pages/fa/products?category=butter"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/butter-icon.png"
            alt="کره"
            width={150}
            height={150}
            className="h-auto object-contain w-10 xs:w-9 sm:w-14 md:w-20 lg:w-28 xl:w-40"
          />
          <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            کره
          </span>
        </Link>

        {/* آیکون خامه */}
        <Link
          href="/pages/fa/products?category=cream"
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 transition-transform hover:scale-105"
        >
          <Image
            src="/Image/New/Icons/cream-icon.png"
            alt="خامه"
            width={150}
            height={150}
            className="h-auto object-contain w-10 xs:w-9 sm:w-14 md:w-20 lg:w-28 xl:w-40"
          />
          <span className="text-white shadow-sm font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            خامه
          </span>
        </Link>
      </div>

      {/* تصویر گاوها و خامه */}
      <div className="w-full">
        <Image
          src="/Image/New/Main-Home-Pic.png"
          alt="طبیعت و خامه جلفا"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* بخش چرا جلفا */}
      <div
        className="py-16 md:py-24 lg:py-56 px-6 text-center bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage:
            "url('/Image/New/Backgrounds/Why-Jolfa-background.png')",
        }}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-[#1a4b8c] mb-6 drop-shadow-md">
          چرا جلفا؟
        </h3>
        <p className="max-w-4xl mx-auto text-[#1a4b8c] font-bold md:text-lg leading-relaxed drop-shadow-sm">
          جلفا یعنی تلفیق کیفیت، سلامت و طعم‌های اصیل. ما با تولید بهترین انواع
          پنیر، کره، خامه و سس از مواد اولیه کاملاً تازه، استانداردهای جدیدی را
          در صنایع غذایی خلق کرده‌ایم. با محصولات جلفا، تفاوت در تازگی و کیفیت
          را در هر لقمه احساس کنید.
        </p>
      </div>

      {/* فوت و فن با رسپی های جلفا */}
      <div
        className="py-12 text-center"
        style={{
          backgroundImage: "url('/Image/New/Backgrounds/Home-recepie.png')", // مسیر عکس خود را اینجا قرار دهید
        }}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-[#1a4b8c] mb-10">
          فوت و فن با رسپی های جلفا
        </h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-24 px-4 justify-items-center">
          <div className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/fast-icon.png"
              alt="سریع"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">سریع</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/delicious-icon.png"
              alt="لذیذ"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">لذیذ</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/different-icon.png"
              alt="متفاوت"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">متفاوت</span>
          </div>
        </div>
      </div>

      {/* اسلایدر رسپی ها با تصویر پس‌زمینه */}
      <div
        className="py-12 w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/Image/New/Backgrounds/Recipes-background.png')", // مسیر عکس خود را اینجا قرار دهید
        }}
      >
        {/* در صورت نیاز به لایه نیمه‌شفاف برای خوانایی بهتر محتوا، خط زیر را از حالت کامنت خارج کنید */}
        {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div> */}

        <div className="relative z-10">
          <SuggestedRecipes locale="fa" />
        </div>
      </div>
    </main>
  );
}
