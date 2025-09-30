import { CardDesignTokens } from '@primeuix/themes/types/card';

const tokens: CardDesignTokens = {
  colorScheme: {
    light: {
      root: {
        background: '{colors.white}',
        color: '{colors.dim}',
        borderRadius: '{border.radius}',
      },
    },
    dark: {
      root: {
        background: '{colors.dim.1}',
        color: '{colors.bright}',
      },
    },
  },
};

export default tokens;
