import { ArrowUpRight, Github, Globe, Linkedin } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { site } from "@/data/site";
const Gmail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}><path d="M2 6.5C2 5.67 2.67 5 3.5 5h.7L12 11.2 19.8 5h.7c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5H19V9.4l-7 5.4-7-5.4V19H3.5A1.5 1.5 0 0 1 2 17.5z" /></svg>
);
// Each tile opens the real service: Gmail compose, LinkedIn, GitHub, and the Nexi Net website.
const tiles = [
  { label: "Gmail", sub: site.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=Hello%20Siva`, Icon: Gmail },
  { label: "LinkedIn", sub: "siva-babu", href: site.linkedin, Icon: Linkedin },
  { label: "GitHub", sub: "Siva23006", href: site.github, Icon: Github },
  { label: "Nexi Net", sub: "nexinet.in", href: "https://nexinet.in", Icon: Globe },
];
export default function Contact() {
  return (
    <>
      <section id="contact" className="wrap border-t border-line bg-ink-900 py-20 md:py-28">
        <SectionLabel index="08">Contact</SectionLabel>
        <div className="mt-12 grid gap-12 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(3rem,8vw,9rem)] font-bold uppercase leading-[.88] tracking-tighter md:col-span-7"><Reveal>Let&apos;s build</Reveal><Reveal i={1}>something</Reveal><Reveal i={2}>useful.</Reveal></h2>
          <ul className="grid grid-cols-2 gap-px border border-line bg-line md:col-span-5">
            {tiles.map(({ label, sub, href, Icon }) => (
              <li key={label} className="bg-ink-900">
                <a href={href} target="_blank" rel="noreferrer" aria-label={`${label}: ${sub}`} data-cursor="link" className="group flex aspect-square flex-col justify-between p-4 transition-colors duration-500 hover:bg-ink-800 sm:p-6">
                  <span className="flex items-start justify-between">
                    <Icon className="size-9 text-ivory transition-colors duration-500 group-hover:text-gold sm:size-12" strokeWidth={1.25} />
                    <ArrowUpRight size={18} className="text-warm transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" aria-hidden />
                  </span>
                  <span><span className="block text-meta uppercase text-gold">{label}</span><span className="mt-2 block break-all text-[11px] leading-snug text-warm sm:text-sm">{sub}</span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Marquee text="Siva • Software • AI • Networking • Siva • Software • AI • Networking •" />
    </>
  );
}
