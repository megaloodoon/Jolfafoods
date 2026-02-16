import { getArticleById } from "@/app/lib/cheeseData";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default async function ArticlePage(props) {
  const { id } = await props.params;

  // دریافت دیتا
  const article = await getArticleById("ru", id);

  // اگر مقاله پیدا نشد
  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-xl font-bold text-red-500">Статья не найдена</div>
      </div>
    );
  }

  // === استخراج ایمن اطلاعات (شبیه کد خودتان) ===
  const title = article.titleRu || article.title || "Без названия";
  const summary =
    article.summaryRu || article.description || article.summary || "";
  const content = article.contentRu || article.content || "";
  const image = article.image || null;
  const category = article.category || "Главная";

  // === تنظیم تاریخ ===
  // اگر تاریخ وجود نداشت، تاریخ فعلی را می‌گیرد تا ارور ندهد
  const rawDate =
    article.createdAt || article.date || article.updatedAt || new Date();
  let publishDate = "";
  try {
    publishDate = new Date(rawDate).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    publishDate = "Недавно"; // اگر فرمت تاریخ به مشکل خورد
  }

  return (
    <main className="min-h-screen transition-colors duration-300 ">
      <article
        dir="ltr"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16"
      >
        {/* === HEADER === */}
        <header className="mb-10 text-center md:text-left">
          {/* Breadcrumb / Category */}
          <div className="inline-flex items-center gap-1 mb-6 px-3 py-1 rounded-full text-xs font-bold tracking-wide text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30">
            <span>Статьи</span>
            <ChevronRight className="w-3 h-3" />
            <span>{category}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight mb-6 tracking-tight">
            {title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-slate-500 dark:text-slate-400 text-sm border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Время чтения: {article.readingTime || "5"} мин</span>
            </div>
          </div>
        </header>

        {/* === IMAGE === */}
        {image && (
          <figure className="relative w-full aspect-video mb-12 overflow-hidden rounded-2xl shadow-xl dark:shadow-none ring-1 ring-slate-900/5 dark:ring-white/10 group">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </figure>
        )}

        {/* === SUMMARY === */}
        {summary && (
          <div className="mb-10 p-6 md:p-8 bg-slate-50 dark:bg-slate-800/40 rounded-xl border-l-4 border-amber-500">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
              {summary}
            </p>
          </div>
        )}

        {/* === CONTENT === */}
        <div
          className="
            prose prose-lg md:prose-xl max-w-none 
            prose-slate dark:prose-invert
            prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-amber-600 dark:prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
            prose-blockquote:border-l-4 prose-blockquote:border-amber-500/50 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/20 prose-blockquote:py-2 prose-blockquote:pl-4
            prose-li:marker:text-amber-500
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  );
}
