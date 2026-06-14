import path from 'path';
import { readFile } from 'fs/promises';
// اگر برای عربی کامپوننت جداگانه دارید، نام آن را جایگزین کنید
import RecipesSwiperGridClient from '@/app/components/RecipesSwiperGridClientAr';

export default async function RecipesPageAr() {
  const file = path.join(process.cwd(), 'data', 'db.json');
  const raw = await readFile(file, 'utf8');
  const data = JSON.parse(raw);
  const recipes = data.recipes || [];

  return (
    // برای عربی dir="rtl" تنظیم شده است
    <main dir="rtl" className="w-full">
      <RecipesSwiperGridClient recipes={recipes} locale="ar" />
    </main>
  );
}
