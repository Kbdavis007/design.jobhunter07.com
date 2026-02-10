import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import JobHunterLandingPage from "../../../src/pages/JobHunterLandingPage";

const meta: Meta<typeof JobHunterLandingPage> = {
  title: "Landing/Page/JobHunterLandingPage",
  component: JobHunterLandingPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof JobHunterLandingPage>;

export const Default: Story = {};
