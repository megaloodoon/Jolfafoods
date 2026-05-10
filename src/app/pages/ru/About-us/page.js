export default function AboutUsRu() {
  return (
    <main dir="ltr" className="w-full font-sans text-neutral-800 bg-white">
      <section
        className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Image/About-Us/Factory.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
          Узнайте о нас больше
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
                  alt="История"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">Наша история</h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                Компания Asre Talaei Bartar Spadana была основана в 2018 году и
                начала свою деятельность в сфере молочной продукции. Компания
                специализируется на производстве высококачественного сыра для
                пиццы. Помимо поставок по всей стране, компания успешно
                экспортирует свою продукцию в несколько стран региона и
                продолжает свой быстрый рост и развитие.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/history-image.png"
                alt="История"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/tech-image.png"
                alt="Технологии"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/tech-icon1.png"
                  alt="Технологии"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Развитие и технологии
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                Мы верим, что стабильное качество требует постоянных инноваций.
                Наш отдел исследований и разработок (R&D), используя новейшие
                мировые технологии, постоянно стремится производить продукцию
                высочайших стандартов. Передовое оборудование гарантирует полную
                гигиену и позволяет улучшать рецептуры для создания уникальных
                вкусов.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/quality-icon1.png"
                  alt="Качество"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Качество и инновации
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                Используя свежее сырье и передовое промышленное оборудование,
                компания стремится предлагать потребителям сыры для пиццы самого
                высокого качества. Идя в ногу с современной наукой, мы постоянно
                совершенствуем свою производственную рецептуру.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/quality-image.png"
                alt="Качество"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/global-image.png"
                alt="Мировой рынок"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/global-icon1.png"
                  alt="Мировой рынок"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Присутствие на мировом рынке
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                Непревзойденное качество нашей продукции вышло за пределы
                границ. Jolfa Food занимает особое место на международных
                рынках. Наше участие в престижных мероприятиях пищевой
                промышленности, включая выставку Gulfood Dubai 2026, является
                подтверждением нашего международного авторитета. Сегодня наша
                продукция экспортируется под брендом «Mazesta» в различные
                страны мира.
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
            Наши награды
          </h2>
          <p className="text-base md:text-xl leading-8 md:leading-9 text-[#1a4b8c] font-medium text-justify md:text-center">
            Компания Asre Talaei Bartar Spadana, владелец брендов Jolfa и
            Mazesta, опираясь на качество, инновации и опыт, завоевала ценные
            награды в пищевой промышленности. В 2024 году компания получила
            сертификат качества Иранской национальной организации по
            стандартизации. В 2025 году мы укрепили свои позиции в области
            наукоемких продуктов питания, запатентовав соус из плавленого сыра.
          </p>
        </div>
      </section>

      <section className="w-full md:bg-transparent pb-10 md:pb-0">
        <img
          src="/Image/About-Us/Awards.png"
          alt="Награды Jolfa Foods"
          className="w-full h-auto object-cover max-h-[800px]"
        />
      </section>
    </main>
  );
}
