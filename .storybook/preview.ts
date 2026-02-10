import type { Decorator, Preview } from '@storybook/nextjs-vite';
import React from 'react';

import { theme, type ThemeMode } from '../src/design/tokens/theme';

const withJobHunterTheme: Decorator = (Story, context) => {
  const mode = (context.globals.theme as ThemeMode) ?? 'light';
  const palette = theme[mode].palette;

  const themeStyles: React.CSSProperties = {
    backgroundColor: palette.bg,
    color: palette.text,
    minHeight: '100vh',
    '--jh-bg': palette.bg,
    '--jh-surface': palette.surface,
    '--jh-text': palette.text,
    '--jh-muted-text': palette.mutedText,
    '--jh-primary': palette.primary,
    '--jh-primary-hover': palette.primaryHover,
    '--jh-secondary': palette.secondary,
    '--jh-secondary-hover': palette.secondaryHover,
    '--jh-border': palette.border,
    '--jh-focus': palette.focus,
  } as React.CSSProperties;

  return (
    <div data-theme={mode} style={themeStyles}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for JobHunter07',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [withJobHunterTheme],
};

export default preview;