"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
// Never distorted. multiply turns the photo's white backdrop into warm ivory. Served unoptimized to avoid re-compression blur.
export default function Portrait({ className = "", position = "50% 20%", delay = 0, priority = false, sizes = "50vw", src = "/siva.jpg", cutout = false }: { className?: string; position?: string; delay?: number; priority?: boolean; sizes?: string; src?: string; cutout?: boolean }) {
  return (
    <motion.div className={`relative overflow-hidden bg-ivory ${className}`} initial={{ clipPath: "inset(100% 0 0 0)" }} whileInView={{ clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true }} transition={{ duration: 1.5, ease, delay }}>
      <motion.div className="absolute inset-0" initial={{ scale: 1.25 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease, delay }}>
        <Image src={src} alt="Portrait of Siva in a black blazer and white shirt" fill priority={priority} unoptimized sizes={sizes} className={`object-cover ${cutout ? "" : "mix-blend-multiply"}`} style={{ objectPosition: position }} />
      </motion.div>
    </motion.div>
  );
}
