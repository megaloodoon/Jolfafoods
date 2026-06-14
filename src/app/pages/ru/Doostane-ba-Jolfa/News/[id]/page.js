import path from "path";
import { readFile } from "fs/promises";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// دیکشنری ترجمه‌ها برای زبان‌های مختلف
const TRANSLATIONS = {
  fa: {
    datePrefix: "تاریخ انتشار:",
    recent: "اخیراً",
    back: "بازگشت به لیست اخبار",
    dir: "rtl",
    backArrow: "➔", // فلش به راست برای راست‌چین
  },
  ar: {
    datePrefix: "تاريخ النشر:",
    recent: "مؤخراً",
    back: "العودة إلى قائمة الأخبار",
    dir: "rtl",
    backArrow: "➔",
  },
  en: {
    datePrefix: "Published on:",
    recent: "Recently",
    back: "Back to News List",
    dir: "ltr",
    backArrow: "🡠", // فلش به چپ برای چپ‌چین
  },
  fr: {
    datePrefix: "Publié le:",
    recent: "Récemment",
    back: "Retour aux actualités",
    dir: "ltr",
    backArrow: "🡠",
  },
  ru: {
    datePrefix: "Дата публикации:",
    recent: "Недавно",
    back: "Вернуться к новостям",
    dir: "ltr",
    backArrow: "🡠",
  },
};

export default async function SingleNewsPage({ params }) {
  // 🔴 تنها مقداری که باید برای هر فولدر زبان تغییر دهید:
  const locale = "ru"; // برای فرانسه "fr"، عربی "ar" و روسی "ru" قرار دهید

  const { id } = params;

  // تنظیمات زبان فعلی
  const t = TRANSLATIONS[locale] || TRANSLATIONS.en;
  // 🟢 اصلاح باگ: بررسی راست‌چین بودن
  const isRtl = t.dir === "rtl";

  // دریافت داده‌ها از JSON
  const filePath = path.join(process.cwd(), "data", "news.json");
  let jsonData;
  try {
    jsonData = await readFile(filePath, "utf8");
  } catch (error) {
    notFound();
  }

  const data = JSON.parse(jsonData);
  const newsItem = data.news?.find((item) => item.id === id);

  if (!newsItem) {
    notFound();
  }

  // استخراج محتوا بر اساس زبان (مثلاً title_en, title_fa)
  const title = newsItem[`title_${locale}`] || newsItem.title_en;
  const content = newsItem[`content_${locale}`] || newsItem.content_en;
  const date = newsItem[`date_${locale}`] || newsItem.date_en || t.recent;

  return (
    <main
      dir={t.dir}
      className="w-full pt-28 sm:pt-32 pb-20 bg-[#f8fbff] min-h-screen relative overflow-hidden"
    >
      {/* پترن‌های پس‌زمینه تزئینی */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-yellow-100/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <article className="max-w-5xl mx-auto px-4 relative z-10">
        {/* کانتینر اصلی با استایل کارت */}
        <div className="bg-white rounded-[2rem] shadow-[0_15px_60px_-15px_rgba(30,58,138,0.15)] overflow-hidden">
          {/* تصویر اصلی خبر به صورت بنر جذاب */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[300px]">
            <Image
              src={newsItem.image}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {/* گرادیان پایین عکس برای خوانایی و زیبایی */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>

            {/* عنوان روی عکس */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg leading-tight max-w-4xl">
                {title}
              </h1>
            </div>
          </div>

          {/* محتوای خبر */}
          <div className="relative p-8 md:p-12 lg:p-16">
            {/* واترمارک محو برند جلفا در پس‌زمینه متن */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
              <span className="text-[12rem] font-black text-[#1e3a8a] transform -rotate-12">
                Jolfa
              </span>
            </div>

            <div className="relative z-10">
              {/* بخش متادیتا (تاریخ) */}
              <div className="flex items-center text-gray-400 text-sm md:text-base font-medium mb-10 pb-6 border-b border-gray-100">
                <span className="bg-[#e8f1ff] text-[#1e3a8a] px-4 py-1.5 rounded-full">
                  {t.datePrefix} <span className="font-bold mx-1">{date}</span>
                </span>
              </div>

              {/* متن کامل خبر */}
              <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-loose text-justify font-serif">
                <p className="whitespace-pre-line">{content}</p>
              </div>

              {/* بخش دکمه بازگشت */}
              <div
                className={`mt-16 pt-8 border-t border-gray-100 flex ${isRtl ? "md:justify-end" : "md:justify-start"} justify-center`}
              >
                <Link
                  href={`/pages/${locale}/Doostane-ba-Jolfa/News/`}
                  className={`
                    group inline-flex items-center justify-center gap-3 
                    bg-white border-2 border-[#1e3a8a] text-[#1e3a8a]
                    hover:bg-[#1e3a8a] hover:text-white
                    font-bold text-lg py-3 px-8 rounded-full 
                    transition-all duration-300 shadow-sm hover:shadow-lg
                    ${isRtl ? "flex-row-reverse" : ""}
                  `}
                >
                  <span
                    className={`transform transition-transform duration-300 ${isRtl ? "group-hover:translate-x-2" : "group-hover:-translate-x-2"}`}
                  >
                    {t.backArrow}
                  </span>
                  <span>{t.back}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
