export default function AboutUsAr() {
  return (
    <main dir="rtl" className="w-full font-sans text-neutral-800 bg-white">
      <section
        className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Image/About-Us/Factory.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
          تعرف علينا أكثر
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
                  alt="تاريخنا"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">تاريخنا</h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                تأسست شركة عصر طلائي برتر إسبادانا في عام 2018 وبدأت نشاطها في
                مجال منتجات الألبان. تتخصص الشركة في إنتاج جبنة البيتزا عالية
                الجودة وتمكنت من تقديم منتجات فريدة في هذه الفئة. بالإضافة إلى
                التوزيع على مستوى البلاد، نجحت الشركة في تصدير منتجاتها إلى
                العديد من دول المنطقة وتواصل نموها وتطورها السريع.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/history-image.png"
                alt="تاريخنا"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/tech-image.png"
                alt="التكنولوجيا"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/tech-icon1.png"
                  alt="التكنولوجيا"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  التطوير والتكنولوجيا
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                في شركة عصر طلائي برتر إسبادانا، نؤمن بأن الجودة المستدامة تتطلب
                ابتكاراً مستمراً. يسعى قسم البحث والتطوير (R&D) لدينا دائماً
                لإنتاج منتجات تلبي أعلى معايير الجودة باستخدام أحدث التقنيات.
                يضمن استخدام الآلات المتقدمة والآلية بالكامل النظافة الكاملة،
                ويسمح لنا بتحسين التركيبات لتقديم نكهات استثنائية لعملائنا.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/quality-icon1.png"
                  alt="الجودة"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  الجودة والابتكار
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                باستخدام المواد الخام الطازجة والآلات الصناعية المتقدمة، تسعى
                الشركة لتقديم أعلى جودة وأكثر أنواع جبن البيتزا صحية للمستهلكين.
                وفي هذا الصدد، نعمل باستمرار على ترقية تركيبة الإنتاج الخاصة بنا
                لتواكب أحدث التطورات العلمية.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/Image/About-Us/quality-image.png"
                alt="الجودة"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-4 order-last md:order-first">
              <img
                src="/Image/About-Us/global-image.png"
                alt="السوق العالمية"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="/Image/About-Us/Icons/global-icon1.png"
                  alt="السوق العالمية"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  الحضور في السوق العالمية
                </h2>
              </div>
              <p className="text-base md:text-lg leading-8 text-blue-50 text-justify">
                الجودة الاستثنائية لمنتجاتنا تجاوزت الحدود. تفخر جلفا فود
                بمكانتها الخاصة في الأسواق الدولية واجتياز المعايير العالمية
                بنجاح. إن حضورنا الفعال في أرقى الفعاليات الغذائية، مثل معرض
                جلفود دبي 2026 (Gulfood)، هو دليل على قدراتنا ومصداقيتنا. اليوم،
                يتم تصدير منتجاتنا تحت العلامة التجارية "مازستا" إلى دول مختلفة
                حول العالم.
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
            إنجازاتنا
          </h2>
          <p className="text-base md:text-xl leading-8 md:leading-9 text-[#1a4b8c] font-medium text-justify md:text-center">
            شركة عصر طلائي برتر إسبادانا، المالكة للعلامتين التجاريتين جلفا
            ومازستا، حققت إنجازات قيمة في صناعة الأغذية اعتماداً على الجودة
            والابتكار. في عام 2024، حصلت الشركة على شهادة الجودة من منظمة
            المعايير الوطنية الإيرانية ولقب أفضل منتج في محافظة أصفهان. كما رسخت
            الشركة مكانتها في تطوير المنتجات المعرفية من خلال تسجيل براءة اختراع
            لصلصة الجبن المطبوخ في عام 2025.
          </p>
        </div>
      </section>

      <section className="w-full md:bg-transparent pb-10 md:pb-0">
        <img
          src="/Image/About-Us/Awards.png"
          alt="جوائزنا"
          className="w-full h-auto object-cover max-h-[800px]"
        />
      </section>
    </main>
  );
}
