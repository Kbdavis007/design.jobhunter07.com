import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../../src/components/chrome/SiteChrome";
import { FounderStoryCard } from "../../../src/components/cards/FounderStoryCard";

const meta: Meta<typeof FounderStoryCard> = {
  title: "Landing/Cards/FounderStoryCard",
  component: FounderStoryCard,
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
type Story = StoryObj<typeof FounderStoryCard>;

export const Default: Story = {};
