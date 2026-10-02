import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import FiberPath from "@/components/FiberPath";
import { duties } from "@/data/site";
import { logo } from "@/lib/logo";
export default function Experience() {
  return (
    <section id="experience" className="wrap bg-ink-950 py-20 md:py-28">
      <SectionLabel index="04">Experience</SectionLabel>
      <h2 className="mt-12 text-[clamp(3rem,8vw,9rem)] font-bold uppercase leading-[.88] tracking-tighter"><Reveal>Real-world</Reveal><Reveal i={1}>Technology</Reveal></h2>
      <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="stroke-text font-serif text-[clamp(5rem,13vw,15rem)] italic leading-[.85]">2024</p>
          <p className="mt-3 text-meta uppercase text-gold">2024 — Present</p>
          <a href="https://nexinet.in" target="_blank" rel="noreferrer" data-cursor="view" className="mt-10 block bg-ivory p-6 md:p-8">
            <Image src={logo.src} width={logo.w} height={logo.h} alt="Nexi Net logo: Next Gen Internet" unoptimized className="w-full mix-blend-multiply" />
          </a>
        </div>
        <div className="md:col-span-7">
          <h3 className="text-title">Founder &amp; CEO</h3>
          <p className="mt-2 text-warm">Nexi Net, Gummidipoondi</p>
          <ul className="mt-8">{duties.map((d) => <li key={d} className="border-t border-line py-4 text-warm">{d}</li>)}</ul>
          <FiberPath />
          <p className="mt-10 font-serif text-title italic">Networking + Software + Real-world operations</p>
          <div className="mt-8"><Button href="https://nexinet.in">nexinet.in</Button></div>
        </div>
      </div>
    </section>
  );
}
