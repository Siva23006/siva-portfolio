import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Portrait from "@/components/Portrait";
import Marquee from "@/components/Marquee";
import { facts } from "@/data/site";
export default function About() {
  return (
    <>
      <Marquee text="Software • AI • Networking • Software • AI • Networking •" />
      <section id="about" className="wrap bg-ink-900 py-20 md:py-28">
        <SectionLabel index="01">About</SectionLabel>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Portrait className="aspect-[4/5] w-full" position="50% 10%" sizes="(min-width:900px) 40vw, 100vw" />
          </div>
          <div className="flex flex-col justify-between gap-10 md:col-span-7">
            <h2 className="font-serif text-[clamp(3rem,8vw,9rem)] italic uppercase leading-[.88]"><Reveal>Technology</Reveal><Reveal i={1}>with</Reveal><Reveal i={2}>purpose.</Reveal></h2>
            <div className="max-w-xl space-y-4">
              <p className="text-xl leading-relaxed md:text-2xl">I&apos;m a B.Tech Computer Science Engineering student specializing in Data Science and Artificial Intelligence, and the founder of Nexi Net.</p>
              <p className="text-warm">I work across Python, Java, Flutter, Node.js, PostgreSQL, web development and computer vision, mostly building through vibe coding. Running Nexi Net has given me hands-on FTTH, EPON/GPON and OLT/ONT experience, and a reason to build software for real customers.</p>
            </div>
            <dl className="grid grid-cols-2 border-l border-t border-line">
              {facts.map(([k, v]) => (
                <div key={k} className="border-b border-r border-line p-4">
                  <dt className="text-meta uppercase text-gold">{k}</dt><dd className="mt-2 text-sm text-ivory/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
