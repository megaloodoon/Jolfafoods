import { getArticleById } from '@/app/lib/cheeseData';

export default async function ArticlePage({ params }) {
  const { id } = params;
  const article = await getArticleById('en', id);

  if (!article) return <div className="p-6">Article not found</div>;

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.titleEn || article.title || ""}</h1>
      {article.image && <img src={article.image} alt={article.title} className="w-full mb-4 rounded" />}
          <p className="mb-4">{article.summaryEn || article.description || article.summary || ""}</p>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.contentEn || article.content || "" }} />
    </article>
  );
}
