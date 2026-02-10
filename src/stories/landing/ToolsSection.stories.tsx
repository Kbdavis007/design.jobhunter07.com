import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SiteChrome } from "../../src/components/chrome/SiteChrome";
import { ToolsSection } from "../../components/tools/ToolsSection";
import { tools } from "../../data/landing";

const meta: Meta<typeof ToolsSection> = {
  title: "Landing/ToolsSection",
  component: ToolsSection,
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
type Story = StoryObj<typeof ToolsSection>;

export const Default: Story = {
  args: { tools },
};
