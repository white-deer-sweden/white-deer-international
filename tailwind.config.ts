import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    fontWeight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
      '900': '900',
    },
    screens: {
      // max-width
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '479px' },
      xxs: { max: '400px' },

      // min width
      'min-2xl': { min: '1535px' },
      'min-xl': { min: '1279px' },
      'min-lg': { min: '1023px' },
      'min-md': { min: '767px' },
      'min-sm': { min: '639px' },
      'min-xs': { min: '479px' },
      'min-xxs': { min: '400px' },
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      animatedSettings: {
        classes: ['headShake'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.absolute-center': {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        },
      });
    }),
  ],
};
export default config;
