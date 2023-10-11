import { extendTheme } from '@chakra-ui/react';
import '@fontsource/manrope';
import '@fontsource/racing-sans-one';

export const theme = extendTheme({
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif, `,
  },

  styles: {
    global: {
      'html, body': {
        color: 'gray.900',
        lineHeight: 'tall',
        fontFamily: 'Manrope',
      },
      ul: {
        listStyle: 'none',
      },
    },
  },
});
