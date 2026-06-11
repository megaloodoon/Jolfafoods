import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local"; // 1. اضافه کردن localFont
import "./globals.css";
import LanguageNav from "./components/LanguageNav";
import Footer from "./components/Footer";

// اگر DiodrumArabicRegular یک فایل مجزا است، آن را هم تعریف کنید
const Diodrum = localFont({
  src: "../../public/Fonts/4photoshop-ir-Font-Diodrum/DiodrumArabic-Light.ttf",
  weight: "400",
  variable: "--font-diodrum",
});

const Kalame = localFont({
  src: "../../public/Fonts/Kalame/TTF/Kalameh-Regular.ttf",
  weight: "400",
  variable: "--font-kalame",
});

const Bold = localFont({
  src: "../../public/Fonts/Kalame/TTF/Kalameh-Bold.ttf",
  weight: "400",
  variable: "--font-bold",
});

const SemiBold = localFont({
  src: "../../public/Fonts/Kalame/TTF/Kalameh-SemiBold.ttf",
  weight: "400",
  variable: "--font-semibold",
});

export const metadata = {
  title: "Jolfa Foods",
  description: "پنیر پیتزا جلفا",
  icons: {
    icon: "/Image/Jolfa-logo.png",
    shortcut: "/Image/Jolfa-logo.png",
    apple: "/Image/Jolfa-logo.png",
  },
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang="fa">
      <meta
        name="google-site-verification"
        content="RKXjA_pQW874AjTtW4Yjdw5zXzGbGY4S3ytVSFBA5Eo"
      />

      <body
        className={`${Kalame.variable} ${Diodrum.variable} ${SemiBold.variable} ${Bold.variable} ${SemiBold.variable} antialiased font-kalame transition-colors duration-300 bg-center bg-no-repeat`}
      >
        <LanguageNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
