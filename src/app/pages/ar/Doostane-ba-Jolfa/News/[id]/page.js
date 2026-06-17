import path from "path";
import { readFile } from "fs/promises";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// دیکشنری ترجمه‌ها برای زبان‌های مختلف به همراه ترجمه «زمان مطالعه»
const TRANSLATIONS = {
  fa: {
    datePrefix: "تاریخ انتشار:",
    recent: "اخیراً",
    back: "بازگشت به لیست اخبار",
    minRead: "دقیقه مطالعه",
    dir: "rtl",
    backArrow: "➔", // فلش به راست برای راست‌چین
  },
  ar: {
    datePrefix: "تاريخ النشر:",
    recent: "مؤخراً",
    back: "العودة إلى قائمة الأخبار",
    minRead: "دقائق للقراءة",
    dir: "rtl",
    backArrow: "➔",
  },
  en: {
    datePrefix: "Published on:",
    recent: "Recently",
    back: "Back to News List",
    minRead: "min read",
    dir: "ltr",
    backArrow: "🡠", // فلش به چپ برای چپ‌چین
  },
  fr: {
    datePrefix: "Publié le:",
    recent: "Récemment",
    back: "Retour aux actualités",
    minRead: "min de lecture",
    dir: "ltr",
    backArrow: "🡠",
  },
  ru: {
    datePrefix: "Дата публикации:",
    recent: "Недавно",
    back: "Вернуться к новостям",
    minRead: "мин чтения",
    dir: "ltr",
    backArrow: "🡠",
  },
};

export default async function SingleNewsPage({ params }) {
  // ۱. اضافه کردن await برای params
  const resolvedParams = await params;

  // ۲. استفاده از resolvedParams به جای params
  const locale = resolvedParams.locale || "ar";
  const { id } = resolvedParams;

  // تنظیمات زبان فعلی
  const t = TRANSLATIONS[locale] || TRANSLATIONS.ar;
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
  const title = newsItem[`title_${locale}`] || newsItem.title_fa;
  const content = newsItem[`content_${locale}`] || newsItem.content_fa;
  const date = newsItem[`date_${locale}`] || newsItem.date_fa || t.recent;

  // محاسبه تقریبی زمان مطالعه (هر ۲۰۰ کلمه ۱ دقیقه)
  const wordCount = content ? content.split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main dir={t.dir} className="w-full bg-[#f4f7fc] min-h-screen relative pb-24">
      
      {/* تزریق انیمیشن‌های CSS سفارشی برای ورود جذاب المان‌ها */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customFadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-enter {
          opacity: 0;
          animation: customFadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

      {/* بخش هیرو: تصویر تمام عرض در بالای صفحه */}
      <section className="relative w-full h-[60vh] md:h-[70vh] z-0 overflow-hidden">
        {/* افکت زوم ملایم و دائمی روی عکس بک‌گراند (ken burns effect) */}
        <div className="absolute inset-0 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]">
          <Image
            src={newsItem.image}
            alt={title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* گرادیان‌های پوششی برای زیبایی و خوانایی هدر سایت */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#f4f7fc]"></div>
      </section>

      {/* کانتینر محتوای اصلی - Overlapping Layout */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-20vh] md:mt-[-25vh]">
        
        {/* کارت شیشه‌ای (Glassmorphism) اصلی */}
        <article className="animate-enter bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(30,58,138,0.15)] border border-white/50 overflow-hidden">
          
          <div className="p-8 md:p-14 lg:p-20 relative">
            
            {/* واترمارک دکوراتیو جلفا */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] overflow-hidden w-full h-full flex items-center justify-center select-none">
              <span className={`text-[12rem] md:text-[15rem] font-black text-[#1e3a8a] transform ${isRtl ? 'rotate-6' : '-rotate-6'}`}>Jolfa</span>
            </div>

            {/* محتوای داخلی کارت */}
            <div className="relative z-10">
              
              {/* متادیتا (تاریخ و زمان مطالعه) */}
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium mb-8 animate-enter delay-100">
                <span className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-5 py-2 rounded-full shadow-md">
                  {t.datePrefix} <span className="font-bold mx-1">{date}</span>
                </span>
                <span className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTime} {t.minRead}
                </span>
              </div>

              {/* عنوان اصلی خبر */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.2] md:leading-[1.3] mb-12 animate-enter delay-200 tracking-tight">
                {title}
              </h1>
              
              {/* خط جداکننده دکوراتیو */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-full mb-12 animate-enter delay-200"></div>

              {/* متن خبر با تایپوگرافی مدرن */}
              <div className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none text-slate-700 leading-[2.2] text-justify font-serif animate-enter delay-300">
                <p className="whitespace-pre-line">
                  {content}
                </p>
              </div>

              {/* دکمه بازگشت با استایل مدرن */}
              <div className="mt-20 pt-10 border-t border-slate-200 flex justify-center md:justify-start animate-enter delay-300">
                <Link 
                  href={`/pages/${locale}/Doostane-ba-Jolfa/News/`}
                  className={`
                    group relative inline-flex items-center justify-center gap-3 
                    bg-transparent text-[#1e3a8a] font-bold text-lg py-4 px-10 rounded-full
                    overflow-hidden transition-all duration-300
                    ${isRtl ? 'flex-row-reverse' : ''}
                  `}
                >
                  {/* بک‌گراند دکمه که با هاور پر می‌شود */}
                  <span className="absolute inset-0 border-2 border-[#1e3a8a] rounded-full transition-all duration-300 group-hover:bg-[#1e3a8a]"></span>
                  
                  {/* متن و آیکون روی دکمه */}
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                    <span className={`transform transition-transform duration-300 ${isRtl ? 'group-hover:translate-x-2' : 'group-hover:-translate-x-2'}`}>
                      {t.backArrow}
                    </span>
                    <span>{t.back}</span>
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </article>
      </section>

    </main>
  );
}
