"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";

  let currentLang = "fa";
  const segments = pathname.split("/").filter(Boolean);
  const supported = ["fa", "en", "ar", "ru", "fr"];
  if (segments[0] === "pages" && supported.includes(segments[1])) {
    currentLang = segments[1];
  } else if (supported.includes(segments[0])) {
    currentLang = segments[0];
  }

  const base = `/pages/${currentLang}`;

  const labels = {
    fa: {
      contact: " تماس با ما",
      email: "Email",
      address: "آدرس کارخانه",
      follow: "ما را در شبکه های اجتماعی دنبال کنید",
      phone: "",
      rights: "تمامی حقوق برای جلفا فودز محفوظ است",
    },
    en: {
      contact: "Contact us",
      email: "Email",
      address: "Factory Address",
      follow: "Follow us",
      phone: "",
      rights: "All rights reserved — Jolfa Foods",
    },
    ar: {
      contact: "اتصال",
      email: "Email",
      address: "عنوان المصنع",
      follow: "تابعنا",
      phone: "",
      rights: "جميع الحقوق محفوظة — Jolfa Foods",
    },
    ru: {
      contact: "Контакты",
      email: "Email",
      address: "Адрес завода",
      follow: "Следите за нами",
      phone: "",
      rights: "Все права защищены — Jolfa Foods",
    },
    fr: {
      contact: "Contact",
      email: "Email",
      address: "Adresse de l'usine",
      follow: "Suivez-nous",
      phone: "",
      rights: "Tous droits réservés — Jolfa Foods",
    },
  }[currentLang];

  // Shared contact info (kept in sync with Contact pages)
  const email = ": info@jolfafoods.com";
  const phone = currentLang === "fa" ? " 09134441269" : " +989134441269";
  const address = currentLang === "fa"
    ? "ایران - اصفهان - شهرک صنعتی رازی - خیابان چهارم" 
    : "Iran - Isfahan - Razi Industrial Town - 4th Street";

  return (
    <footer className="mt-12 bg-white/80 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-900 text-center">
      <div className=" max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="gap-4 my-1 ">
          <Link href={base} className="inline-block align-middle my-1 ">
            <Image
              src="/Image/Jolfa-logo.png"
              alt="Jolfa Foods"
              width={160}
              height={48}
            />
          </Link>
          <p className=" text-center mt-2 text-sm font-bold text-neutral-700 dark:text-neutral-300">
            {labels.rights}
          </p>
        </div>

        <div className="flex flex-col py-1">
          <h4 className="mb-2 flex justify-center font-bold">{labels.contact}</h4>
          <h4 className=" text-sm text-neutral-700 dark:text-neutral-300 flex justify-center mt-1">
            {labels.phone}{" "}
            <a href={`tel:${phone}`} className="text-lg ">
              {phone}
            </a>
          </h4>
          <div className="font-bold text-sm text-neutral-700 dark:text-neutral-300 flex justify-center mt-1">
            {labels.email}{" "}
            <a href={`mailto:${email}`} className="">
              {email}
            </a>
          </div>
          <div className="font-bold text-1xl text-center text-neutral-700 dark:text-neutral-300 mt-2">
            {labels.address} <div className="mt-2 text-sm">{address}</div>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="font-semibold flex justify-center m-5">{labels.follow}</h4>
          <div className="flex items-center justify-center gap-6  ">
            <a
              href="https://www.instagram.com/jolfacheese"
              target="_blank"
              rel="noreferrer"
              aria-label="instagram"
            >
              <img
                src="/Image/Logo/instagram.png"
                alt="instagram"
                className="w-12 h-12 object-contain"
              />
            </a>
            <a
              href="https://t.me/jolfacheese"
              target="_blank"
              rel="noreferrer"
              aria-label="telegram"
            >
              <img
                src="/Image/Logo/Telegram.png"
                alt="telegram"
                className="w-12 h-12 object-contain"
              />
            </a>
            <a
              href="https://wa.me/+989134441269"
              target="_blank"
              rel="noreferrer"
              aria-label="whatsapp"
            >
              <img
                src="/Image/Logo/whatsapp.png"
                alt="whatsapp"
                className="w-12 h-12 object-contain"
              />
            </a>
          </div>
          {/*  */}
        </div>
      </div>
    </footer>
  );
}
