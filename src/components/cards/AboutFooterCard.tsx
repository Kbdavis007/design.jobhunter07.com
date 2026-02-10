import React from "react";
import { TornCard } from "./TornCard";

export function AboutFooterCard() {
  return (
    <section id="about">
      <TornCard title="About" tone="dark">
        <p className="text-sm text-white/75">
          A design-system driven UI for JobHunter07. Sites consume shared tokens and components
          so each product can focus on functionality, not restyling.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Links</div>
            <ul className="mt-2 space-y-1 text-white/80">
              <li><a className="hover:text-white" href="#">Docs</a></li>
              <li><a className="hover:text-white" href="#">Components</a></li>
              <li><a className="hover:text-white" href="#">Tokens</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Community</div>
            <ul className="mt-2 space-y-1 text-white/80">
              <li><a className="hover:text-white" href="#">GitHub</a></li>
              <li><a className="hover:text-white" href="#">Changelog</a></li>
              <li><a className="hover:text-white" href="#">Roadmap</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/50">© JobHunter07</div>
      </TornCard>
    </section>
  );
}
