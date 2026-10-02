"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
// Horizontal text driven by scroll position.
export default function Marquee({ text }: { text: string }) {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const t = gsap.fromTo(el.current, { xPercent: 0 }, { xPercent: -30, ease: "none", scrollTrigger: { trigger: el.current, start: "top bottom", end: "bottom top", scrub: true } });
    return () => { t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  return (
    <div className="overflow-hidden border-y border-line bg-ink-950 py-6" aria-hidden>
      <div ref={el} className="flex w-max gap-12 whitespace-nowrap font-serif text-title italic text-warm">
        {Array.from({ length: 4 }, (_, i) => <span key={i}>{text}</span>)}
      </div>
    </div>
  );
}
