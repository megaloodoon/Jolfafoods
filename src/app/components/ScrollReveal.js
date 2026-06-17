"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // وقتی المان وارد صفحه (Viewport) می‌شود
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // فقط یک‌بار انیمیشن اجرا شود
        }
      },
      { threshold: 0.15 } // وقتی 15 درصد از المان دیده شد انیمیشن شروع شود
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
