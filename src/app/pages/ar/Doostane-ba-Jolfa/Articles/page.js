import { getArticles } from "@/app/lib/cheeseData";
import ArticlesListClient from "@/app/components/ArticlesListClient";

export default async function ArticlesPage() {
  const articles = await getArticles("ar");

  return (
    <main>
      <section dir="rtl" >
        <ArticlesListClient articles={articles} locale="ar" basePath="/pages/ar/Doostane-ba-Jolfa/Articles" />
      </section>
    </main>
  );
}
