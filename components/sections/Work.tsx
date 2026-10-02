"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "@/components/SectionLabel";
import ProjectPanel from "@/components/ProjectPanel";
import { projects } from "@/data/site";
// Desktop: section pins and projects slide sideways. Mobile / reduced motion: normal vertical stack.
export default function Work() {
  const root = useRef<HTMLElement>(null), track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:900px) and (prefers-reduced-motion:no-preference)", () => {
      const dist = () => track.current!.scrollWidth - innerWidth;
      gsap.to(track.current, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);
  return (
    <section id="work" ref={root} className="overflow-hidden bg-ink-900 md:h-screen">
      <div ref={track} className="flex flex-col md:h-screen md:w-max md:flex-row">
        <div className="wrap flex shrink-0 flex-col justify-between py-20 md:h-screen md:w-[75vw] md:py-24">
          <SectionLabel index="03">Selected Work</SectionLabel>
          <h2 className="font-serif text-[clamp(4.5rem,17vw,22rem)] italic uppercase leading-[.82]">Selected<br /><span className="stroke-text">Work</span></h2>
          <p className="hidden text-meta uppercase text-warm md:block">Keep scrolling →</p>
        </div>
        {projects.map((p) => <ProjectPanel key={p.no} p={p} />)}
      </div>
    </section>
  );
}
