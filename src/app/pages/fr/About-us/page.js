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
                  alt="Histoire"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Notre Histoire
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
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
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/tech-image.png"
                alt="Technologie"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/tech-icon1.png"
                  alt="Technologie"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Développement & Technologie
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
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
                <h2 className="text-2xl md:text-3xl font-bold">
                  Qualité et Innovation
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
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
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/global-image.png"
                alt="Marché Mondial"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/global-icon1.png"
                  alt="Marché Mondial"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Présence sur le Marché Mondial
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
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

      <section
        className="w-full py-16 px-6 md:px-10 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Image/About-Us/Backg.png')" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4b8c] mb-8">
            Nos Honneurs
          </h2>
          <p className="text-base md:text-xl leading-8 md:leading-9 text-[#1a4b8c] font-medium text-justify md:text-center">
            Asre Talaei Bartar Spadana, propriétaire des marques Jolfa et
            Mazesta, a remporté de précieux prix dans l'industrie alimentaire
            grâce à la qualité et l'innovation. En 2024, l'entreprise a obtenu
            le certificat de qualité de l'Organisation Nationale des Normes et
            le titre de meilleur producteur de la province d'Ispahan. En 2025,
            elle a solidifié sa position en brevetant une sauce au fromage
            fondu.
          </p>
        </div>
      </section>

      <section className="w-full md:bg-transparent pb-10 md:pb-0">
        <img
          src="/Image/About-Us/Awards.png"
          alt="Récompenses Jolfa Foods"
          className="w-full h-auto object-cover max-h-[800px]"
        />
      </section>
    </main>
  );
}
