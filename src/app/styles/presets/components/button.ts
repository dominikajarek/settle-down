import { ButtonDesignTokens } from '@primeuix/themes/types/button';

const tokens: ButtonDesignTokens = {
  colorScheme: {
    light: {
      root: {
        borderRadius: '0.5rem',
        primary: {
          background: '{colors.accent.1}',
          hoverBackground: '{colors.hover.accent}',
        },
      },
      text: {
        secondary: {
          hoverBackground: '{colors.hover.bright.2}',
        },
      },
    },
    dark: {
      root: {
        primary: {
          background: '{colors.accent.1}',
          hoverBackground: '{colors.hover.accent}',
          hoverBorderColor: '{colors.hover.accent}',
        },
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
