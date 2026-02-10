import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../src/components/chrome/SiteChrome";
import { Hero } from "../../src/components/hero/Hero";

const meta: Meta<typeof Hero> = {
  title: "Landing/Hero",
  component: Hero,
  decorators: [
    (Story) => (
      <SiteChrome>
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </SiteChrome>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
