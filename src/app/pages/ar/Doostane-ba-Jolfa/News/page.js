import path from "path";
import { readFile } from "fs/promises";
import Image from "next/image";
import NewsListClient from "@/app/components/NewsListClient";

export default async function NewsPageEn() {
  // دریافت داده‌ها از JSON
  const filePath = path.join(process.cwd(), "data", "news.json");
  const jsonData = await readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  const newsList = data.news || [];

  return (
    <main dir="rtl" className="w-full">
      {/* بنر تمام عرض اخبار */}
      <section className="relative w-full h-[40vh] min-h-[300px]">
        <Image
          src="/Image/New/News/news-banner.png"
          alt="خبرهای جلفا"
          fill
          className="object-cover"
          priority
        />
        {/* لایه تاریک روی عکس برای خوانایی متن */}
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-center px-4">
             الأخبار جلفا
          </h1>
        </div>
      </section>

      {/* لیست اخبار */}
      <NewsListClient newsList={newsList} locale="ar" />
    </main>
  );
}
