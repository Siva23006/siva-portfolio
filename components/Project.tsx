"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ease } from "@/lib/motion";
import type { projects } from "@/data/site";
type P = (typeof projects)[number];
const art: Record<string, React.ReactNode> = {
  face: <><rect x="40" y="30" width="320" height="240" fill="none" strokeDasharray="4 6" /><ellipse cx="200" cy="150" rx="62" ry="80" /><path d="M40 60V30h30M330 30h30v30M360 240v30h-30M70 270H40v-30" strokeWidth="2" /></>,
  net: <><circle cx="200" cy="150" r="22" /><g>{[[80,70],[320,70],[80,230],[320,230],[200,40],[200,260]].map(([x,y],i)=><g key={i}><line x1="200" y1="150" x2={x} y2={y} /><circle cx={x} cy={y} r="9" /></g>)}</g></>,
  web: <><rect x="50" y="40" width="300" height="220" /><path d="M50 72H350" /><circle cx="68" cy="56" r="4" /><circle cx="84" cy="56" r="4" /><path d="M76 110h150M76 134h210M76 158h120" /><rect x="76" y="190" width="80" height="46" /><rect x="170" y="190" width="80" height="46" /></>,
};
export default function Project({ p }: { p: P }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <article ref={ref} className="group wrap border-t border-line py-16 md:py-24">
      <div className="mb-8 flex items-baseline justify-between text-meta uppercase text-warm"><span className="text-gold">{p.no}</span><span>{p.category}</span></div>
      <div data-cursor="view" className="relative aspect-[4/3] overflow-hidden border border-line bg-ink-900 md:aspect-[16/8]">
        <motion.div style={{ y }} className="absolute inset-[-8%] flex items-center justify-center transition-transform duration-[1200ms] group-hover:scale-105">
          <svg viewBox="0 0 400 300" className="h-full max-h-[90%] w-auto stroke-gold/70 fill-none" strokeWidth="1" aria-hidden>{art[p.variant]}</svg>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-6 gap-y-1 p-5 text-meta uppercase text-ivory opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
          {p.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-12">
        <h3 className="font-serif text-display italic transition-transform duration-700 group-hover:translate-x-3 md:col-span-8">{p.name}</h3>
        <div className="md:col-span-4 md:pt-4">
          <p className="text-warm">{p.desc}</p>
          {p.stats.length > 0 && <p className="mt-4 text-meta uppercase text-gold">{p.stats.join("  /  ")}</p>}
          <button onClick={() => setOpen(!open)} aria-expanded={open} className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-line text-meta uppercase hover:border-gold hover:text-gold" data-cursor="link">
            {open ? "Hide project" : "View project"} <ArrowUpRight size={14} className={`transition-transform duration-500 ${open ? "rotate-90" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"}`} aria-hidden />
          </button>
        </div>
      </div>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.7, ease }} className="overflow-hidden">
        <ul className="mt-10 grid gap-x-10 border-t border-line pt-6 text-warm md:grid-cols-3">
          {p.features.map((f) => <li key={f} className="border-b border-line py-3">{f}</li>)}
        </ul>
      </motion.div>
    </article>
  );
}
