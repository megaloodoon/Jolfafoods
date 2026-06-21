import { getArticles } from "@/app/lib/cheeseData";
import ArticlesListClient from "@/app/components/ArticlesListClient";

export default async function ArticlesPage() {
  const articles = await getArticles("fr");

  return (
    <main>
      <section dir="ltr">
        <ArticlesListClient articles={articles} locale="fr" basePath="/pages/fr/Doostane-ba-Jolfa/Articles" />
      </section>
    </main>
  );
}
