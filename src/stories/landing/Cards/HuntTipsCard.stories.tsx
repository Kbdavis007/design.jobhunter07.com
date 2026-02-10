import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { HuntTipsCard } from '../../../components/cards/HuntTipsCard';

const meta = {
  title: 'Landing/Cards/HuntTipsCard',
  component: HuntTipsCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HuntTipsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HuntTipsCard />,
};
