import { definePreset } from '@primeuix/themes';
import { Dark } from './dark';
import { Light } from './light';
import { Variables } from './primitives';
import Aura from '@primeuix/themes/aura';

export const customPreset = definePreset(Aura, {
  primitive: {
    ...Variables,
  },
  semantic: {
    colorScheme: {
      light: Light,
      dark: Dark,
    },
  },
  components: {},
});
