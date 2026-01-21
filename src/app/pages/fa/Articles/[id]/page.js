import { getArticleById } from '@/app/lib/cheeseData';

export default async function ArticlePage({ params }) {
  const { id } = params;
  const article = await getArticleById('fa', id);

  if (!article) return <div className="p-6">مقاله پیدا نشد</div>;

  // Use fa-specific fields if available, fallback to generic
  const title = article.titleFa || article.title || '';
  const summary = article.summaryFa || article.summary || '';
  const content = article.contentFa || article.content || '';

  return (
    <article dir="rtl" className=" max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.titleFa || article.title || ""}</h1>
      {article.image && <img src={article.image} alt={title} className="w-full mb-4 rounded" />}
      <h6 className="mb-4">{article.summaryFa || article.description || article.summary || ""}</h6>
      {<div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.contentFa || article.content || "" }} />}
    </article>
  );
}
