export default function AboutUsFr() {
  return (
    <main dir="ltr" className="w-full font-sans text-neutral-800 bg-white">
      <section
        className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Image/About-Us/Factory.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
          En savoir plus sur nous
        </h1>
      </section>

      <section
        className="w-full py-16 xs:-mt-3 md:py-24 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Image/About-Us/About-us-background.png')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/history-icon2.png"
                  alt="Histoire"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Notre Histoire
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                La société Asre Talaei Bartar Spadana a été créée en 2018 et a
                commencé son activité dans le domaine des produits laitiers.
                Elle est spécialisée dans la production de fromage à pizza de
                haute qualité. En plus de la distribution nationale,
                l'entreprise exporte avec succès ses produits vers plusieurs
                pays de la région et poursuit sa croissance rapide.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/history-image.png"
                alt="Histoire"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/tech-image.png"
                alt="Technologie"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/tech-icon1.png"
                  alt="Technologie"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Développement & Technologie
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                Nous pensons qu'une qualité durable nécessite une innovation
                continue. Notre département de Recherche et Développement (R&D),
                utilisant les dernières technologies, s'efforce constamment de
                produire selon les normes les plus élevées. Les machines
                avancées garantissent l'hygiène et nous permettent d'améliorer
                les formulations pour créer des saveurs uniques.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/quality-icon1.png"
                  alt="Qualité"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Qualité et Innovation
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                En utilisant des matières premières fraîches et des machines
                industrielles de pointe, la société s'efforce d'offrir des
                fromages de la plus haute qualité. En phase avec la science
                moderne, elle améliore continuellement ses formulations de
                production spéciales.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/quality-image.png"
                alt="Qualité"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/global-image.png"
                alt="Marché Mondial"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/global-icon1.png"
                  alt="Marché Mondial"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Présence sur le Marché Mondial
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                La qualité de nos produits a franchi les frontières. Jolfa Food
                occupe fièrement une place de choix sur les marchés
                internationaux. Notre présence active aux événements les plus
                prestigieux, dont Gulfood Dubai 2026, témoigne de notre
                crédibilité. Aujourd'hui, nos produits sont exportés sous la
                marque "Mazesta" dans divers pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 flex flex-col w-full bg-[#fbe1ac] -mt-4 xs:-mt-1 sm:-mt-4 md:-mt-1 lg:-mt-2 xxlg:-mt-4 xxxlg:-mt-4 mb-10 sm:mb-16 px-4 sm:px-6 md:px-8 py-10 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-center">
        {/* لبه تزئینی بالا */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_cream.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-1 bg-[length:auto_100%]"></div>

        {/* عنوان اصلی با فونت ریسپانسیو */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a4b8c] mb-4 sm:mb-6 drop-shadow-md">
          افتخارات ما
        </h3>

        {/* پاراگراف توضیحات با فونت و عرض ماکسیمم برای خوانایی بهتر */}
        <p className="max-w-4xl mx-auto text-[#1a4b8c] font-bold text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm">
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
      </div>

      {/* بخش عکس افتخارات (تندیس ها و لوح ها) */}
      <section className="w-full md:bg-transparent -mt-10 pb-10 md:pb-0">
        <img
          src="/Image/About-Us/Awards.png"
          alt="Jolfa Foods Awards"
          className="w-full h-auto object-cover max-h-[800px]"
        />
      </section>
    </main>
  );
}
