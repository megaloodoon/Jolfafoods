import path from 'path';
import { readFile } from 'fs/promises';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import RecipeGalleryClient from '@/app/components/RecipeGalleryClient';

const SUFFIX_MAP = { en: 'En', ar: 'Ar', fr: 'Fr', ru: 'Ru', fa: 'Fa' };

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const file = path.join(process.cwd(), 'data', 'db.json');
  const raw = await readFile(file, 'utf8');
  const data = JSON.parse(raw);
  const recipe = (data.recipes || []).find(r => r.slug === slug || r.id?.toString() === slug);

  if (!recipe) return notFound();

  const images = recipe.gallery || (recipe.image ? [recipe.image] : []);
  const locale = 'fa';
  const suf = SUFFIX_MAP[locale];

  const title = (suf ? recipe[`title${suf}`] : recipe.title) || recipe.title || recipe.titleEn || '';
  const description = (suf ? recipe[`summary${suf}`] : recipe.summary) || recipe.summary || recipe.summaryEn || '';
  function normalizeStepsField(value){
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string'){
      const t = value.trim();
      if (!t) return [];
      try{ const p = JSON.parse(t); if (Array.isArray(p)) return p; }catch(e){}
      return t.split(/\r?\n/).map(line=>({description: line.trim()})).filter(s=>s.description);
    }
    return [{ description: String(value) }];
  }

  const ingredients = (suf ? recipe[`ingredients${suf}`] : recipe.ingredients) || recipe.ingredients || [];
  const stepsRaw = (suf ? recipe[`steps${suf}`] : recipe.steps) || recipe.steps || [];
  const steps = normalizeStepsField(stepsRaw);
  const notes = (suf ? recipe[`notes${suf}`] : recipe.notes) || recipe.notes || '';

  return (
    <main dir="rtl" className="mx-auto max-w-4xl p-6 md:p-10">
      <div className="bg-white/80 dark:bg-gray-900/70 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="relative h-64 md:h-80">
          {recipe.image ? (
            <>
              <Image
                src={recipe.image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-black/60" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-yellow-100" />
          )}
          <div className="absolute left-6 bottom-6">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white drop-shadow-md">{title}</h1>
                {description && (
                  <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-white/90 max-w-2xl">{description}</p>
                )}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
              <aside className="md:w-1/3">
              <h2 className="text-lg font-semibold mb-3">Ingredients</h2>
              <ul className="space-y-2">
                {(ingredients || []).map((ing, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center bg-amber-50 dark:bg-gray-800 rounded-md p-3 shadow-sm"
                  >
                    <span className="font-medium text-sm">{ing.name}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{ing.quantity}</span>
                  </li>
                ))}
                {(!ingredients || ingredients.length === 0) && (
                  <li className="text-sm text-gray-500">No ingredients listed.</li>
                )}
              </ul>
            </aside>

            <section className="md:w-2/3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold mb-3">Instructions</h2>
                {recipe.time && <span className="text-sm text-gray-500">{recipe.time}</span>}
              </div>

              <ol className="space-y-4">
                {(steps || []).map((s, i) => (
                  <li
                    key={i}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-amber-100 dark:border-gray-800 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-none">
                        <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-semibold">
                          {i + 1}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{s.description}</p>
                        {s.time && <p className="mt-2 text-xs text-gray-500"> {s.time}</p>}
                      </div>
                    </div>
                  </li>
                ))}
                {(!recipe.steps || recipe.steps.length === 0) && (
                  <li className="text-sm text-gray-500">No instructions provided.</li>
                )}
              </ol>
            </section>
          </div>

          {images.length > 0 && (
            <section className="mt-6">
              <h3 className="text-md font-semibold mb-3">Gallery</h3>
              <div className="rounded-lg overflow-hidden">
                <RecipeGalleryClient images={images} title={title} />
              </div>
            </section>
          )}

          {recipe.notes && (
            <section className="mt-6">
              {/* <h3 className="text-md font-semibold mb-2">Notes</h3>
              <div className="prose dark:prose-invert max-w-none">
                <p>{recipe.notes}</p>
              </div> */}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
