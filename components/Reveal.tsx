"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { reveal } from "@/lib/motion";
// Masked line reveal. The wrapper is observed (not the moving child, which sits clipped outside it), so it always fires.
export default function Reveal({ children, i = 0, className = "" }: { children: React.ReactNode; i?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  return (
    <span ref={ref} className={`block overflow-hidden pb-[0.06em] ${className}`}>
      <motion.span className="block" variants={reveal} custom={i} initial="hidden" animate={seen ? "show" : "hidden"}>{children}</motion.span>
    </span>
  );
}
