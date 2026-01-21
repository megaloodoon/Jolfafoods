export default function BenefitsAr() {
    const items = [
        {
            id: 1,
            title: "الذوب المتسق",
            description: "أجبان جولفا مصممة للذوبان المتناسق وإعطاء سطح ذهبي جميل في الفرن.",
            image: "/Image/mozzarella.jpg",
        },
        {
            id: 2,
            title: "نكهة ممتازة",
            description: "نكهة متوازنة تسمح للمكونات الأخرى بالتألق.",
            image: "/Image/Cheese.jpg",
        },
        {
            id: 3,
            title: "أداء مستقر",
            description: "مناسبة للمطابخ التجارية مع مرونة جيدة وفصل قليل للزيت.",
            image: "/Image/swiss-cheese.jpg",
        },
        {
            id: 4,
            title: "جودة ومتابعة",
            description: "إنتاج تحت ضوابط جودة صارمة مع إمكانية تتبع كل دفعة.",
            image: "/Image/Jolfa-logo.png",
        },
    ];

    return (
        <main className="min-h-screen px-4 md:px-10 py-16">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">فوائد جبنة بيتزا جولفا</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((it) => (
                        <article key={it.id} className="rounded-lg shadow-sm p-4 bg-white">
                            <div className="w-full h-36 overflow-hidden rounded-md mb-3">
                                <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-semibold mb-2">{it.title}</h3>
                            <p className="text-sm text-gray-600">{it.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

