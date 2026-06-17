import ScrollReveal from "@/app/components/ScrollReveal"; // ایمپورت کامپوننت انیمیشن

export default function AboutUsFa() {
  return (
    <main dir="rtl" className="w-full font-sans text-neutral-800 bg-white ">
      {/* هدر اصلی (عکس کارخانه با متن روی آن) */}
      <ScrollReveal
        className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/Image/About-Us/Factory.png')]"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
          درباره ی ما بیشتر بدانید
        </h1>
      </ScrollReveal>

      {/* بخش توضیحات زیگزاگی با پس‌زمینه */}
      <section
        className="w-full py-16 xs:-mt-3 md:py-24 font-kalame text-white relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/Image/About-Us/About-us-background.png')]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-20">
          {/* آیتم 1: پیشینه ی ما */}
          <ScrollReveal delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              {/* آیکون و تیتر در یک خط */}
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/history-icon2.png"
                  alt="پیشینه"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  پیشینه ی ما
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                شرکت عصر طلایی برتر اسپادانا در سال ۱۳۹۷ تأسیس شد و فعالیت خود
                را در حوزه انواع محصولات لبنی آغاز کرد. این شرکت به طور تخصصی در
                تولید پنیر پیتزای باکیفیت فعالیت میکند و توانسته است محصولات خود
                را در این گروه به صورت منحصر به فرد عرضه کند. علاوه بر توزیع
                سراسری در کشور به ویژه از طریق فروشگاه های زنجیره ای بزرگ - این
                شرکت موفق شده است محصولات خود را به چندین کشور منطقه صادر کند و
                همچنان روند رشد و توسعه سریع خود را ادامه می دهد.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/history-image.png"
                alt="پیشینه"
                className="w-full h-auto object-cover rounded-2xl "
              />
            </div>
          </ScrollReveal>

          {/* آیتم 2: توسعه و فناوری */}
          <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/tech-image.png"
                alt="توسعه و فناوری"
                className="w-full h-auto object-cover rounded-2xl "
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/tech-icon1.png"
                  alt="فناوری"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  توسعه و فناوری
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                در شرکت عصر طلایی برتر اسپادانا، ما معتقدیم که کیفیت پایدار
                نیازمند نوآوری مداوم است. واحد تحقیق و توسعه (R&D) ما با
                بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا و آزمایشگاه‌های
                مجهز، همواره در تلاش است تا محصولاتی مطابق با بالاترین
                استانداردهای کیفی تولید کند. استفاده از ماشین‌آلات پیشرفته و
                تمام‌اتوماتیک در خطوط تولید، نه تنها بهداشت و سلامت کامل محصولات
                را تضمین می‌کند، بلکه به ما این امکان را می‌دهد تا با ارتقای
                مستمر فرمولاسیون، بافت و طعم‌های بی‌نظیری را برای پاسخگویی به
                سلیقه و نیازهای متنوع مشتریان عزیزمان خلق کنیم.
              </p>
            </div>
          </ScrollReveal>

          {/* آیتم 3: کیفیت و نوآوری */}
          <ScrollReveal delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/quality-icon1.png"
                  alt="کیفیت"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  کیفیت و نوآوری
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                شرکت عصر طلایی برتر اسپادانا با بهره گیری از انواع مواد اولیه
                تازه و انواع ماشین آلات پیشرفته ی صنعتی در تلاش است تا با کیفیت
                ترین و سالم ترین پنیرهای پیتزای به مصرف کنندگان داخلی و خارجی
                عرضه نماید. در همین راستا‍،همواره و همگام با علم روز دنیا ،به
                طور مداوم فرمولاسیون ویژه تولید خود را ارتقاء می دهد.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/quality-image.png"
                alt="کیفیت و نوآوری"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </ScrollReveal>

          {/* آیتم 4: حضور در بازار جهانی */}
          <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/global-image.png"
                alt="بازار جهانی"
                className="w-full h-auto object-cover rounded-2xl "
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/global-icon1.png"
                  alt="بازار جهانی"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  حضور در بازار جهانی
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                کیفیت بی‌نظیر محصولات ما مرزها را درنوردیده است. جلفا فود با
                افتخار توانسته است جایگاه ویژه‌ای در بازارهای بین‌المللی کسب کند
                و استانداردهای جهانی را با موفقیت پشت سر بگذارد. حضور فعال و
                موفق ما در معتبرترین رویدادهای صنایع غذایی جهان، از جمله
                نمایشگاه بزرگ گلفود دبی ۲۰۲۶ (Gulfood 2026)، گواهی بر توانمندی و
                اعتبار بین‌المللی این مجموعه است. امروزه، محصولات باکیفیت ما تحت
                عنوان برند صادراتی «مازستا» به کشورهای مختلف جهان صادر می‌شوند
                تا طعم اصیل و کیفیت برتر ایرانی را به سفره‌های مردم در سراسر
                دنیا هدیه دهند.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* بخش افتخارات با پس‌زمینه */}
      <ScrollReveal delay={100} className="relative z-10 flex flex-col w-full bg-[#fbe1ac] -mt-4 xs:-mt-1 sm:-mt-4 md:-mt-1 lg:-mt-2 xxlg:-mt-4 xxxlg:-mt-4 mb-10 sm:mb-16 px-4 sm:px-6 md:px-8 py-10 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-center">
        {/* لبه تزئینی بالا */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_cream.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-1 bg-[length:auto_100%]"></div>

        {/* عنوان اصلی با فونت ریسپانسیو */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a4b8c] mb-4 sm:mb-6 drop-shadow-md">
          افتخارات ما
        </h3>

        {/* پاراگراف توضیحات با فونت و عرض ماکسیمم برای خوانایی بهتر */}
        <p className="max-w-4xl mx-auto text-[#1a4b8c] font-kalame text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm">
          شرکت عصر طلایی برتر اسپادانا، دارنده‌ی برند تجاری جلفا و مازستا، با
          تکیه بر کیفیت، نوآوری و تخصص، موفق به کسب افتخارات ارزشمندی در صنعت
          غذایی کشور شده است. این شرکت در سال ۱۴۰۳ موفق به کسب گواهینامه اهتمام
          به کیفیت از سمت سازمان ملی استاندارد ایران گردید و هم‌زمان عنوان واحد
          تولیدکننده برتر صنایع غذایی استان اصفهان را نیز به دست آورد. همچنین
          کسب مقام مسئول فنی برتر صنایع غذایی استان اصفهان، که نشان‌دهنده‌ی
          توانمندی و شایستگی مدیریت فنی مجموعه است، از دیگر افتخارات این شرکت می
          باشد. در ادامه‌ی مسیر نوآوری، شرکت عصر طلایی برتر اسپادانا در سال ۱۴۰۴
          با ثبت اختراع سس پنیر پروسس، جایگاه خود را در توسعه محصولات دانش‌بنیان
          صنعت غذا تثبیت نمود.
        </p>

        {/* لبه تزئینی پایین */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/down_cream.svg')] bg-repeat-x bg-top z-10 top-full -translate-y-1 bg-[length:auto_100%]"></div>
      </ScrollReveal>

      {/* بخش عکس افتخارات (تندیس ها و لوح ها) */}
      <ScrollReveal delay={200} className="w-full md:bg-transparent -mt-10 pb-10 md:pb-0">
        <img
          src="/Image/About-Us/Awards.png"
          alt="Jolfa Foods Awards"
          className="w-full h-auto object-cover max-h-[800px]"
        />
      </ScrollReveal>
    </main>
  );
}
