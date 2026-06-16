"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import LatestProducts from "./LatestProducts";
import CategoryNav from "./CategoryNav";
import ProductGrid from "./ProductGrid";

const DICTIONARY = {
  fa: {
    cheese: "پنیر",
    sauce: "سس",
    butter: "کره",
    cream: "خامه",
    loading: "در حال بارگذاری...",
    noProducts: "محصولی یافت نشد.",
    gratedCheese: "پنیرهای رنده شده",
    blockCheese: "پنیرهای قالبی",
    otherCheese: "سایر پنیرها",
    creams: "خامه‌ها",
    sauces: "سس‌ها",
    butters: "کره‌ها",
    allProducts: "محصولات",
  },
  en: {
    cheese: "Cheese",
    sauce: "Sauce",
    butter: "Butter",
    cream: "Cream",
    loading: "Loading...",
    noProducts: "No products found.",
    gratedCheese: "Grated Cheeses",
    blockCheese: "Block Cheeses",
    otherCheese: "Other Cheeses",
    creams: "Creams",
    sauces: "Sauces",
    butters: "Butters",
    allProducts: "Products",
  },
  ar: {
    cheese: "جبنة",
    sauce: "صلصة",
    butter: "زبدة",
    cream: "قشطة",
    loading: "جارٍ التحميل...",
    noProducts: "لم يتم العثور على منتجات.",
    gratedCheese: "جبن مبشور",
    blockCheese: "جبن قوالب",
    otherCheese: "أجبان أخرى",
    creams: "قشطة",
    sauces: "صلصات",
    butters: "زبدة",
    allProducts: "منتجات",
  },
  fr: {
    cheese: "Fromage",
    sauce: "Sauce",
    butter: "Beurre",
    cream: "Crème",
    loading: "Chargement...",
    noProducts: "Aucun produit trouvé.",
    gratedCheese: "Fromages Râpés",
    blockCheese: "Fromages en Bloc",
    otherCheese: "Autres Fromages",
    creams: "Crèmes",
    sauces: "Sauces",
    butters: "Beurres",
    allProducts: "Produits",
  },
  ru: {
    cheese: "Сыр",
    sauce: "Соус",
    butter: "Масло",
    cream: "Сливки",
    loading: "Загрузка...",
    noProducts: "Продукты не найдены.",
    gratedCheese: "Тертый Сыр",
    blockCheese: "Кусковой Сыр",
    otherCheese: "Другие Сыры",
    creams: "Сливки",
    sauces: "Соусы",
    butters: "Масла",
    allProducts: "Продукты",
  },
};

const getProductCategory = (id) => {
  const numId = parseInt(String(id).match(/\d+/)?.[0]);
  if ([1, 2, 3, 4, 7, 8, 9, 12, 14].includes(numId)) return "cheese";
  if ([5, 6].includes(numId)) return "sauce";
  if ([10, 13].includes(numId)) return "cream";
  if ([11].includes(numId)) return "butter";
  return "other";
};

export default function Productsj({ lang = "fa" }) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || null;
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentLang = typeof lang === "string" ? lang : "fa";
  const t = DICTIONARY[currentLang] || DICTIONARY["fa"];

  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products || data;
        const formatted = productList.map((p) => ({
          ...p,
          category: p.category || getProductCategory(p.id),
        }));
        setProducts(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : [];

  return (
    <section
      className={`w-full flex flex-col items-center transition-all duration-500 min-h-screen ${
        activeCategory
          ? "bg-[#d8e6fe] pt-1 xs:pt-1 sm:pt-2 md:pt-2 lg:pt-2"
          : "bg-white -mt-4 sm:-mt-8"
      }`}
    >
      <CategoryNav
        currentLang={currentLang}
        t={t}
        showBanner={!activeCategory}
      />

      {!activeCategory && <LatestProducts lang={currentLang} />}

      {activeCategory &&
        (loading ? (
          <div className="text-center py-20 text-[#1a4b8c] font-medium">
            {t.loading}
          </div>
        ) : (
          <ProductGrid
            products={filteredProducts}
            currentLang={currentLang}
            t={t}
            activeCategory={activeCategory}
          />
        ))}

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
