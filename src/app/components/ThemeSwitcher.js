"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    // Default to light mode instead of following system preference
    return "light";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const activeClass = theme === "dark" ? "theme-dark" : "theme-light";
    const removeClass = theme === "dark" ? "theme-light" : "theme-dark";
    const el = document.documentElement;
    el.classList.remove(removeClass);
    el.classList.add(activeClass);
    if (theme === "dark") {
      el.classList.add("dark");
    } else {
      el.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="theme-switch">
      <Image src="/Image/sun.png" alt="Light mode" width={25} height={25} />
      <button onClick={toggleTheme} aria-label="Toggle theme" />
      <Image src="/Image/moon.png" alt="Dark mode" width={25} height={25} />
    </div>
  );
}
