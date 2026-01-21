import { getArticles } from "@/app/lib/cheeseData";
import ArticlesListClient from "@/app/components/ArticlesListClient";

export default async function ArticlesPage() {
  const articles = await getArticles("ar");

  return (
    <main>
      <section dir="rtl" className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">مقالات</h1>
        <ArticlesListClient articles={articles} locale="ar" basePath="/pages/ar/Articles" />
      </section>
    </main>
  );
}
