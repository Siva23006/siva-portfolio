"use client";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
// Re-mounts on every route change: a curtain wipes away to reveal the page.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div aria-hidden className="fixed inset-0 z-[80] origin-top bg-ink-900" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 0.9, ease }} />
      <main id="main">{children}</main>
    </>
  );
}
