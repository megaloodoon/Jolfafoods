import { getArticleById } from '@/app/lib/cheeseData';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react"; 

export default async function ArticlePage(props) {
  const { id } = (await props.params);
  const article = await getArticleById('fa', id);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FDF8F0]">
        <div className="p-10 text-center text-xl font-bold text-red-500 bg-white rounded-3xl shadow-lg">
          مقاله مورد نظر پیدا نشد.
        </div>
      </div>
    );
  }

  // انتخاب فیلدها با اولویت فارسی، سپس انگلیسی
  const title = article.titleFa || article.title || 'بدون عنوان';
  const summary = article.summaryFa || article.description || article.summary || '';
  const content = article.contentFa || article.content || '';
  
  // --- بخش تاریخ هوشمند و آنلاین ---
  const rawDate = article.createdAt || article.date || article.updatedAt || new Date();
  
  // تبدیل تاریخ میلادی دیتابیس به شمسی (فارسی)
  const publishDate = new Date(rawDate).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  // ----------------------------------

  return (
    <main dir="rtl" className="w-full bg-[#FDF8F0] min-h-screen relative pb-24 font-kalame">
      
      {/* تزریق انیمیشن‌های CSS سفارشی */}
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

      {/* === بخش هیرو: تصویر تمام عرض در بالای صفحه === */}
      <section className="relative w-full h-[55vh] md:h-[65vh] z-0 overflow-hidden bg-[#153B75]">
        {article.image && (
          <div className="absolute inset-0 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]">
            <img
              src={article.image}
              alt={title}
              className="object-cover w-full h-full opacity-90"
            />
          </div>
        )}
        
        {/* گرادیان‌های پوششی برای ترکیب نرم با پس‌زمینه صفحه */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-[#FDF8F0]"></div>
      </section>

      {/* === کانتینر محتوای اصلی (Overlapping Layout) === */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-15vh] md:mt-[-20vh]">
        
        {/* کارت شیشه‌ای (Glassmorphism) اصلی */}
        <article className="animate-enter bg-white/95 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(21,59,117,0.15)] border border-white overflow-hidden">
          
          <div className="p-6 md:p-12 lg:p-16 relative">
            
            {/* واترمارک دکوراتیو جلفا */}
            <div className="absolute top-10 left-10 pointer-events-none opacity-[0.03] overflow-hidden select-none flex items-center justify-center">
              <span className="text-[10rem] md:text-[15rem] font-black text-[#153B75] transform -rotate-6">Jolfa</span>
            </div>

            {/* محتوای داخلی کارت */}
            <div className="relative z-10">
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1 mb-6 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide text-[#FFB03A] bg-[#FFB03A]/10 animate-enter delay-100">
                <span>مقالات</span>
                <ChevronRight className="w-4 h-4" />
                <span>{article.category || "دوستانه با جلفا"}</span>
              </div>

              {/* متادیتا (تاریخ و زمان مطالعه) */}
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium mb-8 animate-enter delay-100">
                <span className="bg-gradient-to-r from-[#153B75] to-[#2a5baf] text-white px-5 py-2.5 rounded-full shadow-md flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FFB03A]" />
                  تاریخ امروز: <span className="font-bold">{publishDate}</span>
                </span>
                <span className="bg-[#FDF8F0] text-slate-600 px-5 py-2.5 rounded-full flex items-center gap-2 border border-[#E4F0FB]">
                  <Clock className="w-4 h-4 text-[#153B75]" />
                  {article.readingTime || '۲'} دقیقه مطالعه
                </span>
              </div>

              {/* عنوان اصلی مقاله */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#153B75] leading-[1.4] md:leading-[1.4] mb-8 animate-enter delay-200 tracking-tight">
                {title}
              </h1>
              
              {/* خط جداکننده دکوراتیو */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFB03A] to-[#ffc875] rounded-full mb-10 animate-enter delay-200 shadow-sm"></div>

              {/* خلاصه مقاله (Lead) */}
              {summary && (
                <div className="mb-12 p-6 md:p-8 bg-[#E4F0FB]/30 rounded-2xl border-r-4 border-[#FFB03A] animate-enter delay-300">
                  <p className="text-lg md:text-xl font-medium leading-[2] text-[#153B75]/80 text-justify">
                    {summary}
                  </p>
                </div>
              )}

              {/* متن کامل مقاله */}
              <div 
                className="
                  prose prose-lg md:prose-xl max-w-none 
                  prose-slate
                  prose-headings:text-[#153B75] prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-6
                  prose-p:text-slate-700 prose-p:leading-[2.2] prose-p:text-justify prose-p:mb-6
                  prose-a:text-[#FFB03A] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-12
                  prose-blockquote:border-r-4 prose-blockquote:border-[#FFB03A] prose-blockquote:bg-[#FDF8F0] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-l-2xl prose-blockquote:text-slate-600 prose-blockquote:font-medium prose-blockquote:italic
                  prose-li:marker:text-[#FFB03A] prose-li:text-slate-700 prose-li:leading-[2]
                  animate-enter delay-300
                "
                dangerouslySetInnerHTML={{ __html: content }} 
              />

              {/* دکمه بازگشت به لیست مقالات */}
              <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center md:justify-start animate-enter delay-300">
                <Link 
                  href={`/pages/fa/Doostane-ba-Jolfa/Articles/`} // آدرس صفحه لیست مقالات خود را در صورت نیاز اصلاح کنید
                  className="
                    group relative inline-flex items-center justify-center gap-3 
                    bg-transparent text-[#153B75] font-bold text-lg py-4 px-10 rounded-full
                    overflow-hidden transition-all duration-300
                  "
                >
                  {/* بک‌گراند دکمه */}
                  <span className="absolute inset-0 border-2 border-[#153B75] rounded-full transition-all duration-300 group-hover:bg-[#153B75]"></span>
                  
                  {/* محتوای دکمه */}
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                    <span>بازگشت به مقالات</span>
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
