import { getArticleById } from "@/app/lib/cheeseData";
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function ArticlePage(props) {
  // دریافت پارامترها و اطلاعات مقاله (Server Side)
  const { id } = await props.params;
  const article = await getArticleById("ar", id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F0]">
        <div className="p-10 text-center text-xl font-bold text-red-500 bg-white rounded-2xl shadow-sm">
          لم يتم العثور على المقالة
        </div>
      </div>
    );
  }

  // مقداردهی متغیرها
  const title = article.titleAr || article.title || "بدون عنوان";
  const summary =
    article.summaryAr || article.description || article.summary || "";
  const content = article.contentAr || article.content || "";

  // تنظیم تاریخ
  const rawDate =
    article.createdAt || article.date || article.updatedAt || new Date();
  const publishDate = new Date(rawDate).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main
      className="min-h-screen bg-[#FDF8F0] text-[#333] selection:bg-[#FFB03A]/30 selection:text-[#153B75]"
      dir="rtl"
    >
      {/* بخش عکس هیرو (Hero Image) */}
      <div className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden bg-[#153B75]">
        <div className="absolute inset-0 bg-black/40 z-10" />{" "}
        {/* لایه تیره برای خوانایی بهتر */}
        {article.image && (
          <img
            src={article.image}
            alt={title}
            className="absolute inset-0 object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000 ease-out"
          />
        )}
      </div>

      {/* کانتینر اصلی محتوا (Overlapping the Hero Image) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 pb-20">
        {/* کارت شیشه‌ای (Glassmorphism) */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(21,59,117,0.1)] p-6 sm:p-8 md:p-12 border border-white/50 relative overflow-hidden">
          <div className="relative z-10">
            {/* اطلاعات متای مقاله (دسته‌بندی، تاریخ، زمان مطالعه) */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-medium mb-8">
              <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[#153B75] bg-[#E4F0FB]">
                <span>مقالات</span>
                <ChevronRight className="w-3 h-3" />
                <span>{article.category || "الرئيسية"}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <Calendar className="w-4 h-4 text-[#FFB03A]" />
                <span>{publishDate}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 text-[#FFB03A]" />
                <span>وقت القراءة: {article.readingTime || "2"} دقيقة</span>
              </div>
            </div>

            {/* عنوان مقاله */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#153B75] leading-tight mb-8">
              {title}
            </h1>

            {/* باکس خلاصه مقاله */}
            {summary && (
              <div className="mb-10 p-6 md:p-8 bg-[#FDF8F0] rounded-l-2xl border-r-4 border-[#FFB03A] shadow-sm">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-[#555] text-justify">
                  {summary}
                </p>
              </div>
            )}

            {/* محتوای اصلی مقاله */}
            <div
              className="
                prose prose-lg md:prose-xl max-w-none 
                prose-headings:text-[#153B75] prose-headings:font-bold prose-headings:tracking-tight
                prose-p:text-[#444] prose-p:text-justify prose-p:leading-loose
                prose-a:text-[#FFB03A] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#e59b2d]
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
                prose-blockquote:border-r-4 prose-blockquote:border-[#FFB03A]/50 prose-blockquote:bg-[#FDF8F0] prose-blockquote:py-3 prose-blockquote:pr-5 prose-blockquote:rounded-l-xl
                prose-li:marker:text-[#FFB03A]
              "
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* دکمه بازگشت به مقالات */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-start">
              <Link
                href="/pages/ar/Doostane-ba-Jolfa/Articles"
                className="group flex items-center gap-2 px-6 py-3 bg-[#E4F0FB] text-[#153B75] rounded-full text-sm font-bold hover:bg-[#153B75] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                <span>العودة إلى المقالات</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
