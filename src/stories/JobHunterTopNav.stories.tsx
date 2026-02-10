import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { JobHunterTopNav } from '../design/jobhunter07/TopNav';

const meta = {
  title: 'JobHunter07.com/Shell/Top Nav',
  component: JobHunterTopNav,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    activeItemId: 'home',
  },
} satisfies Meta<typeof JobHunterTopNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AboutActive: Story = {
  args: {
    activeItemId: 'about',
  },
};
