"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
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
      products: " محصولات جلفا",
      Mazesta_Products: "محصولات مازستا",
      articles: "مقالات",
      recipes: "دستور پخت‌ها",
      doostane: "دوستانه با جلفا",
      news: "اخبار",
      about: "درباره ما",
      contact: "تماس با ما",
    },
    en: {
      home: "Home",
      products: "Products of Jolfa",
      Mazesta_Products: "Products of Mazesta",
      articles: "Articles",
      about: "About Us",
      contact: "Contact",
      recipes: "Recipes",
      doostane: "Friendly with Jolfa",
      news: "News",
    },
    ar: {
      home: "الرئيسية",
      products: "المنتجات جلفا",
      Mazesta_Products: "المنتجات مازستا",
      articles: "مقالات",
      recipes: "وصفات",
      about: "من نحن",
      contact: "اتصال",
      doostane: "ودية مع جلفا",
      news: "أخبار",
    },
    ru: {
      home: "Главная",
      products: "Продукция Jolfa",
      Mazesta_Products: "Продукция Mazesta",
      articles: "Статьи",
      recipes: "Рецепты",
      about: "О нас",
      contact: "Контакты",
      doostane: "Дружеские отношения с Джульфой",
      news: "Новости",
    },
    fr: {
      home: "Accueil",
      products: "Produits Jolfa",
      Mazesta_Products: "Produits Mazesta",
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

  useEffect(() => {
    // close menu on route change
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="nav flex justify-center items-center gap-1 w-full">
      <div className="container w-full flex items-center justify-between px-2">
        {/* Hamburger button for small screens */}
        <button
          onClick={() => setMobileOpen(true)}
          className="hamburger-btn btn btn-ghost p-1 order-1 md:order-none"
        >
          {/* Show white hamburger icon in dark mode, default in light mode */}
          <span className="block dark:hidden">
            <Image
              src="/Image/Hamburger_icon.png"
              alt="menu"
              width={28}
              height={28}
            />
          </span>
          <span className="hidden dark:block">
            <Image
              src="/Image/hamburger-png-white.png"
              alt="menu"
              width={35}
              height={35}
            />
          </span>
        </button>

        {/* Logo: centered between hamburger and language menu on mobile, left on desktop */}
        <div className="logo shrink-0 flex items-center justify-center md:justify-start order-2 md:order-none">
          <Link href={base}>
            <Image
              src="/Image/Jolfa-logo.png"
              alt="Jolfa Foods"
              width={180}
              height={54}
              priority
              sizes="(max-width: 360px) 90px, (max-width: 640px) 100px, (max-width: 768px) 140px, 180px"
              className="w-[90px] xs:w-[50px] sm:w-[100px] md:w-[110px] h-auto"
            />
          </Link>
        </div>

        {/* Language menu and desktop links */}
        <div className="flex items-center order-3 md:order-none">
          {/* Inline links for desktop screens (hidden under 1020px) */}
          <div className="desktop-links items-center gap-1 hidden md:flex">
            {/* Use a slightly smaller, cleaner style by default; tweak for Persian */}
            {(() => {
              const baseClass =
                "text-lg font-semibold text-white-800 hover:text-amber-700";
              const faAdjust =
                currentLang === "fa" ? "tracking-tight ms-1" : "";
              const linkClass = `${baseClass} ${faAdjust}`;
              return (
                <>
                  <Link href={base} className={linkClass}>
                    {labels.home}
                  </Link>
                  <Link href={`${base}/products`} className={linkClass}>
                    {labels.products}
                  </Link>
                  <Link href={`${base}/Mazesta_Products`} className={linkClass}>
                    {labels.Mazesta_Products}
                  </Link>
                  
                  {/* Doostane-ba-Jolfa dropdown */}
                  <div className="relative group">
                    <button className={`${linkClass} flex items-center gap-1`}>
                      {labels.doostane}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    
                    {/* Dropdown menu */}
                    <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link
                        href={`${base}/Doostane-ba-Jolfa/Articles`}
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-md"
                      >
                        {labels.articles}
                      </Link>
                      <Link
                        href={`${base}/Doostane-ba-Jolfa/recipes`}
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {labels.recipes}
                      </Link>
                      <Link
                        href={`${base}/Doostane-ba-Jolfa/News`}
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 last:rounded-b-md"
                      >
                        {labels.news}
                      </Link>
                    </div>
                  </div>
                  
                  <Link href={`${base}/About-us`} className={linkClass}>
                    {labels.about}
                  </Link>
                  <Link href={`${base}/Contact-us`} className={linkClass}>
                    {labels.contact}
                  </Link>
                </>
              );
            })()}
          </div>

          {/* زیبا سازی انتخاب زبان: دکمه‌ی دراپ‌داون */}
          <div className="relative ms-2">
            <button
              aria-haspopup="listbox"
              onClick={() => setOpen((s) => !s)}
              className="flex items-center px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-lg font-semibold"
            >
              {langNames[currentLang] || currentLang.toUpperCase()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
              <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg list-none p-1 z-50">
                <li>
                  <Link
                    href="/pages/fa"
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white ${
                      currentLang === "fa" ? "font-bold underline" : ""
                    }`}
                  >
                    فارسی
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/en"
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white ${
                      currentLang === "en" ? "font-bold underline" : ""
                    }`}
                  >
                    English
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/ar"
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white ${
                      currentLang === "ar" ? "font-bold underline" : ""
                    }`}
                  >
                    العربية
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/ru"
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white ${
                      currentLang === "ru" ? "font-bold underline" : ""
                    }`}
                  >
                    Русский
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/fr"
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white ${
                      currentLang === "fr" ? "font-bold underline" : ""
                    }`}
                  >
                    Français
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="ms-2 md:ms-4 lg:ms-6 flex items-center gap-3 sm:gap-4 md:gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="btn btn-ghost p-2"
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
            <div className="flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile slide-over menu */}
      {mobileOpen && (
        <div className="mobile-menu fixed  inset-0 z-50 flex items-stretch">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`relative h-full w-72 p-4 bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] ${
              ["fa", "ar"].includes(currentLang) ? "right-0" : "left-0"
            }`}
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <Link href={base} className="flex items-center gap-2">
                <Image
                  src="/Image/Jolfa-logo.png"
                  alt="Jolfa"
                  width={100}
                  height={32}
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="btn btn-ghost"
              >
                Close
              </button>
            </div>

            <nav className="flex flex-col gap-3 ">
              <Link
                href={base}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {labels.home}
              </Link>

              <Link
                href={`${base}/products`}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {labels.products}
              </Link>

              <Link
                href={`${base}/Mazesta_Products`}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {labels.Mazesta_Products}
              </Link>

              {/* Doostane-ba-Jolfa expandable menu */}
              <div>
                <button
                  onClick={() => setDoostaneOpen((s) => !s)}
                  className="w-full text-left py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between"
                >
                  {labels.doostane}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${
                      doostaneOpen ? "rotate-180" : ""
                    }`}
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
                {doostaneOpen && (
                  <div className="flex flex-col gap-2 ps-4 mt-2">
                    <Link
                      href={`${base}/Doostane-ba-Jolfa/Articles`}
                      onClick={() => {
                        setMobileOpen(false);
                        setDoostaneOpen(false);
                      }}
                      className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {labels.articles}
                    </Link>
                    <Link
                      href={`${base}/Doostane-ba-Jolfa/recipes`}
                      onClick={() => {
                        setMobileOpen(false);
                        setDoostaneOpen(false);
                      }}
                      className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {labels.recipes}
                    </Link>
                    <Link
                      href={`${base}/Doostane-ba-Jolfa/News`}
                      onClick={() => {
                        setMobileOpen(false);
                        setDoostaneOpen(false);
                      }}
                      className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {labels.news}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href={`${base}/About-us`}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {labels.about}
              </Link>
              <Link
                href={`${base}/Contact-us`}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {labels.contact}
              </Link>
            </nav>

            {/* <div className="mt-6">
              <div className="text-sm text-gray-500 mb-2">
                {labels.fa} / {labels.en} / {labels.ar}
              </div>
              <div className="flex gap-2">
                <Link
                  href="/pages/fa"
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-1 rounded hover:bg-gray-100"
                >
                  فارسی
                </Link>
                <Link
                  href="/pages/en"
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-1 rounded hover:bg-gray-100"
                >
                  English
                </Link>
                <Link
                  href="/pages/ar"
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-1 rounded hover:bg-gray-100"
                >
                  العربية
                </Link>
              </div>
            </div> */}
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
