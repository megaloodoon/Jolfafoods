import { getArticles } from "@/app/lib/cheeseData";
import ArticlesListClient from "@/app/components/ArticlesListClient";

export default async function ArticlesPage() {
  const articles = await getArticles("ru");

  return (
    <main>
      <section className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Статьи</h1>
        <ArticlesListClient articles={articles} locale="ru" basePath="/pages/ru/Articles" />
      </section>
    </main>
  );
}
