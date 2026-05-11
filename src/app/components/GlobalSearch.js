"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function GlobalSearch({ locale = "fa", open = false, onClose = () => {} }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!open) return;
    setQ("");
    setResults([]);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!q) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      fetch(`/api/search?locale=${locale}&q=${encodeURIComponent(q)}`)
        .then((r) => r.json())
        .then((data) => setResults(data || []))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 220);
    return () => clearTimeout(timer.current);
  }, [q, locale, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-start justify-center p-6">
          <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
          <motion.div initial={{ y: -10 }} animate={{ y: 0 }} exit={{ y: -10 }} className="relative z-10 w-full max-w-3xl">
            <div className="bg-base-100 text-base-content rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 flex gap-3 items-center">
                <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder={locale === 'fa' ? 'جستجو...' : 'Search...'} className="input input-bordered w-full" />
                <button className="btn btn-ghost" onClick={onClose}>{locale === 'fa' ? 'بستن' : 'Close'}</button>
              </div>
              <div className="p-4 max-h-72 overflow-auto">
                {loading && <div className="text-sm text-gray-500 dark:text-gray-400">{locale === 'fa' ? 'در حال جستجو...' : 'Searching...'}</div>}
                {!loading && results.length === 0 && q && <div className="text-sm text-gray-500 dark:text-gray-400">{locale === 'fa' ? 'نتیجه‌ای پیدا نشد.' : 'No results found.'}</div>}
                <ul className="space-y-2">
                  {results.map((r) => (
                    <li key={`${r.type}-${r.id}`} className="p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                      <Link href={r.url} className="flex items-center gap-3 text-base-content" onClick={() => onClose()}>
                        {r.image && <img src={r.image} alt={r.title} className="w-16 h-12 object-cover rounded" />}
                        <div>
                          <div className="font-semibold">{r.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{r.type}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
