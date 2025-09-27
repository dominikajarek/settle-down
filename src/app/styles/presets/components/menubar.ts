import { MenubarDesignTokens } from '@primeuix/themes/types/menubar';

const tokens: MenubarDesignTokens = {
  colorScheme: {
    light: {
      root: {
        background: '{colors.bright.1}',
        color: '{colors.dim}',
        borderColor: '{colors.bright.2}',
      },
      item: {
        focusBackground: '{colors.hover.2}',
        focusColor: '{colors.dim}',
      },
    },
    dark: {
      root: {
        background: '{colors.dim.1}',
        color: '{colors.bright}',
        borderColor: '{colors.dim.3}',
      },
      item: {
        color: '{colors.bright}',
        focusBackground: '{colors.hover.dim.1}',
        focusColor: '{colors.bright}',
      },
    },
  },
};

export default tokens;
