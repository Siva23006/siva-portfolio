"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "@/lib/motion";
// Signature-style name that "writes" itself left to right, once per session. Tells Hero to start via the "preloaded" event.
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (sessionStorage.getItem("pre") || matchMedia("(prefers-reduced-motion:reduce)").matches) { sessionStorage.setItem("pre", "1"); setShow(false); return; }
    document.body.style.overflow = "hidden";
    const t0 = performance.now(); let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 3000, 1); setN(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => { sessionStorage.setItem("pre", "1"); document.body.style.overflow = ""; setShow(false); dispatchEvent(new Event("preloaded")); }, 400);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.body.style.overflow = ""; };
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 1, ease }} style={{ clipPath: "inset(0 0 0% 0)" }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900" role="status" aria-label="Loading">
          <div className="relative px-6">
            <motion.h1 initial={{ clipPath: "inset(-20% 100% -20% -5%)" }} animate={{ clipPath: "inset(-20% -5% -20% -5%)" }} transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
              style={{ fontFamily: "var(--font-script)" }} className="-rotate-3 pr-4 text-[clamp(7rem,32vw,19rem)] leading-[1.3] text-ivory">Siva</motion.h1>
            <svg viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute -bottom-1 left-6 right-6 h-6 w-[calc(100%-3rem)] text-gold" aria-hidden>
              <motion.path d="M4 18 C 70 4, 170 2, 296 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, ease, delay: 1.9 }} />
            </svg>
          </div>
          <p className="absolute bottom-8 left-8 text-meta uppercase text-warm">Portfolio</p>
          <p className="absolute bottom-8 right-8 font-serif text-5xl italic text-ivory tabular-nums">{String(n).padStart(3, "0")}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
