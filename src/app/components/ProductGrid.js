import Link from "next/link";

const getSubCategoryKey = (product, category) => {
  if (category === "cheese") {
    if ([1, 2, 3, 4].includes(product.id)) return "gratedCheese";
    if ([7, 8, 12, 9].includes(product.id)) return "blockCheese";
    return "otherCheese";
  }
  if (category === "cream") return "creams";
  return "allProducts";
};

export default function ProductGrid({
  products,
  currentLang,
  t,
  activeCategory,
}) {
  const getLocalizedTitle = (product) => {
    switch (currentLang) {
      case "en":
        return product.titleEn || product.name;
      case "ar":
        return product.titleAr || product.title;
      case "fr":
        return product.titleFr || product.title;
      case "ru":
        return product.titleRu || product.title;
      default:
        return product.title || product.name;
    }
  };

  const groupedProducts = products.reduce((acc, product) => {
    const subCatKey = getSubCategoryKey(product, activeCategory);
    if (!acc[subCatKey]) acc[subCatKey] = [];
    acc[subCatKey].push(product);
    return acc;
  }, {});

  if (products.length === 0) {
    return (
      <div className="text-center py-10 xs:py-20 text-[#1a4b8c] font-medium text-base xs:text-lg">
        {t.noProducts}
      </div>
    );
  }

  return (
    // تنظیم پدینگ برای سایزهای مختلف
    <div className="w-full py-5 max-w-7xl mx-auto px-4 xs:px-12 md:px-8 mt-6 xs:mt-10 mb-10 xs:mb-20 animate-fade-in-up">
      {Object.entries(groupedProducts).map(([subCategoryKey, items]) => (
        <div key={subCategoryKey} className="mb-10 xs:mb-16">
          {/* ریسپانسیو کردن سایز سرتیترها */}
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold text-[#1a4b8c] mb-6 xs:mb-8 border-b-2 border-[#1a4b8c]/20 pb-2 inline-block">
            {t[subCategoryKey]}
          </h2>

          {/* 
            ریسپانسیو کردن گرید محصولات:
            - پیش فرض (زیر 360): 1 ستون
            - xs (360 به بالا): 2 ستون
            - sm: 2 ستون
            - md: 3 ستون
            - lg: 4 ستون
            فاصله (gap) هم به تدریج بزرگتر می‌شود
          */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 md:gap-8 justify-items-center">
            {items.map((product) => (
              <Link
                key={product.id}
                href={`/pages/${currentLang}/products/${product.id}`}
                className="group flex flex-col w-full max-w-[320px] bg-white rounded-2xl xs:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 xs:hover:-translate-y-2 pb-4 xs:pb-6"
              >
                {/* تنظیم پدینگ عکس برای گوشی‌های کوچک */}
                <div className="relative aspect-square flex justify-center items-center p-4 xs:p-6 sm:p-8 bg-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col items-center justify-center px-3 xs:px-4 mt-auto">
                  {/* تنظیم سایز فونت عنوان محصول */}
                  <h3 className="font-bold text-center text-gray-800 text-base xs:text-lg sm:text-xl group-hover:text-[#1a4b8c] transition-colors line-clamp-2">
                    {getLocalizedTitle(product)}
                  </h3>

                  {/* دکمه */}
                  <button className="mt-3 xs:mt-4 bg-[#fdb714] text-white px-4 xs:px-6 py-1.5 rounded-full text-xs xs:text-sm font-bold shadow-md">
                    {currentLang === "fa"
                      ? "مشاهده بیشتر"
                      : currentLang === "en"
                        ? "Read More"
                        : currentLang === "ar"
                          ? "اقرأ المزيد"
                          : currentLang === "fr"
                            ? "Voir Plus"
                            : "Подробнее"}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
