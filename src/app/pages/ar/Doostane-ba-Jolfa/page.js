import Link from "next/link";

export default function DoostaneBaJolfaPageAR() {
  return (
    <main dir="rtl" className="w-full bg-white pb-24 font-sans">
      {/* بخش گرافیکی بالای صفحه */}
      <section className="relative w-full overflow-hidden">
        {/* لایه ۱: بک‌گراند آبی */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage:
              "url('/Image/New/Backgrounds/Friendly-background.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute top-0 left-0 h-full w-1/2 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('/Image/New/Backgrounds/LatestProducts-pattern-background3.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-1/2 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('/Image/New/Backgrounds/LatestProducts-pattern-background.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "right center",
            backgroundSize: "contain",
          }}
        />
        <div className="relative z-20 w-full h-full flex justify-center px-4">
          <img
            src="/Image/New/Friendly.png"
            alt="لافتة أصدقاء جلفا"
            className="w-full h-auto object-cover max-w-7xl"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 z-30 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-24 relative z-40 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-[#1a4b8c] mb-12 md:mb-20 drop-shadow-sm">
          أصدقاء جلفا
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
          <Link
            href="/pages/ar/Doostane-ba-Jolfa/recipes"
            className="flex flex-col items-center group"
          >
            <img
              src="/Image/New/Icons/Recipes.png"
              alt="أيقونة وصفات"
              className="w-36 h-36 md:w-44 md:h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a4b8c]">
              وصفات
            </h2>
          </Link>
          <Link
            href="/pages/ar/Doostane-ba-Jolfa/News"
            className="flex flex-col items-center group"
          >
            <img
              src="/Image/New/Icons/News.png"
              alt="أيقونة أخبار"
              className="w-36 h-36 md:w-44 md:h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a4b8c]">
              أخبار
            </h2>
          </Link>
          <Link
            href="/pages/ar/Doostane-ba-Jolfa/Articles"
            className="flex flex-col items-center group"
          >
            <img
              src="/Image/New/Icons/Articles.png"
              alt="أيقونة مقالات"
              className="w-36 h-36 md:w-44 md:h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a4b8c]">
              مقالات
            </h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
