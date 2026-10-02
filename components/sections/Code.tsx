"use client";
import { useEffect, useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { site } from "@/data/site";
const lines = ["prompt   admin app to manage ISP customers and plans", "generate Flutter interface + Node.js / Express API", "test     login, customers, plans", "iterate  fix, refine, repeat", "ship     done."];
function Terminal() {
  const [l, setL] = useState(0), [c, setC] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) { setL(lines.length - 1); setC(99); return; }
    const t = setTimeout(() => {
      if (c < lines[l].length) setC(c + 1); else if (l < lines.length - 1) { setL(l + 1); setC(0); } else { setL(0); setC(0); }
    }, c < lines[l].length ? 38 : l === lines.length - 1 ? 2600 : 650);
    return () => clearTimeout(t);
  }, [l, c]);
  return (
    <div className="border border-line bg-ink-900 p-6 font-mono text-[13px] leading-8 text-warm md:p-8" aria-label="Example vibe coding workflow">
      {lines.slice(0, l).map((x) => <p key={x}><span className="text-gold">› </span>{x}</p>)}
      <p><span className="text-gold">› </span><span className="text-ivory">{lines[l].slice(0, c)}</span><span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-gold" /></p>
    </div>
  );
}
export default function Code() {
  return (
    <section className="wrap bg-ink-950 py-20 md:py-28">
      <SectionLabel index="07">Code</SectionLabel>
      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <h2 className="font-serif text-[clamp(3rem,8vw,9rem)] italic uppercase leading-[.88] md:col-span-7"><Reveal>Build.</Reveal><Reveal i={1}>Test.</Reveal><Reveal i={2}>Iterate.</Reveal></h2>
        <div className="space-y-8 md:col-span-5">
          <h3 className="text-title uppercase">Vibe coding</h3>
          <p className="text-warm">I know the core languages (Python, Java, Dart, JavaScript, SQL) at a working level. Most of my building happens through vibe coding: describing what I want, steering AI tools, testing the result and iterating until it works.</p>
          <Terminal />
          <div className="flex flex-wrap items-center gap-6"><Button href={site.github}>View GitHub</Button><span className="text-meta uppercase text-warm">github.com/Siva23006</span></div>
        </div>
      </div>
    </section>
  );
}
