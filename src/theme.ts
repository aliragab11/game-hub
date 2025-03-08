import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: '{colors.white}', _dark: '#141414' }, // Custom dark background
          },
          subtle: {
            value: { _light: '{colors.gray.50}', _dark: '#1a1a1a' }, // Custom dark subtle background
          },
          muted: {
            value: { _light: '{colors.gray.100}', _dark: '#262626' }, // Custom dark muted background
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: '{colors.black}', _dark: '#e5e5e5' }, // Custom dark text color
          },
          muted: {
            value: { _light: '{colors.gray.600}', _dark: '#a3a3a3' }, // Custom dark muted text
          },
        },
        border: {
          DEFAULT: {
            value: { _light: '{colors.gray.200}', _dark: '#404040' }, // Custom dark border
          },
        },
      },
    },

    // tokens: {
    //   colors: {
    //     gray: {
    //       50: { value: '#f9f9f9' },
    //       100: { value: '#ededed' },
    //       200: { value: '#d3d3d3' },
    //       300: { value: '#b3b3b3' },
    //       400: { value: '#a0a0a0' },
    //       500: { value: '#898989' },
    //       600: { value: '#6c6c6c' },
    //       700: { value: '#202020' },
    //       800: { value: '#121212' },
    //       900: { value: '#111' },
    //     },
    //   },
    // },
  },
});

export const system = createSystem(defaultConfig, config);
