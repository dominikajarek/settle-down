import { FieldsetDesignTokens } from '@primeuix/themes/types/fieldset';

const tokens: FieldsetDesignTokens = {
  root: {
    borderRadius: '{border.radius}',
    padding: '{spacing.md}',
  },
  legend: {
    borderRadius: '{border.radius}',
  },
  colorScheme: {
    light: {
      root: {
        background: '{colors.background.bright.1}',
        color: '{colors.text.bright.1}',
        borderColor: '{colors.border.bright.3}',
      },
      legend: {
        background: '{colors.background.bright.1}',
        color: '{colors.text.bright.1}',
        borderColor: '{colors.border.bright.3}',
      },
    },
    dark: {
      root: {
        background: '{colors.background.dim.2}',
        color: '{colors.text.dim.1}',
        borderColor: '{colors.border.dim.1}',
      },
      legend: {
        background: '{colors.background.dim.2}',
        color: '{colors.text.dim.1}',
        borderColor: '{colors.border.dim.1}',
      },
    },
  },
};

export default tokens;
