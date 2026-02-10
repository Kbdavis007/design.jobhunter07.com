import React from "react";
import { TornCard } from "./TornCard";

export function HuntTipsCard() {
  return (
    <section id="tips">
      <TornCard title="Hunt Tips" tone="light">
        <div className="grid gap-5">
          <article className="grid gap-2">
            <h4 className="font-serif text-xl">MASTER THE INTERVIEW</h4>
            <p className="text-sm text-black/70">
              Prep questions, sharpen stories, and build a repeatable interview routine.
            </p>
            <a className="text-xs font-semibold text-[#8b5e1a]" href="#">
              Learn more →
            </a>
          </article>

          <article className="grid gap-2">
            <h4 className="font-serif text-xl">CV STRATEGY SECRETS</h4>
            <p className="text-sm text-black/70">
              Tailor your resume to the role and make your strongest impact above the fold.
            </p>
            <a className="text-xs font-semibold text-[#8b5e1a]" href="#">
              Learn more →
            </a>
          </article>
        </div>
      </TornCard>
    </section>
  );
}
