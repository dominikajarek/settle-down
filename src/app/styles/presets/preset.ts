import { definePreset } from '@primeuix/themes';
import { Dark } from './dark';
import { Light } from './light';
import { Variables } from './primitives';
import Aura from '@primeuix/themes/aura';
import menubar from './components/menubar';
import card from './components/card';
import button from './components/button';

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
  components: {
    button,
    card,
    menubar,
  },
});
