import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { TornCard } from '../../../components/cards/TornCard';

const meta = {
  title: 'Landing/Cards/TornCard',
  component: TornCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TornCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    title: 'Hunt Tips',
    tone: 'light',
    children: (
      <div className="text-sm">
        Example content inside a light torn-card wrapper.
      </div>
    ),
  },
};

export const Dark: Story = {
  args: {
    title: 'Founder Story',
    tone: 'dark',
    children: (
      <div className="text-sm text-white/80">
        Example content inside a dark torn-card wrapper.
      </div>
    ),
  },
};
