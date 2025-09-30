import { MenubarDesignTokens } from '@primeuix/themes/types/menubar';

const tokens: MenubarDesignTokens = {
  colorScheme: {
    light: {
      root: {
        background: '{colors.background.bright.1}',
        color: '{colors.text.bright.1}',
        borderColor: '{colors.border.bright.3}',
      },
      item: {
        color: '{colors.text.bright.1}',
        focusBackground: '{colors.hover.bright.1}',
        focusColor: '{colors.text.bright.1}',
        activeBackground: '{colors.hover.bright.1}',
        activeColor: '{colors.text.bright.1}',
      },
      submenu: {
        background: '{colors.background.bright.2}',
        borderColor: '{colors.border.bright.3}',
      },
      separator: {
        borderColor: '{colors.border.bright.3}',
      },
    },
    dark: {
      root: {
        background: '{colors.background.dim.2}',
        color: '{colors.text.dim.1}',
        borderColor: '{colors.border.dim.1}',
      },
      item: {
        color: '{colors.text.dim.1}',
        focusBackground: '{colors.hover.dim.1}',
        focusColor: '{colors.text.dim.1}',
        activeBackground: '{colors.hover.dim.1}',
        activeColor: '{colors.text.dim.1}',
      },
      submenu: {
        background: '{colors.background.dim.2}',
        borderColor: '{colors.border.dim.1}',
      },
      separator: {
        borderColor: '{colors.border.dim.1}',
      },
    },
  },
};

export default tokens;
