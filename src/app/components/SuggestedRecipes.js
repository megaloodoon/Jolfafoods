import { getRecipes } from "@/app/lib/cheeseData";
import RecipeSlider from "./RecipeSlider";

export default async function SuggestedRecipes({ locale = "fa", limit = 6 }) {
  // گرفتن دیتا در سمت سرور
  const recipes = await getRecipes(locale);
  // پیشنهاد می‌کنم limit را کمی بیشتر کنید تا اسلایدر بهتر دیده شود (مثلا ۶)
  const items = recipes.slice(0, limit);

  return (
    <section className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-2xl text-white font-bold mb-6">
        {locale === "fa" ? "دستور پخت‌های پیشنهادی" : "Recommended recipes"}
      </h2>

      {/* فراخوانی کامپوننت اسلایدر و ارسال دیتا به آن */}
      <RecipeSlider items={items} locale={locale} />
    </section>
  );
}
