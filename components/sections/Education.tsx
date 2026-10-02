import SectionLabel from "@/components/SectionLabel";
import { certs } from "@/data/site";
export default function Education() {
  return (
    <section className="wrap bg-ink-900 py-20 md:py-28">
      <div id="education">
        <SectionLabel index="05">Education</SectionLabel>
        <div className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-12">
          <h2 className="text-title uppercase md:col-span-6">Bachelor of Technology</h2>
          <p className="text-warm md:col-span-4">Computer Science Engineering (Data Science &amp; AI)<br />Dr. M.G.R. Educational and Research Institute</p>
          <p className="text-meta uppercase text-gold md:col-span-2 md:text-right">2023 — 2027 Expected</p>
        </div>
      </div>
      <div id="certifications" className="mt-20">
        <SectionLabel index="06">Certifications</SectionLabel>
        <ul className="mt-16 border-b border-line">
          {certs.map((c) => (
            <li key={c} className="group flex items-baseline justify-between gap-4 border-t border-line py-6 transition-colors hover:text-gold">
              <span className="font-serif text-title italic transition-transform duration-500 group-hover:translate-x-3">{c}</span>
              <span className="text-meta uppercase text-warm">Completed</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
