export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray text-neutral-800 px-4 md:px-10 py-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          À propos de Jolfa Foods
        </h1>

        <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/Image/About-Us/Factory.jpg"
            alt="Usine Jolfa Foods"
            className="w-full h-[220px] md:h-[auto] object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Historique de l'entreprise
        </h2>

        <p className="text-lg leading-8 mb-6">
          {" "}
          Asr Talaei Bartar Espadana a été fondée en 2018 (2018 ap. J.-C.) et a
          commencé ses activités dans le domaine des divers produits laitiers.
          L’entreprise est spécialisée dans la production de fromage à pizza de
          haute qualité et a pu proposer ses produits de manière unique dans
          cette catégorie. En plus de la distribution nationale, en particulier
          par le biais de grandes chaînes de magasins, l’entreprise a réussi à
          exporter ses produits vers plusieurs pays de la région et continue de
          maintenir une tendance de croissance et de développement rapide.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Qualité et Innovation
        </h2>

        <p className="text-lg leading-8 mb-6">
          Asr Talaei Bartar Espadana s’efforce d’offrir aux consommateurs
          nationaux et internationaux les fromages à pizza de la plus haute
          qualité et les plus sains en utilisant diverses matières premières
          fraîches et des machines industrielles avancées. À cet égard, en
          accord avec les dernières connaissances mondiales, elle améliore
          continuellement sa formule de production spéciale.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Nos Réalisations</h2>
        <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/Image/About-Us/Awards.webp"
            alt="Jolfa Foods"
            className="w-full h-[220px] md:h-[auto] object-cover"
          />
        </div>
        <p className="text-lg leading-8 mb-6">
          Asr Talaei Bartar Espadana, propriétaire des marques Jolfa et Mazesta,
          a obtenu des distinctions précieuses dans l’industrie agroalimentaire
          du pays grâce à la qualité, à l’innovation et à l’expertise. En 2025
          (2025 ap. J.-C.), l’entreprise a obtenu avec succès un certificat
          d’engagement envers la qualité de la part de l’Organisation nationale
          des normes iraniennes et a simultanément reçu le titre de meilleure
          unité de production dans l’industrie agroalimentaire de la province
          d’Isfahan. De plus, l’obtention du poste de meilleur responsable
          technique dans l’industrie agroalimentaire de la province d’Isfahan,
          qui témoigne des capacités et de la compétence de la direction
          technique du complexe, est une autre des réalisations de l’entreprise.
          En poursuivant sur la voie de l’innovation, Asr Talaei Bartar Espadana
          a consolidé sa position dans le développement de produits
          agroalimentaires innovants en 2025 (2025 ap. J.-C.) en enregistrant un
          brevet pour la sauce au fromage traitée.
        </p>
      </section>
    </main>
  );
}
