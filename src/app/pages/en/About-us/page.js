export default function AboutUsEn() {
  return (
    <main dir="ltr" className="w-full font-sans text-neutral-800 bg-white">
      <section
        className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Image/About-Us/Factory.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
          Know More About Us
        </h1>
      </section>

      <section
        className="w-full py-16 md:py-24 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
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
                  alt="History"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">Our History</h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
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
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/tech-image.png"
                alt="Technology"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/tech-icon1.png"
                  alt="Technology"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Development & Technology
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/quality-icon1.png"
                  alt="Quality"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Quality & Innovation
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
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
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/global-image.png"
                alt="Global Market"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/global-icon1.png"
                  alt="Global Market"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Global Market Presence
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                The unparalleled quality of our products has crossed borders.
                Jolfa Food proudly holds a special place in international
                markets, successfully meeting global standards. Our active
                presence in the world's most prestigious food industry events,
                including Gulfood Dubai 2026, is a testament to our
                international credibility. Today, our products are exported
                under the "Mazesta" brand to various countries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full py-16 px-6 md:px-10 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Image/About-Us/Backg.png')" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4b8c] mb-8">
            Our Honors
          </h2>
          <p className="text-base md:text-xl leading-8 md:leading-9 text-[#1a4b8c] font-medium text-justify md:text-center">
            Asre Talaei Bartar Spadana, owner of Jolfa and Mazesta brands,
            relying on quality, innovation, and expertise, has won valuable
            honors in the country's food industry. In 2024, the company obtained
            a quality certificate from the Iranian National Standards
            Organization and was named the top food industry producer in Isfahan
            province. It also achieved the title of top technical manager,
            reflecting management competence. Continuing its innovative path,
            the company solidified its position in knowledge-based food products
            by patenting a processed cheese sauce in 2025.
          </p>
        </div>
      </section>

      <section className="w-full md:bg-transparent pb-10 md:pb-0">
        <img
          src="/Image/About-Us/Awards.png"
          alt="Jolfa Foods Awards"
          className="w-full h-auto object-cover max-h-[800px]"
        />
      </section>
    </main>
  );
}
