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
      '2xl': { max: '1536px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xs: { max: '480px' },
      xxs: { max: '400px' },

      // min max
      'xl-2xl': { min: '1280px', max: '1536px' },
      'lg-xl': { min: '1024px', max: '1280px' },
      'md-lg': { min: '768px', max: '1279px' },
      'sm-md': { min: '640px', max: '768px' },
      'xs-sm': { min: '480px', max: '639px' },
      'xxs-xs': { min: '400px', max: '479px' },

      // devices
      tablet: { min: '640px', max: '1023px' },

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
