import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { AboutFooterCard } from '../../../components/cards/AboutFooterCard';

const meta = {
  title: 'Landing/Cards/AboutFooterCard',
  component: AboutFooterCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AboutFooterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AboutFooterCard />,
};
