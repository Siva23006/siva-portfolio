"use client";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
type Props = { href: string; children: React.ReactNode; variant?: "outline" | "solid"; download?: boolean };
export default function Button({ href, children, variant = "outline", download }: Props) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 }), sy = useSpring(y, { stiffness: 220, damping: 16 });
  const cls = cn("group inline-flex min-h-12 items-center gap-3 border px-6 py-3.5 text-meta uppercase transition-colors duration-500",
    variant === "solid" ? "border-ivory bg-ivory text-ink-950 hover:bg-transparent hover:text-ivory" : "border-line text-ivory hover:border-gold hover:text-gold");
  const icon = download ? <Download size={14} aria-hidden /> : <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />;
  const inner = <>{children}{icon}</>;
  return (
    <motion.span style={{ x: sx, y: sy }} className="inline-block"
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.22); y.set((e.clientY - r.top - r.height / 2) * 0.3); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      {href.startsWith("#") ? <Link href={href} className={cls} data-cursor="link">{inner}</Link>
        : <a href={href} className={cls} data-cursor="link" {...(download ? { download: true } : { target: "_blank", rel: "noreferrer" })}>{inner}</a>}
    </motion.span>
  );
}
