"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { ease } from "@/lib/motion";
import Button from "@/components/Button";
import Portrait from "@/components/Portrait";
import { site } from "@/data/site";
function Rotator() {
  const w = ["Software", "AI", "Networking"]; const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % w.length), 2200); return () => clearInterval(t); }, []);
  return (
    <span className="relative mt-3 block h-[1.15em] overflow-hidden font-serif text-[clamp(2.25rem,5vw,5.5rem)] italic leading-none text-gold" aria-hidden>
      <AnimatePresence mode="wait"><motion.span key={i} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.6, ease }} className="block">{w[i]}</motion.span></AnimatePresence>
    </span>
  );
}
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const calm = matchMedia("(prefers-reduced-motion:reduce)").matches;
      if (calm) return;
      gsap.set(".hl", { yPercent: 115 }); gsap.set(".hm", { opacity: 0, y: 14 });
      const run = () => { gsap.to(".hl", { yPercent: 0, duration: 1.4, ease: "expo.out", stagger: 0.08 }); gsap.to(".hm", { opacity: 1, y: 0, duration: 1, delay: 0.6, stagger: 0.1 }); };
      if (sessionStorage.getItem("pre")) run(); else addEventListener("preloaded", run, { once: true });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section id="top" ref={root} className="wrap relative overflow-hidden bg-ink-950 pb-6 pt-20">
      <div className="relative grid gap-6 md:grid-cols-12">
        <div className="relative z-20 order-1 md:order-none md:col-span-4 md:col-start-5 md:row-start-1">
          <Portrait priority cutout src="/siva-cutout.webp" delay={0.2} className="aspect-square w-full" position="50% 50%" sizes="(min-width:900px) 34vw, 100vw" />
        </div>
        <div aria-hidden className="hname order-2 -mt-[calc(1.5rem+.14em)] text-center font-serif text-[clamp(6rem,32vw,40rem)] italic leading-[.95] md:order-none md:col-span-12 md:row-start-2">
          <span className="inline-flex overflow-hidden pb-[.12em] pt-[.04em] text-ivory">
            {"Siva".split("").map((c, i) => <span key={i} className="hl inline-block whitespace-pre">{c}</span>)}
          </span>
        </div>
        <div className="relative z-10 order-3 md:order-none md:col-span-4 md:col-start-1 md:row-start-1 md:pt-6">
          <p className="hm text-meta uppercase text-warm">AI &amp; Data Science<br />Undergraduate</p>
          <h1 aria-label="Building digital systems." className="mt-6 text-[clamp(2.75rem,13vw,5.5rem)] font-bold uppercase leading-[.9] tracking-tighter md:text-[clamp(2.5rem,5vw,6rem)]">
            {["Building", "Digital", "Systems."].map((l) => <span key={l} className="block overflow-hidden pb-[0.05em]"><span className="hl block">{l}</span></span>)}
          </h1>
          <Rotator />
        </div>
        <div className="relative z-10 order-4 md:order-none md:col-span-3 md:col-start-10 md:row-start-1 md:pt-6">
          <p className="hm max-w-xs text-warm">Software development, AI, computer vision and networking.</p>
          <p className="hm mt-4 text-meta uppercase text-gold">Founder, Nexi Net</p>
        </div>
      </div>
      <div className="hm relative z-30 mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <div className="flex flex-wrap gap-3"><Button href="#work" variant="solid">View my work</Button><Button href={site.resume} download>Download resume</Button></div>
        <p className="hidden text-meta uppercase text-warm md:block">Scroll to explore ↓</p>
      </div>
    </section>
  );
}
