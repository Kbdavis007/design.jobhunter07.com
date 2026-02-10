import React from "react";
import { TornCard } from "./TornCard";

export function FounderStoryCard() {
  return (
    <TornCard title="FOUNDER'S STORY" tone="dark">
      <div className="grid gap-4">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 flex-none overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/10" />
          <div>
            <p className="text-sm text-white/80">
              Job hunting is overwhelming. This project is about making the process measurable,
              repeatable, and less stressful.
            </p>
            <a className="mt-2 inline-block rounded-md bg-[#d08a2f] px-3 py-2 text-xs font-semibold text-black hover:brightness-110" href="#">
              Read more
            </a>
          </div>
        </div>

        <div className="grid gap-2 rounded-lg bg-black/20 p-4 ring-1 ring-white/10">
          <div className="text-xs uppercase tracking-widest text-white/60">Pro tip</div>
          <div className="text-sm text-white/80">
            Track applications like a pipeline: stages, next action, and a weekly review.
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["Fast", "Focused", "Friendly"].map((k) => (
            <div
              key={k}
              className="rounded-lg bg-black/15 p-3 text-center ring-1 ring-white/10"
            >
              <div className="text-xs text-white/60">{k}</div>
              <div className="mt-1 text-sm font-semibold">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </TornCard>
  );
}
