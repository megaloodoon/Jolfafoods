import Link from "next/link";
import Image from "next/image";
import SuggestedRecipes from "@/app/components/SuggestedRecipes";
import ProductsCarousel from "@/app/components/ProductsCarousel";
import ScrollReveal from "@/app/components/ScrollReveal"; // <--- اضافه‌شده


export default function Home() {
  // آرایه محصولات با نام‌های ثابت فارسی
  const productsList = [
    {
      id: "cheese",
      name: "پنیر",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
    {
      id: "sauce",
      name: "سس",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
    {
      id: "butter",
      name: "کره",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
    {
      id: "cream",
      name: "خامه",
      sizeClass: "w-10 xs:w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36",
    },
  ];

  return (
    <main dir="rtl" className="flex min-h-screen flex-col font-sans bg-white">
      <link rel="canonical" href="https://jolfafoods.com/pages/fa" />

      {/* بخش هیرو (تصویر بالای صفحه) */}
      <ScrollReveal className="w-full relative">
        <Image
          src="/Image/New/First-Home-pic.png" // مسیر عکس سالاد را اینجا قرار دهید
          alt="جلفا طعم جدید"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
        />
      </ScrollReveal>

      {/* تیتر اصلی */}
      <ScrollReveal delay={100} className="text-center py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a4b8c] mb-4">
          جلفا، شروع یک طعم جدید
        </h1>
        <h2 className="text-xl md:text-2xl mt-8 text-gray-800 font-semibold">
          محصولات ما
        </h2>
      </ScrollReveal>

      {/* نوار آبی آیکون‌های محصولات */}
      <ScrollReveal
        delay={200}
        className="relative z-10 flex flex-col w-full bg-[#154994] text-white my-4 sm:my-6 pt-1 xs:pt-0.5 sm:pt-1 md:pt-0"
      >
        {/* لبه تزئینی بالا */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_blue.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-[2px] bg-[length:auto_101%] border-none outline-none"></div>

        {/* محتوای فلکس با توزیع مساوی */}
        <div className="flex flex-row justify-between items-center w-full overflow-x-auto pb-2 sm:pb-3 md:pb-4 px-4 sm:px-6 md:px-10 scrollbar-hide">
          {productsList.map((item) => (
            <Link
              key={item.id}
              href={`/pages/fa/products?category=${item.id}`}
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
      <ScrollReveal className="w-full relative z-0">
        <Image
          src="/Image/New/Main-Home-Pic.png"
          alt="طبیعت و خامه جلفا"
          width={1920}
          height={600}
          // تعیین ارتفاع مشخص برای موبایل و ارتفاع خودکار برای سایزهای بزرگتر
          className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-auto object-cover object-center"
        />
      </ScrollReveal>

      {/* بخش چرا جلفا */}
      <ScrollReveal className="relative z-10 flex flex-col w-full bg-[#fbe1ac] -mt-8 xs:-mt-1 sm:-mt-4 md:-mt-6 lg:-mt-10 xxlg:-mt-12 xxxlg:-mt-20 mb-10 sm:mb-16 px-4 sm:px-6 md:px-8 py-10 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-center">
        {/* لبه تزئینی بالا */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_cream.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-1 bg-[length:auto_100%]"></div>

        {/* عنوان اصلی با فونت ریسپانسیو */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a4b8c] mb-4 sm:mb-6 drop-shadow-md">
          چرا جلفا؟
        </h3>

        {/* پاراگراف توضیحات با فونت و عرض ماکسیمم برای خوانایی بهتر */}
        <p className="max-w-4xl mx-auto text-[#1a4b8c] font-bold text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm">
          ما با ارائه مجموعه‌ای متنوع از محصولات تازه و اصیل، تجربه‌ای متفاوت از
          طعم و کیفیت را برای شما رقم می‌زنیم. همه‌ی محصولات ما با بهترین مواد
          اولیه و استانداردهای سخت‌گیرانه تولید می‌شوند تا سلامت و رضایت شما
          همیشه در اولویت باشد. کنترل کیفی دقیق در تمام مراحل تولید، تضمین
          می‌کند که هر بسته پنیر همان طعمی را داشته باشد که انتظارش را دارید.با
          انتخاب محصولات ما، ترکیبی از سلامت، کیفیت و تنوع را به سفره‌تان
          می‌آورید.
        </p>

        {/* لبه تزئینی پایین */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/down_cream.svg')] bg-repeat-x bg-top z-10 top-full -mt-1 bg-[length:auto_100%]"></div>
      </ScrollReveal>

      {/* فوت و فن با رسپی های جلفا */}
      <div className="py-10 text-center bg-none sm:bg-[url('/Image/New/Backgrounds/Home-recepie.png')] sm:bg-[length:70%] bg-center bg-no-repeat">
        <ScrollReveal>
          <h3 className="text-2xl md:text-4xl font-bold text-[#1a4b8c] mb-10">
            فوت و فن با رسپی های جلفا
          </h3>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row justify-center items-center gap-۲0 md:gap-60 px-4">
          <ScrollReveal
            delay={100}
            className="flex flex-col items-center gap-4 text-[#1a4b8c]"
          >
            <Image
              src="/Image/New/Icons/fast-icon.svg"
              alt="سریع"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">سریع</span>
          </ScrollReveal>

          <ScrollReveal
            delay={300}
            className="flex flex-col items-center gap-4 text-[#1a4b8c]"
          >
            <Image
              src="/Image/New/Icons/delicious-icon.svg"
              alt="لذیذ"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">لذیذ</span>
          </ScrollReveal>

          <ScrollReveal
            delay={500}
            className="flex flex-col items-center gap-4 text-[#1a4b8c]"
          >
            <Image
              src="/Image/New/Icons/different-icon.svg"
              alt="متفاوت"
              width={160}
              height={80}
            />
            <span className="text-xl font-bold">متفاوت</span>
          </ScrollReveal>
        </div>
      </div>

      {/* اسلایدر رسپی ها با تصویر پس‌زمینه */}
      <ScrollReveal
        delay={200}
        className="py-12 w-full bg-cover bg-center bg-no-repeat relative bg-[url('/Image/New/Backgrounds/Recipes-background.png')]"
      >
        {/* عکس لبه سفید - قرار گرفته در بالاترین نقطه و برعکس شده */}
        <img
          src="/Image/New/Backgrounds/down_white.svg" // آدرس عکس لبه سفید خود را اینجا قرار دهید
          alt="White Edge"
          className="absolute -top-1 left-0 w-full h-16 object-cover z-20 pointer-events-none"
          /* در صورت نیاز به تنظیم ارتفاع عکس لبه، می‌توانید از کلاس‌هایی مثل h-8 یا h-16 به جای h-auto استفاده کنید */
        />

        {/* در صورت نیاز به لایه نیمه‌شفاف */}
        {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div> */}

        {/* محتوای اصلی - اضافه کردن کمی پدینگ بالا (pt-10) تا زیر لبه نرود */}
        <div className="relative z-10">
          <SuggestedRecipes locale="fa" />
        </div>
      </ScrollReveal>
    </main>
  );
}
