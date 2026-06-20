import ScrollReveal from "@/app/components/ScrollReveal"; // ایمپورت کامپوننت انیمیشن

export default function AboutUsEn() {
  return (
    <main dir="ltr" className="w-full font-sans text-neutral-800 bg-white">
      {/* Main Header (Factory image with text overlay) */}
      <ScrollReveal
        className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/Image/About-Us/Factory.png')]"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
           More About Us
        </h1>
      </ScrollReveal>

      {/* Zigzag content section with background */}
      <section
        className="w-full py-16 xs:-mt-3 md:py-24 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/Image/About-Us/About-us-background.png')]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-20">
          {/* Item 1: Our History */}
          <ScrollReveal delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/history-icon2.png"
                  alt="History"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Our History
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                Asre Talaei Bartar Spadana Company was established in 2018 and
                started its activity in the field of dairy products. The company
                specializes in the production of high-quality pizza cheese and
                has been able to offer unique products in this category. In
                addition to nationwide distribution, especially through large
                chain stores, the company has successfully exported its products
                to several regional countries and continues its rapid growth and
                development.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/history-image.png"
                alt="History"
                className="w-full h-auto object-cover rounded-2xl "
              />
            </div>
          </ScrollReveal>

          {/* Item 2: Development & Technology */}
          <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/tech-image.png"
                alt="Technology"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/tech-icon1.png"
                  alt="Technology"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Development & Technology
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                At Asre Talaei Bartar Spadana, we believe that sustainable
                quality requires continuous innovation. Our Research and
                Development (R&D) department, utilizing the latest global
                technologies and equipped laboratories, constantly strives to
                produce products that meet the highest quality standards. Using
                advanced and fully automatic machinery not only ensures complete
                hygiene but also allows us to continuously improve formulations,
                creating unique textures and flavors for our customers.
              </p>
            </div>
          </ScrollReveal>

          {/* Item 3: Quality & Innovation */}
          <ScrollReveal delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/quality-icon1.png"
                  alt="Quality"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Quality & Innovation
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                Utilizing a variety of fresh raw materials and advanced
                industrial machinery, Asre Talaei Bartar Spadana strives to
                offer the highest quality and healthiest pizza cheeses to
                domestic and foreign consumers. In this regard, keeping pace
                with modern science, it continuously improves its special
                production formulation.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/quality-image.png"
                alt="Quality"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </ScrollReveal>

          {/* Item 4: Global Market Presence */}
          <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/global-image.png"
                alt="Global Market"
                className="w-full h-auto object-cover rounded-2xl "
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/global-icon1.png"
                  alt="Global Market"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Global Market Presence
                </h2>
              </div>
              <p className="text-base md:text-lg leading-2 text-blue-50 text-justify">
                The unparalleled quality of our products has crossed borders.
                Jolfa Food proudly holds a special place in international
                markets, successfully meeting global standards. Our active
                presence in the world's most prestigious food industry events,
                including Gulfood Dubai 2026, is a testament to our
                international credibility. Today, our products are exported
                under the "Mazesta" brand to various countries worldwide.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Honors section with background */}
      <ScrollReveal delay={100} className="relative z-10 flex flex-col w-full bg-[#fbe1ac] -mt-4 xs:-mt-1 sm:-mt-4 md:-mt-1 lg:-mt-2 xxlg:-mt-4 xxxlg:-mt-4 mb-10 sm:mb-16 px-4 sm:px-6 md:px-8 py-10 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-center">
        {/* Decorative top edge */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_cream.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-1 bg-[length:auto_100%]"></div>

        {/* Responsive main title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a4b8c] mb-4 sm:mb-6 drop-shadow-md">
          Our Honors
        </h3>

        {/* Description paragraph with max-width for better readability */}
        <p className="max-w-4xl mx-auto text-[#1a4b8c] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose drop-shadow-sm text-justify">
          Asre Talaei Bartar Spadana Company, owner of the Jolfa and Mazesta
          brands, has achieved valuable honors in Iran's food industry by
          relying on quality, innovation, and expertise. In 2024, the company
          received the Certificate of Commitment to Quality from the National
          Standards Organization of Iran and was also named the top food
          industry production unit in Isfahan province. Additionally,
          achieving the title of the top technical manager in the food industry
          of Isfahan province, which demonstrates the capability and competence
          of the technical management, is another of the company's honors.
          Continuing its path of innovation, in 2025, the company solidified its
          position in developing knowledge-based food products by registering
          the patent for processed cheese sauce.
        </p>

        {/* Decorative bottom edge */}
        <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/down_cream.svg')] bg-repeat-x bg-top z-10 top-full -translate-y-1 bg-[length:auto_100%]"></div>
      </ScrollReveal>

      {/* Awards image section */}
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
