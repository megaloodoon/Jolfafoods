import Link from "next/link";

export default function DoostaneBaJolfaPage() {
  return (
    // بک‌گراند اصلی را به رنگ نهایی در می‌آوریم تا پایین صفحه یکدست شود
    <main dir="rtl" className="w-full bg-[rgb(216,230,254)] pb-0 font-sans">
      
      {/* بخش گرافیکی بالای صفحه */}
      <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden flex items-end justify-center bg-white">
        {/* لایه ۱: بک‌گراند آبی */}
        <div
          className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Image/New/Backgrounds/Friendly-background.svg')",
          }}
        />

        {/* لایه ۲: عکس اصلی به صورت تمام صفحه */}
        <div className="absolute inset-0 z-20 w-full h-full">
          <img
            src="/Image/New/Friendly.png"
            alt="بنر صفحه دوستانه با جلفا"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* لایه ۳: هاله سفید در پایین عکس (قوی‌تر شده برای اتصال بهتر) */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] z-30 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
      </section>

      {/* بخش محتوا: شروع با هاله سفید و پایان با رنگ آبی */}
      <section className="relative w-full bg-gradient-to-b from-white via-white/60 to-[rgb(216,230,254)] overflow-hidden z-40 -mt-16 md:-mt-24 py-16 md:py-24 pb-24 md:pb-32">
        
        {/* لایه نقطه‌چین‌ها (چپ) */}
        <div
          className="absolute top-0 left-0 h-full w-1/2 z-0 pointer-events-none bg-contain bg-left bg-no-repeat opacity-70"
          style={{
            backgroundImage:
              "url('/Image/New/Backgrounds/LatestProducts-pattern-background2.svg')",
          }}
        />

        {/* لایه نقطه‌چین‌ها (راست) */}
        <div
          className="absolute top-0 right-0 h-full w-1/2 z-0 pointer-events-none bg-contain bg-right bg-no-repeat opacity-70"
          style={{
            backgroundImage:
              "url('/Image/New/Backgrounds/LatestProducts-pattern-background.svg')",
          }}
        />

        {/* کانتینر محتوای اصلی */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#1a4b8c] mb-12 md:mb-20 drop-shadow-sm pt-8 md:pt-12">
            دوستانه با جلفا
          </h1>

          {/* بخش ۳ آیکون */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
            {/* آیتم ۱: رسپی ها */}
            <Link
              href="/pages/fa/Doostane-ba-Jolfa/recipes"
              className="flex flex-col items-center group"
            >
              <img
                src="/Image/New/Icons/Recipes.png"
                alt="آیکون رسپی ها"
                className="w-36 h-36 md:w-44 md:h-44 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a4b8c]">
                رسپی ها
              </h2>
            </Link>

            {/* آیتم ۲: اخبار */}
            <Link
              href="/pages/fa/Doostane-ba-Jolfa/News"
              className="flex flex-col items-center group"
            >
              <img
                src="/Image/New/Icons/News.png"
                alt="آیکون اخبار"
                className="w-36 h-36 md:w-44 md:h-44 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a4b8c]">
                اخبار
              </h2>
            </Link>

            {/* آیتم ۳: مقالات */}
            <Link
              href="/pages/fa/Doostane-ba-Jolfa/Articles"
              className="flex flex-col items-center group"
            >
              <img
                src="/Image/New/Icons/Articles.png"
                alt="آیکون مقالات"
                className="w-36 h-36 md:w-44 md:h-44 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a4b8c]">
                مقالات
              </h2>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
