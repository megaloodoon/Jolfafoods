import { getArticleById } from "@/app/lib/cheeseData";
import { Calendar, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ArticlePage(props) {
  const { id } = await props.params;
  const article = await getArticleById("en", id);

  if (!article) {
    return (
      <div className="p-10 text-center text-xl font-bold text-red-500">
        Article not found
      </div>
    );
  }

  const title = article.titleEn || article.title || "No title";
  const summary =
    article.summaryEn || article.description || article.summary || "";
  const content = article.contentEn || article.content || "";

  const rawDate =
    article.createdAt || article.date || article.updatedAt || new Date();
  const publishDate = new Date(rawDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#FDF8F0] dark:bg-slate-900 transition-colors duration-300 pb-20">
      {/* === HERO IMAGE SECTION === */}
      <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={title}
            // افکت زوم ملایم
            className="absolute inset-0 object-cover w-full h-full scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        ) : (
          <div className="absolute inset-0 bg-[#153B75]" />
        )}
        {/* گرادیانت برای ترکیب بهتر عکس با رنگ پس زمینه */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FDF8F0] dark:to-slate-900" />
      </div>

      {/* === MAIN CONTENT (Overlapping Card) === */}
      <article
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-32 md:-mt-48"
        dir="ltr"
      >
        {/* Glassmorphism Container */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-[#153B75]/10 dark:ring-white/10 p-6 sm:p-10 md:p-16">
          {/* Breadcrumb & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <Link
              href="/pages/en/Doostane-ba-Jolfa/Articles"
              className="group flex items-center gap-2 px-5 py-2.5 bg-[#E4F0FB] dark:bg-slate-700 text-[#153B75] dark:text-blue-300 rounded-full text-sm font-semibold hover:bg-[#153B75] hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Articles</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide text-[#FFB03A] bg-[#FFB03A]/10">
              <span>Articles</span>
              <ChevronRight className="w-3 h-3" />
              <span>{article.category || "General"}</span>
            </div>
          </div>

          {/* Header Texts */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#153B75] dark:text-white leading-tight mb-8 tracking-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-500 dark:text-slate-400 text-sm md:text-base border-b border-slate-200 dark:border-slate-700 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#FFB03A]" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFB03A]" />
                <span>Reading time: {article.readingTime || "2"} min</span>
              </div>
            </div>
          </header>

          {/* Summary Box */}
          {summary && (
            <div className="mb-12 p-6 md:p-8 bg-[#E4F0FB] dark:bg-slate-700/50 rounded-2xl border-l-4 border-[#FFB03A] shadow-inner">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[#153B75] dark:text-slate-200 text-justify">
                {summary}
              </p>
            </div>
          )}

          {/* Article Content (Prose customized with brand colors) */}
          <div
            className="
              prose prose-lg md:prose-xl max-w-none 
              prose-slate dark:prose-invert
              prose-headings:text-[#153B75] dark:prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-justify prose-p:leading-loose prose-p:text-slate-700 dark:prose-p:text-slate-300
              prose-a:text-[#FFB03A] prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10 prose-img:w-full prose-img:object-cover
              prose-blockquote:border-l-4 prose-blockquote:border-[#FFB03A] prose-blockquote:bg-[#FDF8F0] dark:prose-blockquote:bg-slate-700/30 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-[#153B75] dark:prose-blockquote:text-slate-200 prose-blockquote:not-italic
              prose-li:marker:text-[#FFB03A]
              prose-strong:text-[#153B75] dark:prose-strong:text-white
            "
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
    </main>
  );
}
