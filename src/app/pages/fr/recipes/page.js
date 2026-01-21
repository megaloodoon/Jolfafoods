import path from 'path';
import { readFile } from 'fs/promises';
import RecipesSwiperGridClient from '@/app/components/RecipesSwiperGridClientFr';

const SUFFIX_MAP = { en: 'En', ar: 'Ar', fr: 'Fr', ru: 'Ru', fa: 'Fa' };

export default async function RecipesPage() {
  const file = path.join(process.cwd(), 'data', 'db.json');
  const raw = await readFile(file, 'utf8');
  const data = JSON.parse(raw);
  const recipes = data.recipes || [];

  const locale = 'fr';
  const suf = SUFFIX_MAP[locale];

  return (
    <main className="mx-auto max-w-6xl p-6 md:p-10">
      <h1 className="text-3xl font-extrabold mb-6">Recettes</h1>
      <RecipesSwiperGridClient recipes={recipes} />
    </main>
  );
}

