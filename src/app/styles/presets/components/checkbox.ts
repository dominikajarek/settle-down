import { CheckboxDesignTokens } from '@primeuix/themes/types/checkbox';

const tokens: CheckboxDesignTokens = {
  root: {
    borderRadius: '{border.radius}',
  },
  colorScheme: {
    light: {
      root: {
        checkedBackground: '{colors.accent.1}',
        checkedBorderColor: '{colors.accent.1}',
        checkedHoverBackground: '{colors.hover.bright.accent.hover}',
        checkedHoverBorderColor: '{colors.hover.bright.accent.hover}',
      },
    },
    dark: {
      root: {
        checkedBackground: '{colors.accent.1}',
        checkedBorderColor: '{colors.accent.1}',
        checkedHoverBackground: '{colors.hover.dim.accent.hover}',
        checkedHoverBorderColor: '{colors.hover.dim.accent.hover}',
      },
    },
  },
};

export default tokens;
