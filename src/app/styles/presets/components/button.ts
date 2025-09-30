import { ButtonDesignTokens } from '@primeuix/themes/types/button';

const primary = {
  background: '{colors.accent.1}',
  borderColor: '{colors.accent.1}',
  hoverBackground: '{colors.hover.accent}',
  hoverBorderColor: '{colors.hover.accent}',
  activeBackground: '{colors.hover.accent}',
  activeBorderColor: '{colors.hover.accent}',
  focusRing: {
    color: '{colors.accent.1}',
    shadow: 'none',
  },
};

const secondary = {
  focusRing: {
    color: '{colors.accent.1}',
    shadow: 'none',
  },
};

const tokens: ButtonDesignTokens = {
  colorScheme: {
    light: {
      root: {
        borderRadius: '{border.radius}',
        primary: primary,
        secondary: secondary,
      },
      text: {
        secondary: {
          hoverBackground: '{colors.hover.bright.2}',
        },
      },
    },
    dark: {
      root: {
        primary: primary,
        secondary: secondary,
      },
      text: {
        secondary: {
          hoverBackground: '{colors.hover.dim.1}',
        },
      },
    },
  },
};

export default tokens;
