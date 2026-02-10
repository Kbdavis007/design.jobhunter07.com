import React from "react";
import { ToolCard } from "./ToolCard";
import type { Tool } from "../../data/landing";

export function ToolsSection({ tools }: { tools: Tool[] }) {
  return (
    <section id="tools" className="mx-auto w-full max-w-5xl px-4 pb-10">
      <h2 className="py-6 text-center font-serif text-4xl">Tools</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {tools.map((t) => (
          <ToolCard key={t.title} tool={t} />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2" aria-label="Carousel dots">
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
