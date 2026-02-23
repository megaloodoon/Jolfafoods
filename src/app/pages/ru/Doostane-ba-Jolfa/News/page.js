export default function NewsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Новости Doostane-ba-Jolfa</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Следите за последними новостями и событиями Jolfa Iran.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-amber-500">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Скоро...</h2>
          <p className="text-gray-600 dark:text-gray-400">Новые статьи будут опубликованы в скором времени.</p>
        </div>
      </div>
    </main>
  );
}
