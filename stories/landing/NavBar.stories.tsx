import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../src/components/chrome/SiteChrome";
import { NavBar } from "../../src/components/chrome/NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Landing/NavBar",
  component: NavBar,
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
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
