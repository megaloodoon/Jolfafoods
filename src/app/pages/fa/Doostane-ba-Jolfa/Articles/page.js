import { getArticles } from "@/app/lib/cheeseData";
import ArticlesListClient from "@/app/components/ArticlesListClient";

export default async function ArticlesPage() {
  const articles = await getArticles("fa");

  return (
    <main>
      <section dir="rtl" >
        <ArticlesListClient articles={articles} locale="fa" basePath="/pages/fa/Doostane-ba-Jolfa/Articles" />
      </section>
    </main>
  );
}
