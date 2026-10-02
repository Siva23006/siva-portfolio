"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "@/components/Button";
import { logo } from "@/lib/logo";
import type { projects } from "@/data/site";
type P = (typeof projects)[number];
const layers = [["Flutter", "Admin application"], ["Node.js / Express", "JWT · bcrypt"], ["PostgreSQL", "Customers · Plans · Administrators"]];
function Stack() {
  return (
    <div className="border border-line bg-ink-950 p-6 md:p-8">
      <p className="text-meta uppercase text-gold">How it fits together</p>
      <div className="mt-6">
        {layers.map(([a, b], i) => (
          <div key={a}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border border-line p-5 transition-colors duration-500 hover:border-gold">
              <span className="font-serif text-3xl italic md:text-4xl">{a}</span><span className="text-meta uppercase text-warm">{b}</span>
            </div>
            {i < layers.length - 1 && <div className="relative mx-auto h-9 w-px overflow-hidden bg-line"><motion.span className="absolute left-0 top-0 h-3 w-px bg-gold" animate={{ y: [-12, 36] }} transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }} /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
function Browser() {
  return (
    <div className="w-full border border-line bg-ink-950">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2"><i className="size-2 rounded-full bg-ivory/20" /><i className="size-2 rounded-full bg-ivory/20" /><i className="size-2 rounded-full bg-ivory/20" /><span className="ml-3 flex-1 border border-line px-3 py-0.5 text-[10px] text-warm">nexinet.in</span></div>
      <div className="relative overflow-hidden bg-ivory p-5 md:p-8">
        <Image src={logo.src} width={logo.w} height={logo.h} alt="Nexi Net logo: Next Gen Internet" unoptimized className="mx-auto w-[88%] mix-blend-multiply" />
        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[9px] uppercase tracking-[.16em] text-ink-950">
          {["Services", "Plans", "Company"].map((t) => <div key={t} className="border border-ink-950/20 py-3">{t}</div>)}
        </div>
      </div>
    </div>
  );
}
export default function ProjectPanel({ p }: { p: P }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  return (
    <article className="wrap relative flex shrink-0 flex-col gap-10 border-t border-line py-14 md:h-screen md:w-screen md:flex-row md:items-center md:gap-14 md:border-l md:border-t-0 md:py-20">
      <div className="md:w-[50%]">
        <p className="flex gap-4 text-meta uppercase text-warm"><span className="text-gold">{p.no}</span>{p.category}</p>
        <h3 className="mt-5 font-serif text-[clamp(2.75rem,6.2vw,7rem)] italic leading-[.9]">{p.name}</h3>
        <p className="mt-6 max-w-lg text-warm">{p.desc}</p>
        {p.stats.length > 0 && <p className="mt-4 flex flex-wrap gap-x-6 text-meta uppercase text-gold">{p.stats.map((s) => <span key={s}>{s}</span>)}</p>}
        <ul className="mt-6 text-[13px] leading-6 text-ivory/80 md:columns-2 md:gap-8">{p.features.map((f) => <li key={f} className="break-inside-avoid border-t border-line py-1.5">{f}</li>)}</ul>
        <p className="mt-5 flex flex-wrap gap-x-4 text-meta uppercase text-warm">{p.tech.map((t) => <span key={t}>{t}</span>)}</p>
        {p.link && <div className="mt-6"><Button href={p.link}>View project — nexinet.in</Button></div>}
      </div>
      <div className="relative md:w-[50%]" style={{ perspective: 1000 }} data-cursor="view"
        onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }}
        onPointerLeave={() => { mx.set(0); my.set(0); }}>
        <span aria-hidden className="stroke-text absolute -right-2 -top-12 z-0 font-serif text-[18vw] italic leading-none md:text-[12vw]">{p.no}</span>
        <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative z-10">
          {p.variant === "app" ? <Stack /> : <Browser />}
        </motion.div>
      </div>
    </article>
  );
}
