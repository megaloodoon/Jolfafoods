"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const SECTION_TITLE = {
  fa: "تازه‌ترین محصولات",
  ar: "أحدث المنتجات",
  en: "Latest Products",
  fr: "Derniers Produits",
  ru: "Последние Продукты",
};

const PRODUCTS_DATA = [
  {
    id: "cheddar-sauce",
    image: "/Image/New/LatestProducts-first.png",
    textBox: {
      top: "28%",
      left: "52%",
      width: "38%",
      mdWidth: "32%",
    },
    lang: {
      fa: {
        title: "سس پنیر پیتزای پروسس چدار",
        desc: "طعم بی‌نظیر و اصیل چدار، انتخابی عالی برای لذیذتر کردن انواع پیتزا و ساندویچ.",
      },
      en: {
        title: "Cheddar Pizza Cheese Sauce",
        desc: "Authentic cheddar flavor perfect for pizzas.",
      },
      ar: {
        title: "صلصة جبن الشيدر للبيتزا",
        desc: "نكهة شيدر أصلية مثالية للبيتزا.",
      },
      fr: {
        title: "Sauce cheddar pour pizza",
        desc: "Saveur cheddar authentique parfaite pour les pizzas.",
      },
      ru: {
        title: "Сырный соус чеддер для пиццы",
        desc: "Аутентичный вкус чеддера, идеально подходящий для пиццы.",
      },
    },
  },
  {
    id: "cream",
    image: "/Image/New/LatestProducts-second.png",
    textBox: {
      top: "30%",
      left: "5%",
      width: "40%",
      mdWidth: "34%",
    },
    lang: {
      fa: {
        title: "خامه پاستوریزه پرچرب",
        desc: "تهیه شده از شیر تازه گاو مناسب صبحانه و دسر.",
      },
      en: {
        title: "Full Fat Cream",
        desc: "Premium cream made from fresh milk.",
      },
      ar: {
        title: "قشطة كاملة الدسم",
        desc: "قشطة فاخرة مصنوعة من الحليب الطازج.",
      },
      fr: {
        title: "Crème entière",
        desc: "Crème premium à base de lait frais.",
      },
      ru: {
        title: "Жирные сливки",
        desc: "Премиальные сливки из свежего молока.",
      },
    },
  },
  {
    id: "pizza-sauce",
    image: "/Image/New/LatestProducts-third.png",
    textBox: {
      top: "32%",
      left: "55%",
      rtlLeft: "50%",
      width: "38%",
      mdWidth: "30%",
    },
    lang: {
      fa: {
        title: "سس پنیر پیتزای پروسس",
        desc: "بافتی نرم و کشدار با طعمی ملایم مناسب انواع غذاهای فست فودی.",
      },
      en: {
        title: "Pizza Processed Cheese Sauce",
        desc: "Soft texture perfect for fast food.",
      },
      ar: {
        title: "صلصة جبن البيتزا المطبوخة",
        desc: "قوام ناعم ومطاطي مثالي للوجبات السريعة.",
      },
      fr: {
        title: "Sauce fromage fondu pour pizza",
        desc: "Texture douce et fondante idéale pour le fast-food.",
      },
      ru: {
        title: "Плавленый сырный соус для пиццы",
        desc: "Мягкая текстура, идеально подходит для фастфуда.",
      },
    },
  },
  {
    id: "grill-cheese",
    image: "/Image/New/LatestProducts-forth.png",
    special: true,
    lang: {
      fa: {
        title: "پنیر موزارلا کبابی",
        desc: "پنیر موزارلا کبابی جلفا نوعی پنیر فرآوری‌شده بر پایه موزارلاست که به‌گونه‌ای فرمولاسیون شده تا در برابر حرارت مستقیم پایداری بافتی داشته باشد. این پنیر با حرارت دچار آب‌اندازی یا ذوب بیش از حد نمی‌گردد بلکه به صورت یکنواخت نرم و...",
      },
      en: {
        title: "Grill Mozzarella",
        desc: "Perfect for grilling without losing texture or melting excessively.",
      },
      ar: {
        title: "موزاريلا للشواء",
        desc: "مثالية للشواء دون فقدان القوام أو الذوبان المفرط.",
      },
      fr: {
        title: "Mozzarella à griller",
        desc: "Parfaite pour griller sans perdre sa texture ni fondre excessivement.",
      },
      ru: {
        title: "Моцарелла для гриля",
        desc: "Идеально подходит для жарки на гриле без потери текстуры.",
      },
    },
  },
];

const GALLERY_DATA = [
  {
    id: "g1",
    image: "/Image/New/LatestProducts-gallery1.png",
    lang: {
      fa: "پنیر خامه ای",
      en: "Cream Cheese",
      ar: "جبنة كريمية",
      fr: "Fromage à la crème",
      ru: "Сливочный сыр",
    },
  },
  {
    id: "g2",
    image: "/Image/New/LatestProducts-gallery2.png",
    lang: {
      fa: "پنیر پیتزا",
      en: "Pizza Cheese",
      ar: "جبنة بيتزا",
      fr: "Fromage pizza",
      ru: "Сыр для пиццы",
    },
  },
  {
    id: "g3",
    image: "/Image/New/LatestProducts-gallery3.png",
    lang: {
      fa: "کره حیوانی",
      en: "Butter",
      ar: "زبدة",
      fr: "Beurre",
      ru: "Сливочное масло",
    },
  },
];

export default function LatestProducts({ lang = "fa" }) {
  const rtl = ["fa", "ar"].includes(lang);

  return (
    <section className="w-full py-6 sm:py-16 overflow-hidden">
      <div
        className="max-w-7xl mx-auto px-4 space-y-10 md:space-y-16 bg-center"
        style={{
          backgroundImage:
            "url('/Image/New/Backgrounds/LatestProducts-pattern-background3.svg')",
          backgroundSize:
            "50%" /* این مقدار را می‌توانید به درصد یا پیکسل مثل 300px تغییر دهید */,
        }}
      >
        {/* Title */}
        <div
          className="relative text-center w-full flex items-center justify-center bg-center bg-no-repeat bg-contain py-4 sm:py-8 md:py-12"
          style={{
            backgroundImage: "url('/Image/New/Backgrounds/Home-recepie.png')",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a4b8c] drop-shadow-sm">
            {SECTION_TITLE[lang] || SECTION_TITLE.en}
          </h2>
        </div>

        {PRODUCTS_DATA.map((p) => {
          const t = p.lang[lang] || p.lang.en; // Fallback به انگلیسی در صورت نبود زبان

          if (p.special) {
            return (
              <div
                key={p.id}
                className="flex flex-col items-center pt-4 md:pt-10"
              >
                <img
                  src={p.image}
                  className="w-full max-w-4xl z-10 relative"
                  alt={t.title}
                />
                <div
                  className="w-full max-w-6xl p-6 sm:p-16 text-center flex flex-col justify-center min-h-[180px] sm:min-h-[220px] xs:mt-4 mt-10 sm:mt-8 pt-16 sm:pt-32 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/Image/New/LatestProducts-Grill-mozarella-background.png')",
                  }}
                >
                  <h3 className="text-xl sm:text-3xl font-bold text-[#c4122f] mb-2 sm:mb-4 drop-shadow-sm">
                    {t.title}
                  </h3>
                  <p className="text-gray-900 font-kalame text-xs sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm max-w-4xl mx-auto">
                    {t.desc}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={p.id}
              className="relative w-full bg-cover"
              style={{
                backgroundImage:
                  "url('/Image/New/Backgrounds/LatestProducts-pattern-background.svg')",
              }}
            >
              <img src={p.image} className="w-full h-auto" alt={t.title} />

              <div
                className="absolute flex flex-col gap-1 sm:gap-4"
                style={{
                  top: p.textBox.top,
                  left:
                    rtl && p.textBox.rtlLeft
                      ? p.textBox.rtlLeft
                      : p.textBox.left,
                }}
              >
                <div className="w-[38vw] md:w-[32vw] lg:w-[28vw] max-w-md">
                  <h3
                    className={`font-bold text-[9px] min-[400px]:text-[11px] sm:text-[18px] lg:text-[28px] text-[#1a4b8c] leading-tight sm:leading-normal mb-1 sm:mb-2 ${rtl ? "text-right" : "text-left"}`}
                  >
                    {t.title}
                  </h3>

                  <p
                    className={`text-[8px] min-[400px]:text-[10px] sm:text-[14px] lg:text-[18px] text-gray-700 leading-tight sm:leading-relaxed ${rtl ? "text-right" : "text-left"}`}
                  >
                    {t.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Swiper Gallery */}
        <div
          className="pt-10 md:pt-16 relative px-4 sm:px-12 xs:pt-[6px] bg-cover"
          style={{
            backgroundImage:
              "url('/Image/New/Backgrounds/LatestProducts-pattern-background2.svg')",
          }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-10"
          >
            {GALLERY_DATA.map((g) => {
              const galleryTitle = g.lang[lang] || g.lang.en;
              return (
                <SwiperSlide key={g.id}>
                  <div className="rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <img
                      src={g.image}
                      className="w-full h-full xs:h-[450px] sm:h-[500px] md:h-[600px] lg:h-[650px] xxlg:h-full xxlg:w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-3xl"
                      alt={galleryTitle}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
