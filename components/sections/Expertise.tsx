import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { expertise } from "@/data/site";
export default function Expertise() {
  return (
    <section id="expertise" className="wrap bg-ink-950 py-20 md:py-28">
      <SectionLabel index="02">Expertise</SectionLabel>
      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2 className="text-[clamp(3rem,6vw,7rem)] font-bold uppercase leading-[.9] tracking-tighter"><Reveal>What</Reveal><Reveal i={1}>I build</Reveal><Reveal i={2}>with</Reveal></h2>
            <p className="mt-8 max-w-xs text-warm">Core languages at a working level, built mostly through vibe coding, with real networking behind it.</p>
          </div>
        </div>
        <div className="group/list border-b border-line md:col-span-8">
          {expertise.map((g) => (
            <div key={g.label} className="grid gap-3 border-t border-line py-6 transition-opacity duration-500 group-hover/list:opacity-25 hover:!opacity-100 md:grid-cols-12">
              <div className="md:col-span-4"><h3 className="text-meta uppercase text-gold">{g.label}</h3>{"note" in g && <p className="mt-2 text-sm text-warm">{g.note}</p>}</div>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 font-serif text-[clamp(1.5rem,2.6vw,3rem)] italic leading-tight md:col-span-8">
                {g.items.map((i) => <li key={i} className="text-ivory/90 transition-colors duration-300 hover:text-gold">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
