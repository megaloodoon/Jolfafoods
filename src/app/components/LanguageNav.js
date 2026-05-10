"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GlobalSearch = dynamic(() => import("@/app/components/GlobalSearch"), {
  ssr: false,
});

export default function LanguageNav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [doostaneOpen, setDoostaneOpen] = useState(false);
  let currentLang = "fa";
  const segments = pathname.split("/").filter(Boolean);
  const supported = ["fa", "en", "ar", "ru", "fr"];
  if (segments[0] === "pages" && supported.includes(segments[1])) {
    currentLang = segments[1];
  } else if (supported.includes(segments[0])) {
    currentLang = segments[0];
  }

  const base = `/pages/${currentLang}`;

  const [searchOpen, setSearchOpen] = useState(false);

  const labels = {
    fa: {
      home: "خانه",
      products: "محصولات",
      articles: "مقالات",
      recipes: "دستور پخت‌ها",
      doostane: "دوستانه با جلفا",
      news: "اخبار",
      about: "درباره ما",
      contact: "تماس با ما",
    },
    en: {
      home: "Home",
      products: "Products",
      articles: "Articles",
      about: "About Us",
      contact: "Contact",
      recipes: "Recipes",
      doostane: "Friendly with Jolfa",
      news: "News",
    },
    ar: {
      home: "الرئيسية",
      products: "منتجات",
      articles: "مقالات",
      recipes: "وصفات",
      about: "من نحن",
      contact: "اتصال",
      doostane: "ودية مع جلفا",
      news: "أخبار",
    },
    ru: {
      home: "Главная",
      products: "Продукция",
      articles: "Статьи",
      recipes: "Рецепты",
      about: "О нас",
      contact: "Контакты",
      doostane: "Дружеские отношения с Джульфой",
      news: "Новости",
    },
    fr: {
      home: "Accueil",
      products: "Produits",
      articles: "Articles",
      recipes: "Recettes",
      about: "À propos",
      contact: "Contact",
      doostane: "Amical avec Jolfa",
      news: "Actualités",
    },
  }[currentLang];

  const langNames = {
    fa: "فارسی",
    en: "English",
    ar: "العربية",
    ru: "Русский",
    fr: "Français",
  };

  const isRtl = ["fa", "ar"].includes(currentLang);

  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <nav className="nav w-full bg-[#1a4b8c] text-white py-4 relative z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between min-h-[40px]">
        {/* === بخش چپ === */}
        <div className="flex-1 flex items-center justify-start lg:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Image
              src="/Image/hamburger-png-white.png"
              alt="menu"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="hidden lg:flex flex-1 gap-8 items-center justify-start">
          <Link
            href={`${base}/Contact-us`}
            className="font-semibold text-base text-white hover:text-blue-200 transition-colors"
          >
            {labels.contact}
          </Link>
          <Link
            href={`${base}/About-us`}
            className="font-semibold text-base text-white hover:text-blue-200 transition-colors"
          >
            {labels.about}
          </Link>
        </div>

        {/* === بخش مرکزی (لوگو) === */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-[60]">
          <Link href={base} className="block">
            <Image
              src="/Image/Jolfa-logo.png"
              alt="Jolfa Foods"
              width={140}
              height={70}
              priority
              className="w-[100px] md:w-[140px] h-auto object-contain drop-shadow-xl"
            />
          </Link>
        </div>

        {/* === بخش راست === */}
        <div className="hidden lg:flex flex-1 gap-6 items-center justify-end">
          <Link
            href={`${base}/products`}
            className="font-semibold text-base text-white hover:text-blue-200 transition-colors"
          >
            {labels.products}
          </Link>

          {/* دراپ‌داون دوستانه با جلفا (دسکتاپ) */}
          <div className="relative group">
            <Link
              href={`${base}/Doostane-ba-Jolfa`}
              className="font-semibold text-base text-white hover:text-blue-200 transition-colors flex items-center gap-1 py-2"
            >
              {labels.doostane}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.064a.75.75 0 111.12 1l-4.25 4.66a.75.75 0 01-1.12 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* زیرمنوهای دسکتاپ */}
            <ul className="absolute right-0 mt-0 w-48 bg-white text-[#1a4b8c] rounded-lg shadow-xl list-none py-2 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <li>
                <Link
                  href={`${base}/Doostane-ba-Jolfa/Articles`}
                  className="block px-4 py-2 text-sm hover:bg-[#f0f4f8] transition-colors"
                >
                  {labels.articles}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/Doostane-ba-Jolfa/recipes`}
                  className="block px-4 py-2 text-sm hover:bg-[#f0f4f8] transition-colors"
                >
                  {labels.recipes}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/Doostane-ba-Jolfa/News`}
                  className="block px-4 py-2 text-sm hover:bg-[#f0f4f8] transition-colors"
                >
                  {labels.news}
                </Link>
              </li>
            </ul>
          </div>

          {/* دراپ‌داون زبان */}
          <div className="relative">
            <button
              aria-haspopup="listbox"
              onClick={() => setOpen((s) => !s)}
              className="font-semibold text-base text-white hover:text-blue-200 transition-colors flex items-center gap-1"
            >
              Language
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.064a.75.75 0 111.12 1l-4.25 4.66a.75.75 0 01-1.12 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {open && (
              <ul className="absolute right-0 mt-3 w-32 bg-white text-gray-800 rounded-lg shadow-xl list-none py-2 z-50 border border-gray-100">
                {Object.keys(langNames).map((langCode) => (
                  <li key={langCode}>
                    <Link
                      href={`/pages/${langCode}`}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentLang === langCode
                          ? "font-bold text-[#1a4b8c] bg-blue-50"
                          : ""
                      }`}
                    >
                      {langNames[langCode]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="p-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 lg:hidden items-center justify-end">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* منوی کشویی موبایل */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex" dir={isRtl ? "rtl" : "ltr"}>
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`relative w-[80%] max-w-[320px] h-full bg-white text-[#1a4b8c] shadow-2xl flex flex-col ${isRtl ? "right-0" : "left-0"}`}
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#1a4b8c] text-white">
              <Image
                src="/Image/Jolfa-logo.png"
                alt="Jolfa"
                width={90}
                height={30}
                className="object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
              {[
                { href: base, label: labels.home },
                { href: `${base}/products`, label: labels.products },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 rounded-xl font-medium hover:bg-[#f0f4f8] transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-b border-gray-100 my-2 py-2">
                <button
                  onClick={() => setDoostaneOpen((s) => !s)}
                  className="w-full text-start py-3 px-4 rounded-xl font-medium hover:bg-[#f0f4f8] transition-colors flex items-center justify-between"
                >
                  {labels.doostane}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${doostaneOpen ? "rotate-180 text-blue-600" : "text-gray-400"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.064a.75.75 0 111.12 1l-4.25 4.66a.75.75 0 01-1.12 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${doostaneOpen ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  {[
                    {
                      href: `${base}/Doostane-ba-Jolfa/Articles`,
                      label: labels.articles,
                    },
                    {
                      href: `${base}/Doostane-ba-Jolfa/recipes`,
                      label: labels.recipes,
                    },
                    {
                      href: `${base}/Doostane-ba-Jolfa/News`,
                      label: labels.news,
                    },
                  ].map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 ${isRtl ? "pr-8" : "pl-8"} px-4 text-sm rounded-lg hover:bg-[#f0f4f8] text-gray-700 transition-colors`}
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              </div>

              {[
                { href: `${base}/About-us`, label: labels.about },
                { href: `${base}/Contact-us`, label: labels.contact },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 rounded-xl font-medium hover:bg-[#f0f4f8] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="text-sm text-gray-500 mb-3 font-medium">
                Select Language:
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.keys(langNames).map((langCode) => (
                  <Link
                    key={langCode}
                    href={`/pages/${langCode}`}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${currentLang === langCode ? "border-[#1a4b8c] bg-[#1a4b8c] text-white" : "border-gray-200 hover:border-[#1a4b8c] text-gray-700"}`}
                  >
                    {langNames[langCode]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <GlobalSearch
        locale={currentLang}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </nav>
  );
}
