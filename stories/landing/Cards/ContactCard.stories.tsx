import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../../src/components/chrome/SiteChrome";
import { ContactCard } from "../../../src/components/cards/ContactCard";

const meta: Meta<typeof ContactCard> = {
  title: "Landing/Cards/ContactCard",
  component: ContactCard,
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
type Story = StoryObj<typeof ContactCard>;

export const Default: Story = {};
