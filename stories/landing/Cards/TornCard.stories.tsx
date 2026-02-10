import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../../src/components/chrome/SiteChrome";
import { TornCard } from "../../../src/components/cards/TornCard";

const meta: Meta<typeof TornCard> = {
  title: "Landing/Cards/TornCard",
  component: TornCard,
  decorators: [
    (Story) => (
      <SiteChrome>
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Story />
        </div>
      </SiteChrome>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TornCard>;

export const Light: Story = {
  args: {
    title: "Hunt Tips",
    tone: "light",
    children: (
      <div className="text-sm">
        Example content inside a light torn-card wrapper.
      </div>
    ),
  },
};

export const Dark: Story = {
  args: {
    title: "Founder Story",
    tone: "dark",
    children: (
      <div className="text-sm text-white/80">
        Example content inside a dark torn-card wrapper.
      </div>
    ),
  },
};
