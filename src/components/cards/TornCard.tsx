import React from "react";

export function TornCard({
  title,
  children,
  tone = "dark",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const base = "relative overflow-hidden rounded-xl ring-1 shadow-sm";
  const toneCls =
    tone === "light"
      ? "bg-[#e7e0cf] text-[#2a241b] ring-black/10"
      : "bg-[#2b2622] text-[#f4f1e6] ring-white/10";

  return (
    <section className={`${base} ${toneCls}`}>
      {/* Faux torn edges (simple, non-SVG) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-3 opacity-70">
        <div className="h-full bg-gradient-to-r from-black/0 via-black/10 to-black/0" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 opacity-70">
        <div className="h-full bg-gradient-to-r from-black/0 via-black/10 to-black/0" />
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl">{title}</h3>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}
