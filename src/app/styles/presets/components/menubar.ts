import { MenubarDesignTokens } from '@primeuix/themes/types/menubar';

const tokens: MenubarDesignTokens = {
  colorScheme: {
    light: {
      root: {
        background: '{colors.bright}',
        color: '{colors.dim}',
      },
    },
    dark: {
      root: {
        background: '{colors.dim}',
        color: '{colors.bright}',
      },
      item: {
        color: '{colors.bright}',
      },
    },
  },
};

export default tokens;
