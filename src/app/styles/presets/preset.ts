import { definePreset } from '@primeuix/themes';
import { Dark } from './dark';
import { Light } from './light';
import { Variables } from './primitives';
import Aura from '@primeuix/themes/aura';
import menubar from './components/menubar';
import card from './components/card';
import button from './components/button';
import galleria from './components/galleria';
import fieldset from './components/fieldset';
import checkbox from './components/checkbox';

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
    checkbox,
    fieldset,
    galleria,
    menubar,
  },
});
