import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { JobHunterPage } from '../../../design/jobhunter07/Page';

const meta = {
  title: 'Landing/Page/JobHunterLandingPage',
  component: JobHunterPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JobHunterPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <JobHunterPage />,
};
