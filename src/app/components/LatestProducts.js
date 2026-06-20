"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ScrollReveal from "@/app/components/ScrollReveal"; // ایمپورت کامپوننت انیمیشن

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
      width: "42%",
    },
    lang: {
      fa: {
        title: "سس پنیر پیتزای پروسس چدار",
        desc: "سس پنیر چدار جلفا یک تجربه‌ی فوق‌العاده است که به تنهایی می‌تواند استانداردهای یک دورهمی یا میزبانی حرفه‌ای را ارتقا دهد. این سس، فراتر از یک چاشنی ساده، یک کاتالیزور طعم برای انواع تنقلات، فست‌فودهای مدرن و حتی بشقاب‌های لذیذ خانگی می باشد که بر پایه‌ی پنیر چدار اصیل، با بافتی یکنواخت و مخملی تولید می گردد.",
      },
      en: {
        title: "Cheddar Pizza Cheese Sauce",
        desc: "Jolfa Cheddar Cheese Sauce is an extraordinary experience that can single-handedly elevate the standards of any gathering or professional hosting. More than just a simple condiment, this sauce acts as a flavor catalyst for various snacks, modern fast foods, and even delicious homemade dishes, produced from authentic cheddar cheese with a smooth and velvety texture.",
      },
      ar: {
        title: "صلصة جبن الشيدر للبيتزا",
        desc: "صلصة جبن الشيدر من جلفا هي تجربة استثنائية يمكنها بمفردها الارتقاء بمعايير أي تجمع أو ضيافة احترافية. هذه الصلصة هي أكثر من مجرد تتبيلة بسيطة، فهي محفز للنكهة لأنواع الوجبات الخفيفة والوجبات السريعة الحديثة وحتى الأطباق المنزلية الشهية، حيث تُنتج من جبن الشيدر الأصلي بقوام متجانس ومخملي.",
      },
      fr: {
        title: "Sauce cheddar pour pizza",
        desc: "La sauce au fromage cheddar Jolfa est une expérience extraordinaire qui peut à elle seule élever les standards de toute réunion ou réception professionnelle. Bien plus qu'un simple condiment, cette sauce agit comme un catalyseur de saveurs pour divers snacks, fast-foods modernes et même de délicieux plats faits maison, produite à partir de véritable fromage cheddar avec une texture lisse et veloutée.",
      },
      ru: {
        title: "Сырный соус чеддер для пиццы",
        desc: "Сырный соус Чеддер от Jolfa — это необыкновенный опыт, который сам по себе способен поднять стандарты любой вечеринки или профессионального приема. Этот соус — больше чем просто приправа, это катализатор вкуса для закусок, современного фаст-фуда и изысканных домашних блюд, созданный на основе настоящего сыра чеддер с однородной бархатистой текстурой.",
      },
    },
  },
  {
    id: "cream",
    image: "/Image/New/LatestProducts-second.png",
    textBox: {
      top: "30%",
      left: "5%",
      width: "42%",
    },
    lang: {
      fa: {
        title: "خامه پاستوریزه پرچرب",
        desc: "خامه جلفا محصولی باکیفیت و اصیل است که با بافت نرم و طعم طبیعی خود، تجربه متفاوتی را در آشپزی رقم می‌زند. این خامه با ایجاد بافتی نرم و لطیف در انواع پاستا، سوپ‌ها و سس‌ها، انتخابی ایده‌آل برای ارتقای طعم غذاهاست. همچنین در صنعت شیرینی‌پزی و تولید بستنی، گزینه‌ای بی‌نقص برای دستیابی به ساختاری کرمی و کیفیتی ماندگار محسوب می‌شود.",
      },
      en: {
        title: "Full Fat Cream",
        desc: "Jolfa Cream is a high-quality and authentic product that, with its soft texture and natural taste, creates a unique culinary experience. By providing a smooth and delicate texture in various pastas, soups, and sauces, it is an ideal choice for enhancing food flavors. Furthermore, in the confectionery and ice cream industry, it is a perfect option for achieving a creamy structure and lasting quality.",
      },
      ar: {
        title: "قشطة كاملة الدسم",
        desc: "كريمة جلفا هي منتج عالي الجودة وأصيل، يخلق تجربة طهي مختلفة بفضل قوامها الناعم وطعمها الطبيعي. تُعد هذه الكريمة خياراً مثالياً لتحسين نكهة الأطعمة من خلال إضفاء قوام ناعم ولطيف على أنواع الباستا والشوربات والصلصات. كما تُعتبر خياراً لا يشوبه شائبة في صناعة الحلويات والآيس كريم للحصول على بنية كريمية وجودة تدوم طويلاً.",
      },
      fr: {
        title: "Crème entière",
        desc: "La crème Jolfa est un produit authentique et de haute qualité qui, grâce à sa texture douce et son goût naturel, crée une expérience culinaire unique. En apportant une texture lisse et délicate aux pâtes, soupes et sauces, elle est le choix idéal pour rehausser les saveurs. De plus, dans l'industrie de la pâtisserie et des glaces, c'est une option parfaite pour obtenir une structure crémeuse et une qualité durable.",
      },
      ru: {
        title: "Жирные сливки",
        desc: "Сливки Jolfa — это высококачественный и аутентичный продукт, который благодаря своей мягкой текстуре и натуральному вкусу создает уникальный кулинарный опыт. Обеспечивая нежную консистенцию в пастах, супах и соусах, они являются идеальным выбором для улучшения вкуса блюд. Кроме того, в кондитерской промышленности и производстве мороженого это безупречный вариант для достижения кремовой структуры и неизменного качества.",
      },
    },
  },
  {
    id: "pizza-sauce",
    image: "/Image/New/LatestProducts-third.png",
    textBox: {
      top: "32%",
      left: "52%",
      rtlLeft: "50%",
      width: "42%",
    },
    lang: {
      fa: {
        title: "سس پنیر پیتزای پروسس",
        desc: "سس پنیر پیتزای پروسس با فرمولاسیونی خاص، طعم‌دهنده‌ای ایده‌آل برای ارتقای مزه‌ی ساندویچ‌ها، همبرگرها و انواع اسنک‌هاست. پنیر پروسس به کار رفته در این محصول ضمن ایجاد طعمی عمیق و ماندگار، منبعی غنی از کلسیم و پروتئین‌های لبنی ضروری است و مصرف آن علاوه بر تأمین انرژی روزانه، نقش مؤثری در تقویت سلامت استخوان‌ها و بهبود تغذیه ایفا می‌کند.",
      },
      en: {
        title: "Pizza Processed Cheese Sauce",
        desc: "Processed Pizza Cheese Sauce, with its special formulation, is an ideal flavor enhancer for elevating the taste of sandwiches, hamburgers, and various snacks. The processed cheese used in this product, while creating a deep and lasting flavor, is a rich source of calcium and essential dairy proteins, and its consumption plays an effective role in strengthening bone health and improving nutrition, in addition to providing daily energy.",
      },
      ar: {
        title: "صلصة جبن البيتزا المطبوخة",
        desc: "تعتبر صلصة جبن البيتزا المطبوخة (البروسس)، بتركيبتها الخاصة، نكهة مثالية لتحسين طعم السندويشات والبرغر ومختلف أنواع الوجبات الخفيفة. إن جبن البروسس المستخدم في هذا المنتج، إلى جانب منحه طعماً عميقاً ومستداماً، يعد مصدراً غنياً بالكالسيوم وبروتينات الحليب الأساسية، ويلعب استهلاكه دوراً فعالاً في تعزيز صحة العظام وتحسين التغذية، بالإضافة إلى توفير الطاقة اليومية.",
      },
      fr: {
        title: "Sauce fromage fondu pour pizza",
        desc: "La sauce au fromage fondu pour pizza, avec sa formulation spéciale, est un rehausseur de goût idéal pour sublimer les sandwichs, les hamburgers et divers snacks. Le fromage fondu utilisé dans ce produit, tout en créant une saveur profonde et persistante, est une source riche en calcium et en protéines laitières essentielles, et sa consommation joue un rôle efficace dans le renforcement de la santé osseuse et l'amélioration de la nutrition, en plus de fournir l'énergie quotidienne.",
      },
      ru: {
        title: "Плавленый сырный соус для пиццы",
        desc: "Соус из плавленного сыра для пиццы благодаря своей специальной рецептуре является идеальным усилителем вкуса для сэндвичей, гамбургеров и различных закусок. Плавленый сыр, используемый в этом продукте, создавая глубокий и стойкий вкус, является богатым источником кальция и необходимых молочных белков, а его употребление играет важную роль в укреплении здоровья костей и улучшении питания, помимо обеспечения организма ежедневной энергией.",
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
        desc: "پنیر موزارلا کبابی جلفا، ترکیبی برگزیده، مغذی و هیجان‌انگیز است که حال و هوای باربیکیو و دورهمی‌های فضای باز را دگرگون می‌کند. این پنیر بهترین انتخاب برای سرو در کنار انواع سبزیجات گریل شده، استیک‌ها و حتی به عنوان یک میان‌وعده مستقل و گرم می‌باشد. این پنیر  بر پایه‌ی شیر تازه و با تکنولوژی پیشرفته تولید شده که دارای بافتی منسجم است و در اثر حرارت، لایه‌ی بیرونی آن ترد و طلایی شده در حالی که مغز آن نرم و لذیذ باقی می‌ماند.همچنین به دلیل فرآیند پخت اختصاصی، جایگزینی عالی برای پروتئین‌های گوشتی در رژیم‌های گیاه‌خواری محسوب می‌شود",
      },
      en: {
        title: "Grill Mozzarella",
        desc: "Jolfa Grilled Mozzarella Cheese is a selected, nutritious, and exciting combination that transforms the atmosphere of barbecues and outdoor gatherings. It is an excellent choice to serve alongside a variety of grilled vegetables, steaks, or even as a warm, standalone snack.Produced from fresh milk using advanced technology, this cheese features a firm and cohesive texture. When exposed to heat, its outer layer becomes crispy and golden, while the inside remains soft and delicious. Thanks to its specialized cooking process, it is also considered an excellent alternative to meat proteins in vegetarian diets.",
      },
      ar: {
        title: "موزاريلا للشواء",
        desc: "جبن الموزاريلا المشوي من «جلفا» هو مزيج مختار بعناية، مغذٍ ومثير، يغيّر أجواء حفلات الشواء والتجمعات في الهواء الطلق. يُعد هذا الجبن الخيار الأمثل للتقديم إلى جانب مختلف أنواع الخضروات المشوية، وشرائح الستيك، وحتى كوجبة خفيفة مستقلة تُقدَّم ساخنة.يُنتَج هذا الجبن من الحليب الطازج وباستخدام تكنولوجيا متقدمة، مما يمنحه قواماً متماسكاً. وعند تعريضه للحرارة، تصبح طبقته الخارجية مقرمشة وذهبية اللون، بينما يبقى قلبه طرياً ولذيذاً. وبفضل عملية الطهي الخاصة، يُعتبر بديلاً ممتازاً للبروتينات الحيوانية في الأنظمة الغذائية النباتية",
      },
      fr: {
        title: "Mozzarella à griller",
        desc: "La mozzarella grillée Jolfa est une combinaison soigneusement sélectionnée, nutritive et enthousiasmante qui transforme l’ambiance des barbecues et des rassemblements en plein air. Elle constitue un choix idéal pour accompagner divers légumes grillés, des steaks, ou même pour être dégustée chaude comme en-cas indépendant.Produite à partir de lait frais grâce à une technologie avancée, cette mozzarella présente une texture ferme et homogène. Sous l’effet de la chaleur, sa couche extérieure devient croustillante et dorée, tandis que son cœur reste tendre et savoureux. Grâce à son procédé de cuisson spécifique, elle représente également une excellente alternative aux protéines carnées dans les régimes végétariens.",
      },
      ru: {
        title: "Моцарелла для гриля",
        desc: "Жареная моцарелла «Jolfa» — это отборное, питательное и впечатляющее сочетание, которое преображает атмосферу барбекю и встреч на свежем воздухе. Этот сыр идеально подходит для подачи с различными овощами на гриле, стейками или даже в качестве самостоятельной горячей закуски.Продукт производится из свежего молока с использованием передовых технологий и обладает плотной, цельной текстурой. Под воздействием тепла его внешняя поверхность становится хрустящей и золотистой, тогда как сердцевина остаётся мягкой и аппетитной. Благодаря специальному процессу приготовления он также считается отличной альтернативой мясным белкам в вегетарианских рационах.",
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
            "url('/Image/New/Backgrounds/LatestProducts-pattern-background5.svg')",
          backgroundSize: "50%",
        }}
      >
        {/* Title */}
        <ScrollReveal animation="fade-down" duration={800}>
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
        </ScrollReveal>

        {PRODUCTS_DATA.map((p, index) => {
          const t = p.lang[lang] || p.lang.en;

          if (p.special) {
            return (
              <ScrollReveal key={p.id} animation="fade-up" delay={index * 100}>
                <div className="flex flex-col items-center pt-4 md:pt-10">
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
                    <div className="-mt-8 xs:-mt-10 sm:-mt-20 md:-mt-24">
                      <h3 className="text-xl sm:text-3xl font-bold text-[#c4122f] mb-2 sm:mb-4 drop-shadow-sm">
                        {t.title}
                      </h3>
                      <p className="text-gray-900 font-kalame text-xs sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm max-w-4xl mx-auto">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          }

          return (
            <ScrollReveal key={p.id} animation="fade-up" delay={index * 100}>
              <div
                className="relative w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('/Image/New/Backgrounds/LatestProducts-pattern-background.svg')",
                }}
              >
                <img src={p.image} className="w-full h-auto" alt={t.title} />

                {/* کادر متنی اصلاح شده */}
                <div
                  className="absolute flex flex-col gap-0.5 -mt-1 xs:-mt-[18px] sm:-mt-10 md:-mt-12 lg:-mt-16 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  style={{
                    top: p.textBox.top,
                    left:
                      rtl && p.textBox.rtlLeft
                        ? p.textBox.rtlLeft
                        : p.textBox.left,
                    width: p.textBox.width,
                    maxHeight: "65%", // افزایش ارتفاع مجاز برای جا شدن متن کامل
                  }}
                >
                  <div className="w-full">
                    <h3
                      className={`font-bold text-[6px] min-[400px]:text-[8px] 
                      ${rtl ? "xs:text-[7.5px]" : "xs:text-[6.2px]"}
                      ${rtl ? "sm:text-[13px]" : "sm:text-[11px]"}  
                      ${rtl ? "md:text-[17px]" : "md:text-[14px]"}  
                      ${rtl ? "lg:text-[21px]" : "lg:text-[18px]"} 
                      ${rtl ? "xl:text-[26px]" : "xl:text-[23px]"} 
                        text-[#1a4b8c] leading-tight sm:leading-normal mb-1 ${rtl ? "text-right" : "text-left"}`}
                    >
                      {t.title}
                    </h3>

                    <p
                      className={`text-[4px] min-[400px]:text-[7px] 
                        ${rtl ? "xs:text-[7.5px]" : "xs:text-[6.2px]"}
                      ${rtl ? "sm:text-[12px]" : "sm:text-[10px]"}  
                      ${rtl ? "md:text-[16px]" : "md:text-[13px]"}  
                      ${rtl ? "lg:text-[20px]" : "lg:text-[17px]"} 
                      ${rtl ? "xl:text-[25px]" : "xl:text-[22px]"} 
                     text-gray-700 leading-tight sm:leading-snug ${
                       rtl ? "text-right" : "text-left"
                     }`}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}

        {/* Swiper Gallery */}
        <ScrollReveal animation="fade-up" duration={800} delay={200}>
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
                    <div className="rounded-3xl xs:p-6 sm:p-0 overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                      <img
                        src={g.image}
                        className="w-full h-full xs:h-[450px] sm:h-[500px] md:h-[600px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-500 rounded-3xl"
                        alt={galleryTitle}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
