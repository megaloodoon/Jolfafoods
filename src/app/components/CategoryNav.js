import Link from "next/link";
import Image from "next/image";

export default function CategoryNav({ currentLang, t, showBanner = true }) {
  return (
    <>
      {showBanner && (
        <div className="w-full relative z-0">
          <Image
            src="/Image/New/products-background.jpeg"
            alt="Jolfa Foods Products Banner"
            width={1920}
            height={1080}
            priority={true}
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      )}

      {/* 
        تغییرات اصلی برای کاهش ارتفاع:
        - مقادیر padding-top (pt) در تمام سایزها کاهش یافته است.
        - مقادیر margin-top منفی (-mt) برای هماهنگی با پدینگ جدید تنظیم شده است.
      */}
      <div
        className={`relative z-10 flex flex-col w-full bg-[#154994] text-white ${
          showBanner
            ? "mt-2 xs:mt-2 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-2 xxlg:-mt-4 pt-1 xs:pt-0.5 sm:pt-1 md:pt-0" // pt کاهش یافت
            : "mt-4 pt-6 sm:pt-3 md:pt-8" // pt کاهش یافت
        }`}
      >
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_blue.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-1 bg-[length:auto_101%] border-none outline-none"></div>

        {/* 
          تغییرات اصلی برای کاهش ارتفاع:
          - مقادیر padding-bottom (pb) کاهش یافته است.
        */}
        <div className="flex flex-row justify-between items-center w-full overflow-x-auto pb-2 sm:pb-3 md:pb-4 px-4 sm:px-6 md:px-10 scrollbar-hide">
          {["cheese", "sauce", "butter", "cream"].map((cat) => (
            <Link
              key={cat}
              href={`/pages/${currentLang}/products?category=${cat}`}
              // فاصله بین آیکون و متن (gap) کاهش یافته است
              className="flex-1 flex flex-col items-center justify-center gap-1 lg:gap-2 transition-transform hover:scale-105 min-w-[70px]"
            >
              <Image
                src={`/Image/New/Icons/${cat}-icon.svg`}
                alt={t[cat] || cat}
                width={150}
                height={150}
                className="h-auto object-contain w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-32 mt-2"
              />
              <span className="text-white font-bold text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl drop-shadow-md text-center">
                {t[cat] || cat}
              </span>
            </Link>
          ))}
        </div>

        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/down_blue.svg')] bg-repeat-x bg-top z-10 top-full -translate-y-1 bg-[length:auto_101%] border-none outline-none"></div>
      </div>
    </>
  );
}
