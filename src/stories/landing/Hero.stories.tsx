import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { HeroSection } from '../../design/jobhunter07/HeroSection';

const meta = {
  title: 'Landing/Hero',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HeroSection />,
};
