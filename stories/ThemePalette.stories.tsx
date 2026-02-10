import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useGlobals } from '@storybook/preview-api';
import React from 'react';

import { theme } from '../src/design/tokens/theme';

type ThemeMode = keyof typeof theme;

type Section = {
  title: string;
  keys: (keyof (typeof theme)[ThemeMode]['palette'])[];
};

const ThemePalettePage: React.FC = () => {
  const [{ theme: globalTheme }] = useGlobals();
  const mode: ThemeMode = globalTheme === 'dark' ? 'dark' : 'light';
  const palette = theme[mode].palette;

  const sections: Section[] = [
    {
      title: 'Surface',
      keys: ['bg', 'surface', 'border'],
    },
    {
      title: 'Typography',
      keys: ['text', 'mutedText'],
    },
    {
      title: 'Actions',
      keys: ['primary', 'primaryHover', 'secondary', 'secondaryHover', 'focus'],
    },
  ];

  const handleCopy = (_tokenName: string, value: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).catch(() => {
        // ignore clipboard errors in Storybook environment
      });
    }
  };

  return (
    <div
      style={{
        padding: '32px',
        backgroundColor: palette.bg,
        color: palette.text,
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Theme Palette</h1>
      <p style={{ marginBottom: '24px', color: palette.mutedText }}>
        JobHunter07 semantic palette for the active theme mode (<strong>{mode}</strong>). Use the
        toolbar toggle named <strong>Theme</strong> to switch between light and dark modes.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}
      >
        {sections.map((section) => (
          <section
            key={section.title}
            style={{
              backgroundColor: palette.surface,
              borderRadius: '16px',
              border: `1px solid ${palette.border}`,
              padding: '16px 20px',
              boxShadow:
                mode === 'light'
                  ? '0 12px 30px rgba(0, 0, 0, 0.06)'
                  : '0 12px 30px rgba(0, 0, 0, 0.7)',
            }}
          >
            <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>{section.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {section.keys.map((key) => {
                const value = palette[key];
                return (
                  <button
                    key={key as string}
                    type="button"
                    onClick={() => handleCopy(key as string, value)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '64px 1fr 80px',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '8px 10px',
                      backgroundColor: 'transparent',
                      borderRadius: '999px',
                      border: `1px solid ${palette.border}`,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        width: '48px',
                        height: '32px',
                        borderRadius: '999px',
                        border: `1px solid ${palette.border}`,
                        backgroundColor: value,
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600 }}>{key}</span>
                      <span style={{ fontSize: '12px', color: palette.mutedText }}>{value}</span>
                    </div>
                    <span
                      style={{
                        justifySelf: 'end',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: palette.mutedText,
                      }}
                    >
                      Copy
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const meta = {
  title: 'Foundations/Theme Palette',
  component: ThemePalettePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <ThemePalettePage />,
    },
  },
} satisfies Meta<typeof ThemePalettePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThemePaletteDocs: Story = {
  render: () => <ThemePalettePage />,
};
