"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { ease } from "@/lib/motion";
export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k); return () => removeEventListener("keydown", k);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const link = "text-meta uppercase text-ivory/80 transition-colors hover:text-gold";
  return (
    <header className="wrap fixed inset-x-0 top-0 z-50 flex items-center justify-between py-5 mix-blend-difference">
      <a href="#top" className="relative z-10 text-meta font-semibold uppercase" aria-label="Siva, back to top">Siva</a>
      <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
        {nav.map((n) => <a key={n} href={`#${n}`} data-cursor="link" className={link}>{n}</a>)}
        <a href={site.resume} download data-cursor="link" className={`${link} flex items-center gap-2 border-l border-line pl-8`}>Resume <Download size={12} aria-hidden /></a>
      </nav>
      <button className="relative z-10 flex size-11 items-center justify-center md:hidden" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <AnimatePresence>
        {open && (
          <motion.div id="menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.7, ease }}
            className="wrap fixed inset-0 flex flex-col justify-center gap-3 bg-ink-900">
            {nav.map((n, i) => <a key={n} href={`#${n}`} onClick={() => setOpen(false)} className="font-serif text-6xl italic"><span className="mr-3 align-top font-sans text-meta not-italic text-gold">0{i + 1}</span>{n}</a>)}
            <a href={site.resume} download className="mt-6 flex items-center gap-2 text-meta uppercase text-gold">Download resume <Download size={14} aria-hidden /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
