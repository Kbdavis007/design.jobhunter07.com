import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { JobHunterTopNav } from '../../design/jobhunter07/TopNav';

const meta = {
  title: 'Landing/NavBar',
  component: JobHunterTopNav,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JobHunterTopNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <JobHunterTopNav />,
};
