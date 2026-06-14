import path from 'path';
import { readFile } from 'fs/promises';
// اگر برای انگلیسی کامپوننت جداگانه دارید، نام آن را جایگزین کنید
import RecipesSwiperGridClient from '@/app/components/RecipesSwiperGridClientFr';

export default async function RecipesPagefr() {
  const file = path.join(process.cwd(), 'data', 'db.json');
  const raw = await readFile(file, 'utf8');
  const data = JSON.parse(raw);
  const recipes = data.recipes || [];

  return (
    // برای انگلیسی dir="ltr" تنظیم شده است
    <main dir="ltr" className="w-full">
      <RecipesSwiperGridClient recipes={recipes} locale="fr" />
    </main>
  );
}
