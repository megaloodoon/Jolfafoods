import { getArticleById } from '@/app/lib/cheeseData';
import { Calendar, Clock, ChevronRight } from "lucide-react"; 

export default async function ArticlePage(props) {
  const { id } = (await props.params);
  // دریافت مقاله با زبان انگلیسی
  const article = await getArticleById('en', id);

  if (!article) {
    return <div className="p-10 text-center text-xl font-bold text-red-500">Article Not Found</div>;
  }

  // فیلدهای انگلیسی
  const title = article.titleEn || article.title || 'Untitled';
  const summary = article.summaryEn || article.description || article.summary || '';
  const content = article.contentEn || article.content || '';
  
  // تاریخ هوشمند (فرمت US)
  const rawDate = article.createdAt || article.date || article.updatedAt || new Date();
  const publishDate = new Date(rawDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen transition-colors duration-300">
      {/* LTR برای انگلیسی */}
      <article dir="ltr" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        {/* === HEADER === */}
        <header className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-1 mb-6 px-3 py-1 rounded-full text-xs font-bold tracking-wide text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30">
            <span>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span>{article.category || "Articles"}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight mb-6 tracking-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-slate-500 dark:text-slate-400 text-sm border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Reading time: {article.readingTime || '5'} min</span>
            </div>
          </div>
        </header>

        {/* === IMAGE === */}
        {article.image && (
          <figure className="relative w-full aspect-video mb-12 overflow-hidden rounded-2xl shadow-xl dark:shadow-none ring-1 ring-slate-900/5 dark:ring-white/10 group">
            <img 
              src={article.image} 
              alt={title} 
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
          </figure>
        )}

        {/* === SUMMARY (Border Left) === */}
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
            /* تغییر بوردر به سمت چپ برای LTR */
            prose-blockquote:border-l-4 prose-blockquote:border-amber-500/50 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/20 prose-blockquote:py-2 prose-blockquote:pl-4
            prose-li:marker:text-amber-500
          "
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </article>
    </main>
  );
}
