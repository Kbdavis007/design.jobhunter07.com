export const theme = {
  light: {
    palette: {
      bg: '#F3F1EA',
      surface: '#FFFFFF',
      text: '#1B1F1A',
      mutedText: '#5C645B',
      primary: '#4E6D4F',
      primaryHover: '#3E5840',
      secondary: '#F59E0B',
      secondaryHover: '#D97706',
      border: '#E7E5E4',
      focus: '#D6B25E',
    },
  },
  dark: {
    palette: {
      bg: '#0F1411',
      surface: '#151C17',
      text: '#F2F3EF',
      mutedText: '#B6BDB3',
      primary: '#6D8C6E',
      primaryHover: '#8FA98F',
      secondary: '#F59E0B',
      secondaryHover: '#FFAD2E',
      border: '#292524',
      focus: '#D6B25E',
    },
  },
} as const;

export type ThemeMode = keyof typeof theme;
export type ThemePalette = (typeof theme)[ThemeMode]['palette'];
