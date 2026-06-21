import { getArticles } from "@/app/lib/cheeseData";
import ArticlesListClient from "@/app/components/ArticlesListClient";

export default async function ArticlesPage() {
  const articles = await getArticles("en");

  return (
    <main>
      <section dir="ltr" >
        <ArticlesListClient articles={articles} locale="en" basePath="/pages/en/Doostane-ba-Jolfa/Articles" />
      </section>
    </main>
  );
}
