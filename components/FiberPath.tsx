"use client";
import { motion } from "framer-motion";
const nodes = ["OLT", "Fiber", "ONT", "Router", "Customer"];
// Animated signal travelling along an FTTH chain, using terms from Nexi Net's daily work.
export default function FiberPath() {
  return (
    <div className="mt-12 border border-line p-6 md:p-8">
      <p className="text-meta uppercase text-gold">How a connection reaches a home</p>
      <div className="relative mt-10 flex justify-between">
        <span aria-hidden className="absolute left-0 right-0 top-[7px] h-px bg-line" />
        <motion.span aria-hidden className="absolute top-[3px] size-2 rounded-full bg-gold" animate={{ left: ["0%", "100%"] }} transition={{ duration: 4, ease: "linear", repeat: Infinity }} />
        {nodes.map((n) => (
          <div key={n} className="group relative z-10 flex flex-col items-center gap-3">
            <span className="size-4 rounded-full border border-warm bg-ink-950 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold" />
            <span className="text-meta uppercase text-warm transition-colors group-hover:text-gold">{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
