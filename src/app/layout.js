// import "./globals.css";
// import { LanguageNav } from "./components/LanguageNav";
// import { Vazir } from "/src/app/fonts/vazir-font-v16.1.0/Vazir.ttf";
// import Footer from "./components/Footer";
// import {DiodrumArabicRegular} from "/public/Fonts/4photoshop-ir-Font-Diodrum/DiodrumArabicRegular.ttf"

// const vazir = Vazir({
//   subsets: ["arabic"],
//   weight: ["300", "400", "500"],
//   variable: "--font-vazir",
// });

// const Diod = DiodrumArabicRegular({
//   subsets: ["arabic"],
//   weight: ["300", "400", "500"],
//   variable: "--font-vazir",
// });

// export const metadata = {
//   title: "Jolfa Foods",
//   description: "پنیر پیتزا جولفا فودز",
//   icons: {
//     icon: "/Image/Jolfa-logo.png",
//     shortcut: "/Image/Jolfa-logo.png",
//     apple: "/Image/Jolfa-logo.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="fa">
//       {/* Theme is applied on the client after hydration by ThemeSwitcher to avoid SSR/CSR mismatch */}
//       <body
//         className={`${Diod.variable} ${vazir.variable}  antialiased font-sans transition-colors duration-300 bg-[url('/Image/Light.jpg')] dark:bg-[url('/Image/dark-blue.jpg')] bg-cover bg-center bg-no-repeat`}
//       >
//         <LanguageNav />

//         {children}

//         <Footer />
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local"; // 1. اضافه کردن localFont
import "./globals.css";
import { LanguageNav } from "./components/LanguageNav";
import Footer from "./components/Footer";

const vazir = localFont({
  src: "./fonts/Vazir.ttf", // مسیر نسبی به layout.js
  weight: "400", // وزن مورد نیاز را تنظیم کنید
  variable: "--font-vazir",
});

// اگر DiodrumArabicRegular یک فایل مجزا است، آن را هم تعریف کنید
const Diodrum = localFont({
  src: "./fonts/DiodrumArabicRegular.ttf", // مسیر نسبی
  weight: "400",
  variable: "--font-diodrum",
});

export const metadata = {
  title: "Jolfa Foods",
  description: "پنیر پیتزا جولفا فودز",
  icons: {
    icon: "/Image/Jolfa-logo.png",
    shortcut: "/Image/Jolfa-logo.png",
    apple: "/Image/Jolfa-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <meta
        name="google-site-verification"
        content="RKXjA_pQW874AjTtW4Yjdw5zXzGbGY4S3ytVSFBA5Eo"
      />

      <body
        className={`${Diodrum.variable} ${vazir.variable}  antialiased font-sans transition-colors duration-300 bg-[url('/Image/Light.jpg')] dark:bg-[url('/Image/dark-blue.jpg')] bg-cover bg-center bg-no-repeat`}
      >
        <LanguageNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
