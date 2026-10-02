import { site } from "@/data/site";
export default function Footer() {
  const l = "hover:text-gold";
  return (
    <footer className="wrap grid gap-8 border-t border-line bg-ink-950 py-12 text-meta uppercase text-warm md:grid-cols-3">
      <div><p className="font-semibold text-ivory">Siva</p><p className="mt-2 leading-relaxed">AI &amp; Data Science<br />Software • Networking • AI</p></div>
      <nav aria-label="Footer" className="flex gap-6 md:justify-center"><a className={l} href={site.github}>GitHub</a><a className={l} href="https://nexinet.in">Nexinet.in</a><a className={l} href={site.linkedin}>LinkedIn</a><a className={l} href={`mailto:${site.email}`}>Email</a></nav>
      <p className="md:text-right">© {new Date().getFullYear()} Siva</p>
    </footer>
  );
}
