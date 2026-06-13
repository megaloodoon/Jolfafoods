"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// آبجکت جامع برای تمام ترجمه‌ها (شامل لینک‌های دسترسی آسان)
const translations = {
  // ... (ترجمه‌های شما بدون تغییر)
  fa: {
    mailboxTitle: "پنیر شما اینجاست، کافیه",
    mailboxSubtitle: "باهامون تماس بگیرید!",
    phone: "تلفن",
    address: "آدرس",
    instagram: "اینستاگرام",
    telegram: "تلگرام",
    email: "ایمیل",
    whatsapp: "واتساپ",
    addressText: "ایران، اصفهان، شهرک صنعتی رازی، خیابان 4",
    phone1: "09134441269",
    igUser: "jolfacheese",
    tgUser: "jolfacheese",
    emailAddr: "info@jolfafoods.com",
    waPhone: "09134441269",
    logoSlogan: "شروع یک طعم جدید",
    copyright: "تمامی حقوق مربوط به برند جلفا محفوظ است",
    quickLinksTitle: "دسترسی آسان",
    home: "خانه",
    products: "محصولات",
    recipes: "دستور پخت‌ها",
    about: "درباره ما",
    contact: "تماس با ما",
  },
  en: {
    mailboxTitle: "Your cheese is here,",
    mailboxSubtitle: "just give us a call!",
    phone: "Phone",
    address: "Address",
    instagram: "Instagram",
    telegram: "Telegram",
    email: "Email",
    whatsapp: "WhatsApp",
    addressText: "4th St, Razi Industrial Town, Isfahan, Iran",
    phone1: "+989134441269",
    igUser: "jolfacheese",
    tgUser: "jolfacheese",
    emailAddr: "info@jolfafoods.com",
    waPhone: "+989134441269",
    logoSlogan: "Start a new taste",
    copyright: "All rights reserved for Jolfa brand",
    quickLinksTitle: "Quick Links",
    home: "Home",
    products: "Products",
    recipes: "Recipes",
    about: "About Us",
    contact: "Contact",
  },
  ar: {
    mailboxTitle: "الجبن الخاص بك هنا،",
    mailboxSubtitle: "فقط اتصل بنا!",
    phone: "هاتف",
    address: "عنوان",
    instagram: "انستغرام",
    telegram: "تلغرام",
    email: "بريد إلكتروني",
    whatsapp: "واتساب",
    addressText: "شارع 4، مدينة رازي الصناعية، أصفهان، إيران",
    phone1: "+989134441269",
    igUser: "jolfacheese",
    tgUser: "jolfacheese",
    emailAddr: "info@jolfafoods.com",
    waPhone: "+989134441269",
    logoSlogan: "بداية طعم جديد",
    copyright: "جميع الحقوق محفوظة لعلامة جلفا التجارية",
    quickLinksTitle: "وصول سريع",
    home: "الرئيسية",
    products: "منتجات",
    recipes: "وصفات",
    about: "من نحن",
    contact: "اتصال",
  },
  ru: {
    mailboxTitle: "Ваш сыр здесь,",
    mailboxSubtitle: "просто позвоните нам!",
    phone: "Телефон",
    address: "Адрес",
    instagram: "Инстаграм",
    telegram: "Телеграм",
    email: "Эл. почта",
    whatsapp: "WhatsApp",
    addressText: "ул. 4-я, Промышленный город Рази, Исфахан, Иран",
    phone1: "+989134441269",
    igUser: "jolfacheese",
    tgUser: "jolfacheese",
    emailAddr: "info@jolfafoods.com",
    waPhone: "+989134441269",
    logoSlogan: "Начните новый вкус",
    copyright: "Все права защищены для бренда Jolfа",
    quickLinksTitle: "Быстрые ссылки",
    home: "Главная",
    products: "Продукция",
    recipes: "Рецепты",
    about: "О нас",
    contact: "Контакты",
  },
  fr: {
    mailboxTitle: "Votre fromage est ici,",
    mailboxSubtitle: "appelez-nous !",
    phone: "Téléphone",
    address: "Adresse",
    instagram: "Instagram",
    telegram: "Télégramme",
    email: "Email",
    whatsapp: "WhatsApp",
    addressText: "4ème rue, Zone industrielle de Razi, Ispahan, Iran",
    phone1: "+989134441269",
    igUser: "jolfacheese",
    tgUser: "jolfacheese",
    emailAddr: "info@jolfafoods.com",
    waPhone: "+989134441269",
    logoSlogan: "Commencez un nouveau goût",
    copyright: "Tous droits réservés pour la marque Jolfa",
    quickLinksTitle: "Accès Rapide",
    home: "Accueil",
    products: "Produits",
    recipes: "Recettes",
    about: "À propos",
    contact: "Contact",
  },
};

export default function Footer() {
  const pathname = usePathname() || "/";
  let currentLang = "fa";
  const segments = pathname.split("/").filter(Boolean);
  const supported = ["fa", "en", "ar", "ru", "fr"];

  if (segments.length > 0 && supported.includes(segments[0])) {
    currentLang = segments[0];
  } else if (
    segments.length > 1 &&
    segments[0] === "pages" &&
    supported.includes(segments[1])
  ) {
    currentLang = segments[1];
  }

  const t = translations[currentLang];
  const isRtl = ["fa", "ar"].includes(currentLang);
  const base = `/pages/${currentLang}`;

  const LogoColumn = () => (
    <div
      className={`flex flex-col items-center ${
        isRtl ? "md:items-start" : "md:items-end"
      } gap-1 md:gap-4 w-1/3 md:w-auto`}
    >
      <Link href={base}>
        <Image
          src="/Image/Jolfa-logo.png"
          alt="Jolfa Foods Logo"
          width={140}
          height={50}
          className="w-16 xxs:w-[80px] xs:w-[80px] md:w-[130px] h-auto object-contain"
        />
      </Link>
      <h4 className="font-bold text-[8px] sm:text-[10px] md:text-lg text-center text-white md:text-right">
        {t.logoSlogan}
      </h4>
      <p className="font-semibold text-[6px] sm:text-[8px] md:text-sm text-gray-300 text-center md:text-right">
        {t.copyright}
      </p>
    </div>
  );

  const QuickLinksColumn = () => (
    <div
      className={`hidden lg:flex flex-col items-center md:items-start text-white md:mx-[2px] gap-2 text-[8px] sm:text-[10px] md:text-base md:w-auto`}
    >
      <Link
        href={base}
        className="hover:text-blue-300 text-white transition-colors"
      >
        {t.home}
      </Link>
      <Link
        href={`${base}/products`}
        className="hover:text-blue-300 text-white transition-colors"
      >
        {t.products}
      </Link>
      <Link
        href={`${base}/Doostane-ba-Jolfa/recipes`}
        className="hover:text-blue-300 text-white transition-colors"
      >
        {t.recipes}
      </Link>
      <Link
        href={`${base}/About-us`}
        className="hover:text-blue-300 text-white transition-colors"
      >
        {t.about}
      </Link>
      <Link
        href={`${base}/Contact-us`}
        className="hover:text-blue-300 text-white transition-colors"
      >
        {t.contact}
      </Link>
    </div>
  );

  const ContactColumn = () => (
    <div
      // تغییر items-center به items-start برای تراز شدن هوشمند بر اساس جهت زبان
      className="flex flex-col items-start text-white justify-center md:mx-[2px] gap-2 md:gap-3 text-[9px] sm:text-[10px] md:text-base w-1/3 md:w-auto"
    >
      <a
        href={`tel:${t.phone1?.replace(/\s/g, "")}`}
        className="flex text-white items-center gap-1.5 md:gap-3 hover:text-blue-300 transition-colors"
      >
        <Image
          src="/Image/New/Icons/phone.png"
          alt="Phone"
          width={28}
          height={28}
          // تنظیم سایز آیکون برای موبایل به w-4 h-4
          className="w-6 h-6 xs:h-3.5 xs:w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-7 lg:h-7 shrink-0"
        />
        <span dir="ltr">{t.phone1}</span>
      </a>

      <a
        href={`https://instagram.com/${t.igUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-white items-center gap-1.5 md:gap-3 hover:text-blue-300 transition-colors"
      >
        <Image
          src="/Image/New/Icons/instagram.png"
          alt="Instagram"
          width={28}
          height={28}
          className="w-6 h-6 xs:h-3.5 xs:w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-7 lg:h-7 shrink-0"
        />
        <span dir="ltr">{t.igUser}</span>
      </a>

      <a
        href={`https://t.me/${t.tgUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-white items-center gap-1.5 md:gap-3 hover:text-blue-300 transition-colors"
      >
        <Image
          src="/Image/New/Icons/telegram.png"
          alt="Telegram"
          width={28}
          height={28}
          className="w-6 h-6 xs:h-3.5 xs:w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-7 lg:h-7 shrink-0"
        />
        <span dir="ltr">{t.tgUser}</span>
      </a>

      <div className="flex text-white items-start gap-1.5 md:gap-3">
        <Image
          src="/Image/New/Icons/location.png"
          alt="Location"
          width={28}
          height={28}
          className="w-5 h-6 xs:h-3.5 xs:w-3 sm:h-5 sm:w-4 md:h-6 md:w-5 lg:w-6 lg:h-7 shrink-0"
        />
        {/* حذف text-center و تغییر به text-start */}
        <span className="leading-tight text-start">{t.addressText}</span>
      </div>
    </div>
  );

  const MailboxColumn = () => (
    <div className="flex flex-col items-center justify-center md:mx-[2px] w-1/3 md:w-auto -mt-4 md:-mt-8">
      <Image
        src="/Image/New/mailbox-illustration.png"
        alt="Mailbox"
        width={150}
        height={150}
        className="w-16 xxs:w-[80px] xs:w-[90px] md:w-[140px] h-auto mb-1 md:mb-1 object-contain"
      />
      <p className="font-kalame text-white text-center text-[7px] sm:text-[9px] md:text-base leading-tight">
        {t.mailboxTitle}
        <br />
        {t.mailboxSubtitle}
      </p>
    </div>
  );

  return (
    <footer className="text-white bg-[#154994] pt-2 pb-8 md:pt-4 md:pb-12 relative mt-[15px]">
      {/* پدینگ پایین (pb) به pb-8 در موبایل و pb-12 در دسکتاپ افزایش یافت */}

      {/* لبه تزئینی SVG */}
      <div className="absolute left-0 w-full h-[30px] md:h-[50px] bg-[url('/Image/New/Backgrounds/up_blue.svg')] bg-repeat-x bg-bottom z-10 bottom-full translate-y-[5px] bg-[length:auto_101%] border-none outline-none"></div>

      {/* تغییر flex-wrap به flex-nowrap برای یک‌ردیفه شدن */}
      <div
        className="w-full max-w-7xl mx-auto px-2 sm:px-2 md:px-4 flex flex-row flex-nowrap justify-between items-center relative z-20"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {isRtl ? (
          <>
            <MailboxColumn />
            <QuickLinksColumn />
            <ContactColumn />
            <LogoColumn />
          </>
        ) : (
          <>
            <LogoColumn />
            <ContactColumn />
            <QuickLinksColumn />
            <MailboxColumn />
          </>
        )}
      </div>
    </footer>
  );
}
