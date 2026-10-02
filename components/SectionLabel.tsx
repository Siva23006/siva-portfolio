export default function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="flex items-center gap-4 text-meta uppercase text-warm">
      <span className="text-gold">{index}</span><span aria-hidden className="h-px w-8 bg-line" />{children}
    </p>
  );
}
