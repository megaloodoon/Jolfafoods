import Link from "next/link";
import { getRecipes } from "@/app/lib/cheeseData";

export default async function SuggestedRecipes({ locale = "fa", limit = 6 }) {
  const recipes = await getRecipes(locale);
  const items = recipes.slice(0, limit);

  return (
    <section className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-2xl font-bold mb-6">
        {locale === "fa" ? "دستور پخت‌های پیشنهادی" : "Recommended recipes"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((r) => (
          <article
            key={r.id}
            className="card bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] p-6 rounded shadow-md flex flex-col items-center hover:scale-105 transform transition-transform duration-300"
          >
            {r.image && (
              <img
                src={r.image}
                alt={r.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                {r.title}
              </h3>
              {r.summary && (
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  {r.summary}
                </p>
              )}
              <Link
                href={`/pages/${locale}/recipes/${r.slug || r.id}`}
                className="btn btn-sm btn-primary"
              >
                {locale === "fa" ? "مشاهده" : "View"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
