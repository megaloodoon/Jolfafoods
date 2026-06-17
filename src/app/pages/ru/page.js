import Link from "next/link";
import Image from "next/image";
import SuggestedRecipes from "@/app/components/SuggestedRecipes";
import ScrollReveal from "@/app/components/ScrollReveal"; // ایمپورت کامپوننت انیمیشن

export default function PageRU() {
  const productsList = [
    {
      id: "cheese",
      name: "Сыр",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
    {
      id: "sauce",
      name: "Соус",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
    {
      id: "butter",
      name: "Масло",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
    {
      id: "cream",
      name: "Сливки",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
  ];

  return (
    <main dir="ltr" className="flex min-h-screen flex-col font-sans bg-white">
      <div className="w-full relative">
        <Image
          src="/Image/New/First-Home-pic.png"
          alt="Jolfa, новый вкус"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      <ScrollReveal className="text-center py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a4b8c] mb-4">
          Jolfa, начало нового вкуса
        </h1>
        <h2 className="text-xl md:text-2xl mt-8 text-gray-800 font-semibold">
          Наша продукция
        </h2>
      </ScrollReveal>

      {/* نوار آبی آیکون‌های محصولات */}
      <ScrollReveal delay={100} className="relative z-10 flex flex-col w-full bg-[#154994] text-white my-4 sm:my-6 pt-1 xs:pt-0.5 sm:pt-1 md:pt-0">
        {/* لبه تزئینی بالا */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_blue.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-[2px] bg-[length:auto_101%] border-none outline-none"></div>

        {/* محتوای فلکس با توزیع مساوی */}
        <div className="flex flex-row justify-between items-center w-full overflow-x-auto pb-2 sm:pb-3 md:pb-4 px-4 sm:px-6 md:px-10 scrollbar-hide">
          {productsList.map((item) => (
            <Link
              key={item.id}
              href={`/pages/ru/products?category=${item.id}`}
              className="flex-1 flex flex-col items-center justify-center gap-1 lg:gap-2 transition-transform hover:scale-105 min-w-[70px]"
            >
              <Image
                src={`/Image/New/Icons/${item.id}-icon.svg`}
                alt={item.name}
                width={150}
                height={150}
                className={`h-auto object-contain mt-2 ${item.sizeClass}`}
              />
              <span className="text-white font-bold text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl drop-shadow-md text-center">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* لبه تزئینی پایین */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/down_blue.svg')] bg-repeat-x bg-top z-10 top-full -mt-1 bg-[length:auto_101%] border-none outline-none"></div>
      </ScrollReveal>

      {/* تصویر گاوها و خامه */}
      <ScrollReveal delay={200} className="w-full relative z-0">
        <Image
          src="/Image/New/Main-Home-Pic.png"
          alt="طبیعت و خامه جلفا"
          width={1920}
          height={600}
          className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-auto object-cover object-center"
        />
      </ScrollReveal>

      {/* بخش چرا جلفا */}
      <ScrollReveal delay={100} className="relative z-10 flex flex-col w-full bg-[#fbe1ac] -mt-8 xs:-mt-1 sm:-mt-4 md:-mt-6 lg:-mt-10 xxlg:-mt-12 xxxlg:-mt-20 mb-10 sm:mb-16 px-4 sm:px-6 md:px-8 py-10 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-center">
        {/* لبه تزئینی بالا */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_cream.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-1 bg-[length:auto_100%]"></div>

        {/* عنوان اصلی با فونت ریسپانسیو */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a4b8c] mb-4 sm:mb-6 drop-shadow-md">
          Почему Jolfa?
        </h3>

        {/* پاراگراف توضیحات با فونت و عرض ماکسیمم برای خوانایی بهتر */}
        <p className="max-w-4xl mx-auto text-[#1a4b8c] font-bold text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm">
          Предлагая широкий ассортимент свежих и натуральных продуктов, мы дарим
          вам уникальный опыт вкуса и качества. Все наши продукты производятся
          из лучших ингредиентов с соблюдением строгих стандартов, благодаря
          чему ваше здоровье и удовлетворенность всегда остаются для нас главным
          приоритетом. Тщательный контроль качества на всех этапах производства
          гарантирует, что каждая упаковка сыра будет обладать именно тем
          вкусом, который вы ожидаете. Выбирая нашу продукцию, вы привносите на
          свой стол сочетание пользы, качества и разнообразия.
        </p>

        {/* لبه تزئینی پایین */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/down_cream.svg')] bg-repeat-x bg-top z-10 top-full -mt-1 bg-[length:auto_100%]"></div>
      </ScrollReveal>

      <ScrollReveal className="py-10 text-center bg-none sm:bg-[url('/Image/New/Backgrounds/Home-recepie.png')] sm:bg-[length:70%] bg-center bg-no-repeat">
        <h3 className="text-2xl md:text-4xl font-bold text-[#1a4b8c] mb-10">
          Секреты с рецептами Jolfa
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-60 px-4">
          <ScrollReveal delay={100} className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/fast-icon.svg"
              alt="Быстро"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">Быстро</span>
          </ScrollReveal>
          <ScrollReveal delay={300} className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/delicious-icon.svg"
              alt="Вкусно"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">Вкусно</span>
          </ScrollReveal>
          <ScrollReveal delay={500} className="flex flex-col items-center gap-4 text-[#1a4b8c]">
            <Image
              src="/Image/New/Icons/different-icon.svg"
              alt="Разнообразно"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">Особенный</span>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* تغییر استایل پس‌زمینه به کلاس تیلویند */}
      <ScrollReveal 
        delay={200}
        className="py-12 w-full bg-cover bg-center bg-no-repeat relative bg-[url('/Image/New/Backgrounds/Recipes-background.png')]"
      >
        {/* عکس لبه سفید */}
        <img
          src="/Image/New/Backgrounds/down_white.svg"
          alt="White Edge"
          className="absolute -top-1 left-0 w-full h-16 object-cover z-20 pointer-events-none"
        />

        {/* محتوای اصلی */}
        <div className="relative z-10">
          <SuggestedRecipes locale="ru" />
        </div>
      </ScrollReveal>
    </main>
  );
}
