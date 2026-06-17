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
        desc: "سس پنیر چدار جلفا یک تجربه‌ی فوق‌العاده غنی و هیجان‌انگیز است که به تنهایی می‌تواند استانداردهای یک دورهمی یا میزبانی حرفه‌ای را ارتقا دهد. این سس، فراتر از یک چاشنی ساده، یک کاتالیزور طعم برای انواع تنقلات، فست‌فودهای مدرن و حتی بشقاب‌های لذیذ خانگی است.این محصول بر پایه‌ی پنیر چدار اصیل، با بافتی یکنواخت و مخملی تولید شده و در دماهای مختلف، پایداری ساختاری خود را حفظ می‌کند.",
      },
      en: {
        title: "Cheddar Pizza Cheese Sauce",
        desc: "Jolfa Cheddar Cheese Sauce is an exceptionally rich and exciting experience that alone can elevate the standards of any gathering or professional hosting. More than just a simple condiment, this sauce acts as a flavor catalyst for a wide range of snacks, modern fast foods, and even delicious homemade dishes. The product is based on authentic cheddar cheese, produced with a smooth and velvety texture, and maintains its structural stability across different temperatures.",
      },
      ar: {
        title: "صلصة جبن الشيدر للبيتزا",
        desc: "صلصة جبن الشيدر «جلفا» هي تجربة غنية ومثيرة للغاية يمكنها وحدها أن ترتقي بمعايير أي تجمع أو ضيافة احترافية. هذه الصلصة ليست مجرد إضافة بسيطة، بل هي محفّز للنكهة لمجموعة متنوعة من الوجبات الخفيفة، والوجبات السريعة الحديثة، وحتى الأطباق المنزلية الشهية. يعتمد هذا المنتج على جبن الشيدر الأصلي، وقد صُنِع بقوام متجانس ومخملي، مع الحفاظ على ثباته البنيوي في درجات حرارة مختلفة.",
      },
      fr: {
        title: "Sauce cheddar pour pizza",
        desc: "La sauce au fromage cheddar Jolfa est une expérience exceptionnellement riche et passionnante qui, à elle seule, peut élever les standards de toute réunion ou réception professionnelle. Bien plus qu’un simple condiment, cette sauce agit comme un catalyseur de saveurs pour une grande variété de collations, de fast‑foods modernes et même de plats maison délicieux. Ce produit est élaboré à base de véritable fromage cheddar, avec une texture homogène et veloutée, tout en conservant sa stabilité structurelle à différentes températures.",
      },
      ru: {
        title: "Сырный соус чеддер для пиццы",
        desc: "Соус из сыра чеддер «Jolfa» — это исключительно насыщенный и захватывающий гастрономический опыт, который сам по себе способен повысить уровень любой встречи или профессионального приема. Этот соус — не просто приправа, а настоящий катализатор вкуса для различных закусок, современных фаст‑фудов и даже изысканных домашних блюд. Продукт создан на основе настоящего сыра чеддер, имеет однородную бархатистую текстуру и сохраняет структурную стабильность при различных температурах.",
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
        desc: "خامه جلفا تجربه‌ای لطیف و خوش‌طعم از یک خامه‌ی باکیفیت و اصیل است؛ جایی که بافت نرم و کرمی آن با طعم طبیعی و دل‌نشینش ترکیب می‌شود و هر غذا یا دسر را به سطحی متفاوت از طعم و مزه می‌رساند.بافت یکدست و کرمی آن، طعمی غنی و طبیعی به انواع پاستا، سوپ‌های کرمی و سس‌ها می‌بخشد و در شیرینی‌پزی نیز، انتخابی ایده‌آل برای تهیه انواع کیک، رول، دسر و فیلینگ‌های لطیف است. همچنین در تولید بستنی، این خامه با ایجاد ساختاری نرم و خامه‌ای، تجربه‌ای ماندگار از یک بستنی باکیفیت را رقم می‌زند.",
      },
      en: {
        title: "Full Fat Cream",
        desc: "Jolfa Cream offers a delicate and flavorful experience of high-quality, authentic cream; a place where its smooth, creamy texture blends with a natural, pleasant taste to elevate any dish or dessert to a whole new level of flavor. Its uniform and creamy consistency imparts a rich, natural taste to various pastas, creamy soups, and sauces. In pastry making, it is an ideal choice for preparing cakes, rolls, desserts, and delicate fillings. Furthermore, in ice cream production, this cream creates a smooth and creamy structure, ensuring a lasting experience of premium quality ice cream.",
      },
      ar: {
        title: "قشطة كاملة الدسم",
        desc: "تُعدّ كريمة «جلفا» تجربة ناعمة ولذيذة تعكس جودة الكريمة الأصيلة؛ حيث يمتزج قوامها الكريمي الناعم مع طعمها الطبيعي والساحر، ليرتقي بكل طبق أو حلوى إلى مستوى مختلف تماماً من المذاق. يمنح قوامها المتجانس والكريمي نكهة غنية وطبيعية لمختلف أنواع الباستا، والشوربات الكريمية، والصلصات. وفي عالم الحلويات، تُعد خياراً مثالياً لتحضير أنواع الكيك، واللفائف (رولز)، والحلويات، والحشوات الرقيقة. كما تساهم هذه الكريمة في إنتاج الآيس كريم من خلال خلق بنية ناعمة وكريمية، مما يمنح تجربة لا تُنسى لآيس كريم عالي الجودة.",
      },
      fr: {
        title: "Crème entière",
        desc: "La crème Jolfa est une expérience délicate et savoureuse, reflet d’une crème authentique et de haute qualité ; là où sa texture onctueuse et crémeuse se marie à son goût naturel et plaisant pour porter chaque plat ou dessert à un niveau de saveur supérieur. Sa consistance homogène et crémeuse apporte une saveur riche et naturelle aux pâtes, aux soupes veloutées et aux sauces. En pâtisserie, elle constitue un choix idéal pour la confection de gâteaux, de roulés, de desserts et de garnitures délicates. De plus, dans la fabrication de glaces, cette crème crée une structure souple et crémeuse, offrant ainsi une expérience mémorable de crème glacée haut de gamme.",
      },
      ru: {
        title: "Жирные сливки",
        desc: "Сливки «Jolfa» — это нежный и изысканный вкус высококачественных натуральных сливок; здесь мягкая кремовая текстура сочетается с приятным естественным вкусом, выводя любое блюдо или десерт на совершенно новый уровень. Их однородная кремовая консистенция придает насыщенный и натуральный вкус различным видам пасты, крем-супам и соусам. В кондитерском деле это идеальный выбор для приготовления тортов, рулетов, десертов и нежных начинок. Также при производстве мороженого эти сливки создают мягкую кремовую структуру, обеспечивая незабываемое впечатление от продукта премиального качества.",
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
        desc: "سس پنیر پیتزای پروسس با بهره‌گیری از فرمولاسیونی منحصربه‌فرد، نه‌تنها یک چاشنی، بلکه رازی برای درخشش طعم در انواع ساندویچ‌های لذیذ، همبرگرهای کلاسیک و اسنک‌های مدرن به شمار می‌رود.پنیر پروسس به کار رفته در این محصول، علاوه بر ایجاد طعمی عمیق و ماندگار، منبعی غنی از کلسیم و پروتئین‌های لبنی است. به دلیل فرآیند پاستوریزاسیون دقیق و استفاده از مواد اولیه استاندارد، این سس دارای ارزش غذایی بالایی بوده و به تقویت سلامت استخوان‌ها و تامین انرژی روزانه کمک می‌کند.",
      },
      en: {
        title: "Pizza Processed Cheese Sauce",
        desc: "Processed Pizza Cheese Sauce, utilizing a unique formulation, is not merely a condiment but a secret for flavor excellence in various delicious sandwiches, classic hamburgers, and modern snacks. The processed cheese used in this product, besides creating a deep and lasting flavor, is a rich source of calcium and dairy proteins. Due to the precise pasteurization process and the use of standardized raw materials, this sauce possesses high nutritional value and contributes to strengthening bone health and providing daily energy.",
      },
      ar: {
        title: "صلصة جبن البيتزا المطبوخة",
        desc: "تُعتبر صلصة جبن البيتزا المطبوخ (البروسس)، بفضل تركيبتها الفريدة، ليست مجرد چاشنی، بل سراً لتألق النكهة في مختلف أنواع السندويشات اللذيذة، والبرجر الكلاسيكي، والوجبات الخفيفة العصرية. إن جبن البروسس المستخدم في هذا المنتج، بالإضافة إلى منحه طعماً عميقاً ومستداماً، يُعد مصدراً غنياً بالكالسيوم وبروتينات الألبان. ونظراً لعملية البسترة الدقيقة واستخدام مواد أولية معيارية، تتميز هذه الصلصة بقيمة غذائية عالية وتساهم في تعزيز صحة العظام وإمداد الجسم بالطاقة اليومية.",
      },
      fr: {
        title: "Sauce fromage fondu pour pizza",
        desc: "La sauce au fromage à pizza fondu, grâce à sa formulation unique, n’est pas seulement un condiment, mais le secret de l’éclat gustatif de divers sandwichs délicieux, de hamburgers classiques et de snacks modernes. Le fromage fondu utilisé dans ce produit, en plus de créer une saveur profonde et persistante, est une source riche en calcium et en protéines laitières. Grâce à un processus de pasteurisation rigoureux et à l’utilisation de matières premières standardisées, cette sauce possède une haute valeur nutritionnelle et aide à renforcer la santé osseuse tout en fournissant l’énergie quotidienne nécessaire.",
      },
      ru: {
        title: "Плавленый сырный соус для пиццы",
        desc: "Соус из плавленного сыра для пиццы, благодаря своей уникальной рецептуре, является не просто приправой, а секретом великолепного вкуса в самых разнообразных сэндвичах, классических гамбургерах и современных закусках. Плавленный сыр, используемый в этом продукте, помимо создания глубокого и стойкого послевкусия, является богатым источником кальция и молочных белков. Благодаря точному процессу пастеризации и использования стандартного сырья, этот соус обладает высокой пищевой ценностью, способствует укреплению костей и обеспечивает организм энергией на весь день.",
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
            "url('/Image/New/Backgrounds/LatestProducts-pattern-background3.svg')",
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
                    <h3 className="text-xl sm:text-3xl font-bold text-[#c4122f] mb-2 sm:mb-4 drop-shadow-sm">
                      {t.title}
                    </h3>
                    <p className="text-gray-900 font-kalame text-xs sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm max-w-4xl mx-auto">
                      {t.desc}
                    </p>
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
                  className="absolute flex flex-col gap-0.5 -mt-1 xs:-mt-[8px] sm:-mt-3 md:-mt-[13px] lg:-mt-5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                      className={`font-bold text-[6px] min-[400px]:text-[8px] sm:text-[11px] lg:text-[16px] xl:text-[18px] text-[#1a4b8c] leading-tight sm:leading-normal mb-1 ${rtl ? "text-right" : "text-left"}`}
                    >
                      {t.title}
                    </h3>

                    <p
                      className={`text-[4px] min-[400px]:text-[6px] xs:text-[5.2px] sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] text-gray-700 leading-tight sm:leading-snug ${rtl ? "text-right" : "text-left"}`}
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
                    <div className="rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer">
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
