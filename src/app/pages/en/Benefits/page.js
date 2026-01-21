import Image from "next/image";

export default function Benefits() {
    const items = [
        {
            id: 1,
            title: "Consistent Melting",
            description:
                "Jolfa pizza cheeses are formulated to melt uniformly, giving an even golden-brown finish across different ovens.",
            image: "/Image/mozzarella.jpg",
        },
        {
            id: 2,
            title: "Superior Flavor",
            description:
                "Balanced dairy notes provide the classic pizza taste while allowing toppings to shine.",
            image: "/Image/Cheese.jpg",
        },
        {
            id: 3,
            title: "Stable Performance",
            description:
                "Designed for commercial kitchens: consistent stretch, browning and minimal oil separation.",
            image: "/Image/swiss-cheese.jpg",
        },
        {
            id: 4,
            title: "Food-Safe & Tested",
            description:
                "Produced under strict quality controls with traceability for each batch.",
            image: "/Image/Jolfa-logo.png",
        },
    ];

    return (
        <main className="min-h-screen px-4 md:px-10 py-16">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Jolfa Pizza Cheese</h1>

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
