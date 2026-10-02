"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40 }), sy = useSpring(y, { stiffness: 400, damping: 40 });
  const [state, setState] = useState<"idle" | "link" | "view">("idle");
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    setOn(true); document.documentElement.classList.add("has-cursor");
    const move = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const t = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      setState((t?.dataset.cursor as "link" | "view") ?? "idle");
    };
    addEventListener("pointermove", move);
    return () => { removeEventListener("pointermove", move); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);
  if (!on) return null;
  const size = state === "view" ? 88 : state === "link" ? 40 : 10;
  return (
    <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[95] mix-blend-difference">
      <motion.div animate={{ width: size, height: size }} transition={{ duration: 0.4 }} className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-ivory text-[10px] uppercase tracking-widest text-ink-950">
        {state === "view" ? "View" : ""}
      </motion.div>
    </motion.div>
  );
}
