import { GalleriaDesignTokens } from '@primeuix/themes/types/galleria';

const tokens: GalleriaDesignTokens = {
  root: {
    borderRadius: '{border.radius}',
  },
  thumbnailsContent: {
    padding: '{spacing.md}',
  },
  thumbnailNavButton: {
    borderRadius: '50%',
  },
  colorScheme: {
    light: {
      root: {
        borderColor: '{colors.border.bright.3}',
      },
      thumbnailsContent: {
        background: '{colors.white}',
      },
      thumbnailNavButton: {
        focusRing: {
          color: '{colors.accent.1}',
        },
      },
    },
    dark: {
      root: {
        borderColor: '{colors.border.dim.1}',
      },
      thumbnailsContent: {
        background: '{colors.dim.1}',
      },
      thumbnailNavButton: {
        focusRing: {
          color: '{colors.accent.1}',
        },
      },
    },
  },
};

export default tokens;
