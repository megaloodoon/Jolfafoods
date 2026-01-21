import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <div
        className="hero-section relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('/Image/Jolfa-logo2.png')" }}
      >
        <div className="hero-overlay absolute inset-0 bg-black/40"></div>
        <div className="hero-content relative z-10 text-center mt-20 px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="hero-title mt-7 text-4xl md:text-3xl font-bold mb-8 text-white">
            Select your language
          </h1>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pages/en"
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              English
            </Link>
            <Link
              href="/pages/ar"
              className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              العربية
            </Link>
            <Link
              href="/pages/fa"
              className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              فارسی
            </Link>
            <Link
              href="/pages/fr"
              className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              Français
            </Link>
            <Link
              href="/pages/ru"
              className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              Русский
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
