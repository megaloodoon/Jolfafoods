import Link from 'next/link';

export default function DoostaneBaJolfaPage() {
  return (
    <main dir="ltr" className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-extrabold mb-6">Friendly with Jolfa</h1>
      <ul className="space-y-3">
        <li>
          <Link href="/pages/en/Doostane-ba-Jolfa/Articles" className="text-blue-600">
            Articles
          </Link>
        </li>
        <li>
          <Link href="/pages/en/Doostane-ba-Jolfa/recipes" className="text-blue-600">
            Recipes
          </Link>
        </li>
        <li>
          <Link href="/pages/en/Doostane-ba-Jolfa/News" className="text-blue-600">
            News
          </Link>
        </li>
      </ul>
    </main>
  );
}
