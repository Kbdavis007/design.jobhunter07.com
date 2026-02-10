import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { FounderStoryCard } from '../../../components/cards/FounderStoryCard';

const meta = {
  title: 'Landing/Cards/FounderStoryCard',
  component: FounderStoryCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FounderStoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FounderStoryCard />,
};
