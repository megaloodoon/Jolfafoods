import { getArticles } from "@/app/lib/cheeseData";
import ArticlesListClient from "@/app/components/ArticlesListClient";

export default async function ArticlesPage() {
  const articles = await getArticles("ru");

  return (
    <main>
      <section dir="ltr">
        <ArticlesListClient articles={articles} locale="ru" basePath="/pages/ru/Doostane-ba-Jolfa/Articles" />
      </section>
    </main>
  );
}
