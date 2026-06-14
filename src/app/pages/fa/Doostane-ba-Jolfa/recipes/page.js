import path from 'path';
import { readFile } from 'fs/promises';
import RecipesSwiperGridClient from '@/app/components/RecipesSwiperGridClientFa';

export default async function RecipesPage() {
  const file = path.join(process.cwd(), 'data', 'db.json');
  const raw = await readFile(file, 'utf8');
  const data = JSON.parse(raw);
  const recipes = data.recipes || [];

  return (
    // محدودیت‌های عرض و پدینگ حذف شدند تا کامپوننت بتواند تمام‌عرض شود
    <main dir="rtl" className="w-full">
      {/* توجه: کامپوننت شما خودش عنوان دارد، در صورت عدم نیاز این خط را حذف کنید */}
      {/* <h1 className="text-3xl font-extrabold mb-6 px-6">دستور پخت‌ها</h1> */}
      
      <RecipesSwiperGridClient recipes={recipes} locale="fa" />
    </main>
  );
}
