import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../../src/components/chrome/SiteChrome";
import { HuntTipsCard } from "../../../src/components/cards/HuntTipsCard";

const meta: Meta<typeof HuntTipsCard> = {
  title: "Landing/Cards/HuntTipsCard",
  component: HuntTipsCard,
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
type Story = StoryObj<typeof HuntTipsCard>;

export const Default: Story = {};
