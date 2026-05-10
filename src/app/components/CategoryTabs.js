"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/data/allProducts"; // آدرس فایل دیتایی که ساختید

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10 px-4">
      {CATEGORIES.map((cat) => {
        // تشخیص اینکه آیا در صفحه همین دسته‌بندی هستیم یا خیر
        const isActive = pathname === cat.path;
        
        return (
          <Link
            key={cat.id}
            href={cat.path}
            className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              isActive
                ? "bg-[#1a4b8c] text-white shadow-lg shadow-[#1a4b8c]/30 scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </div>
  );
}
