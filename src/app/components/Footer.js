"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// آبجکت جامع برای تمام ترجمه‌ها
const translations = {
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
      className={`flex flex-col items-center ${isRtl ? "md:items-start" : "md:items-end"} gap-1 md:gap-4`}
    >
      <Link href={base}>
        <Image
          src="/Image/Jolfa-logo.png"
          alt="Jolfa Foods Logo"
          width={140}
          height={50}
          className="w-16 md:w-[140px] h-auto object-contain"
        />
      </Link>
      <h4 className="font-bold text-[8px] sm:text-[10px] md:text-lg text-center text-white md:text-right">
        {t.logoSlogan}
      </h4>
      <p className="text-[6px] sm:text-[8px] md:text-sm text-gray-300 text-center md:text-right">
        {t.copyright}
      </p>
    </div>
  );

  const ContactColumn = () => (
    <div
      className={`flex flex-col items-start text-white justify-center gap-1.5 md:gap-3 text-[7px] sm:text-[9px] md:text-base w-full ${isRtl ? "" : "md:items-center"}`}
    >
      <a
        href={`tel:${t.phone1?.replace(/\s/g, "")}`}
        className="flex text-white items-center gap-1 md:gap-3 hover:text-blue-300 transition-colors"
      >
        <Image
          src="/Image/New/Icons/phone.png"
          alt="Phone"
          width={28}
          height={28}
          className="w-3 h-3 md:w-7 md:h-7 shrink-0"
        />
        <span dir="ltr">{t.phone1}</span>
      </a>

      <a
        href={`https://instagram.com/${t.igUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-white items-center gap-1 md:gap-3 hover:text-blue-300 transition-colors"
      >
        <Image
          src="/Image/New/Icons/instagram.png"
          alt="Instagram"
          width={28}
          height={28}
          className="w-3 h-3 md:w-7 md:h-7 shrink-0"
        />
        <span dir="ltr">{t.igUser}</span>
      </a>

      <a
        href={`https://t.me/${t.tgUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-white items-center gap-1 md:gap-3 hover:text-blue-300 transition-colors"
      >
        <Image
          src="/Image/New/Icons/telegram.png"
          alt="Telegram"
          width={28}
          height={28}
          className="w-3 h-3 md:w-7 md:h-7 shrink-0"
        />
        <span dir="ltr">{t.tgUser}</span>
      </a>

      <div className="flex text-white items-start gap-1 md:gap-3">
        <Image
          src="/Image/New/Icons/location.png"
          alt="Location"
          width={28}
          height={28}
          className="w-3 h-3 md:w-7 md:h-7 shrink-0"
        />
        <span className="leading-tight">{t.addressText}</span>
      </div>
    </div>
  );

  const MailboxColumn = () => (
    <div className="flex flex-col items-center justify-center -mt-4 md:-mt-8">
      <Image
        src="/Image/New/mailbox-illustration.png"
        alt="Mailbox"
        width={150}
        height={150}
        className="w-16 md:w-[180px] h-auto mb-1 md:mb-4 object-contain"
      />
      <p className="font-bold text-white text-center text-[7px] sm:text-[9px] md:text-base leading-tight">
        {t.mailboxTitle}
        <br />
        {t.mailboxSubtitle}
      </p>
    </div>
  );

  return (
    <footer
      className="text-white py-4 md:py-8 border-t-0 relative flex items-center"
      style={{
        backgroundImage:
          "url('/Image/New/Backgrounds/Products-background2.png')",
      }}
    >
      <div
        className="w-full max-w-7xl mx-auto px-2 md:px-6 grid grid-cols-3 gap-2 md:gap-8 items-end md:items-center relative z-10 pb-2 md:pb-0"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {isRtl ? (
          <>
            <MailboxColumn />
            <ContactColumn />
            <LogoColumn />
          </>
        ) : (
          <>
            <LogoColumn />
            <ContactColumn />
            <MailboxColumn />
          </>
        )}
      </div>
    </footer>
  );
}
