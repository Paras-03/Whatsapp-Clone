import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    dark: {
      100: '#202C33',
      200: '#111B21',
      300: '#2A3942',
      400: '#1F2C33',
    },
    whatsapp: {
      500: '#00A884',
      600: '#008069',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'dark.200',
        color: 'white'
      }
    }
  }
});

export default theme;