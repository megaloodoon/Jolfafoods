import Link from 'next/link';

export default function DoostaneBaJolfaPage() {
  return (
    <main dir="rtl" className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-extrabold mb-6">ودود مع جلفا</h1>
      <ul className="space-y-3">
        <li>
          <Link href="/pages/ar/Doostane-ba-Jolfa/Articles" className="text-blue-600">
            مقالات
          </Link>
        </li>
        <li>
          <Link href="/pages/ar/Doostane-ba-Jolfa/recipes" className="text-blue-600">
            وصفات
          </Link>
        </li>
        <li>
          <Link href="/pages/ar/Doostane-ba-Jolfa/News" className="text-blue-600">
            أخبار
          </Link>
        </li>
      </ul>
    </main>
  );
}
