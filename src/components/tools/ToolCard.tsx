import React from "react";
import type { Tool } from "../../data/landing";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.href}
      className="group rounded-xl bg-black/15 p-6 text-center ring-1 ring-white/10 hover:bg-black/20"
    >
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-black/20 text-3xl shadow-sm ring-1 ring-white/10">
        {tool.icon}
      </div>

      <div className="mt-4 font-serif text-xl tracking-wide">{tool.title}</div>
      <p className="mx-auto mt-2 max-w-xs text-sm text-white/70">
        {tool.description}
      </p>

      <div className="mt-3 text-xs text-[#f0c37a] opacity-0 transition group-hover:opacity-100">
        Learn more →
      </div>
    </a>
  );
}
