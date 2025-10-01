import { ButtonDesignTokens } from '@primeuix/themes/types/button';

const primary = {
  background: '{colors.accent.1}',
  borderColor: '{colors.accent.1}',
  color: '{colors.white}',
  hoverColor: '{colors.white}',
  activeColor: '{colors.white}',
  focusRing: {
    color: '{colors.accent.1}',
    shadow: 'none',
  },
};

const secondary = {
  background: 'transparent',
  borderColor: '{colors.accent.1}',
  color: '{colors.accent.1}',
  hoverColor: '{colors.white}',
  activeColor: '{colors.white}',
  focusRing: {
    color: '{colors.accent.1}',
    shadow: 'none',
  },
};

const tokens: ButtonDesignTokens = {
  root: {
    borderRadius: '{border.radius}',
  },
  colorScheme: {
    light: {
      root: {
        primary: {
          ...primary,
          hoverBackground: '{colors.hover.bright.accent.hover}',
          hoverBorderColor: '{colors.hover.bright.accent.hover}',
          activeBackground: '{colors.hover.bright.accent.active}',
          activeBorderColor: '{colors.hover.bright.accent.active}',
        },
        secondary: {
          ...secondary,
          hoverBackground: '{colors.hover.bright.accent.hover}',
          hoverBorderColor: '{colors.hover.bright.accent.hover}',
          activeBackground: '{colors.hover.bright.accent.active}',
          activeBorderColor: '{colors.hover.bright.accent.active}',
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
          ...primary,
          hoverBackground: '{colors.hover.dim.accent.hover}',
          hoverBorderColor: '{colors.hover.dim.accent.hover}',
          activeBackground: '{colors.hover.dim.accent.active}',
          activeBorderColor: '{colors.hover.dim.accent.active}',
        },
        secondary: {
          ...secondary,
          hoverBackground: '{colors.hover.dim.accent.hover}',
          hoverBorderColor: '{colors.hover.dim.accent.hover}',
          activeBackground: '{colors.hover.dim.accent.active}',
          activeBorderColor: '{colors.hover.dim.accent.active}',
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
