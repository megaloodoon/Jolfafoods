/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        semibold: ["var(--font-bold)"],
        bold: ["var(--font-bold)"],
        kalame: ["var(--font-kalame)"],
        diodrum: ["var(--font-diodrum)"],
      },
      screens: {
        xxs: "288px",
        xs: "360px",
        gx: "1150px",
        xxlg: "1450px",
        xxxlg: "2000px",
      },
    },
  },
  plugins: [require("daisyui"), "@tailwindcss/typography"],
  daisyui: {
    themes: false, // غیرفعال کردن تم‌های پیش‌فرض
    logs: false, // غیرفعال کردن پیام‌های کنسول/ترمینال
  },
};
