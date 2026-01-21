export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray text-neutral-800 px-4 md:px-10 py-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          About Jolfa Foods
        </h1>

        <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/Image/About-Us/Factory.jpg"
            alt="Jolfa Foods Factory"
            className="w-full h-[220px] md:h-[auto] object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Company History</h2>

        <p className="text-lg leading-8 mb-6">
          {" "}
          Asr Talaei Bartar Espadana Company was established in 2018 (2018 AD)
          and began its operations in the field of various dairy products. The
          company specializes in the production of high-quality pizza cheese and
          has been able to offer its products uniquely in this category. In
          addition to nationwide distribution, especially through large chain
          stores, the company has successfully exported its products to several
          countries in the region and continues to maintain a rapid growth and
          development trend.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Quality and Innovation
        </h2>

        <p className="text-lg leading-8 mb-6">
          Asr Talaei Bartar Espadana Company strives to offer the highest
          quality and healthiest pizza cheeses to domestic and foreign consumers
          by utilizing various fresh raw materials and advanced industrial
          machinery. In this regard, in line with the latest global science, it
          continuously improves its special production formula.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Our Achievements</h2>
        <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/Image/About-Us/Awards.webp"
            alt="Jolfa Foods"
            className="w-full h-[220px] md:h-[auto] object-cover"
          />
        </div>
        <p className="text-lg leading-8 mb-6">
          Asr Talaei Bartar Espadana Company, the owner of the Jolfa and Mazesta
          trademarks, has achieved valuable honors in the food industry of the
          country based on quality, innovation, and expertise. In 2025 (2025
          AD), the company was successful in obtaining a quality commitment
          certificate from the National Standards Organization of Iran and
          simultaneously received the title of the best food manufacturing unit
          in Isfahan Province. Also, achieving the position of the best
          technical official in the food industry of Isfahan Province, which
          indicates the capabilities and competence of the technical management
          of the complex, is another of the company’s achievements. Continuing
          on the path of innovation, Asr Talaei Bartar Espadana Company
          solidified its position in the development of knowledge-based food
          industry products in 2025 (2025 AD) by registering a patent for
          processed cheese sauce.
        </p>
      </section>
    </main>
  );
}
