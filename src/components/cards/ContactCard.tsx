import React from "react";
import { TornCard } from "./TornCard";

export function ContactCard() {
  return (
    <section id="contact">
      <TornCard title="Contact" tone="dark">
        <form className="grid gap-3">
          <div className="grid gap-3 md:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-xs text-white/60">Name</span>
              <input
                className="rounded-md bg-black/20 px-3 py-2 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#d08a2f]/60"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-xs text-white/60">Email</span>
              <input
                type="email"
                className="rounded-md bg-black/20 px-3 py-2 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#d08a2f]/60"
                placeholder="you@domain.com"
              />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-xs text-white/60">Message</span>
            <textarea
              className="min-h-[110px] rounded-md bg-black/20 px-3 py-2 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#d08a2f]/60"
              placeholder="How can we help?"
            />
          </label>

          <button
            type="button"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-[#d08a2f] px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
          >
            Send message
          </button>
        </form>
      </TornCard>
    </section>
  );
}
