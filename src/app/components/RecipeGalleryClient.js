'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function RecipeGalleryClient({ images = [], title = '' }) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
  const next = () => setActive((a) => (a + 1) % images.length);

  return (
    <div className="w-full">
      <div className="relative w-full h-64 md:h-96 bg-gray-100 rounded-md overflow-hidden">
        <Image src={images[active]} alt={`${title} ${active + 1}`} fill className="object-cover" />

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
        >
          ‹
        </button>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
        >
          ›
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={`${title} thumb ${i + 1}`}
            onClick={() => setActive(i)}
            className={`w-16 h-12 object-cover rounded-md cursor-pointer border ${i === active ? 'ring-2 ring-amber-400' : 'border-transparent'}`}
          />
        ))}
      </div>

      <div className="text-center mt-2 text-sm text-gray-600">{active + 1} / {images.length}</div>
    </div>
  );
}