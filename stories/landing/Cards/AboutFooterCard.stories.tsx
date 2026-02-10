import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../../src/components/chrome/SiteChrome";
import { AboutFooterCard } from "../../../src/components/cards/AboutFooterCard";

const meta: Meta<typeof AboutFooterCard> = {
  title: "Landing/Cards/AboutFooterCard",
  component: AboutFooterCard,
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
type Story = StoryObj<typeof AboutFooterCard>;

export const Default: Story = {};
