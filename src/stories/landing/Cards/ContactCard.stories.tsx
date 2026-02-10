import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { ContactCard } from '../../../components/cards/ContactCard';

const meta = {
  title: 'Landing/Cards/ContactCard',
  component: ContactCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContactCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ContactCard />,
};
