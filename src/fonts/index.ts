import localFont from 'next/font/local';

const gilory = localFont({
  src: [
    {
      style: 'normal',
      weight: '400',
      path: './gilory/RadomirTinkov-Gilroy-Regular.woff2',
    },
    {
      style: 'normal',
      weight: '500',
      path: './gilory/RadomirTinkov-Gilroy-Medium.woff2',
    },
    {
      style: 'normal',
      weight: '600',
      path: './gilory/RadomirTinkov-Gilroy-SemiBold.woff2',
    },
    {
      style: 'italic',
      weight: '600',
      path: './gilory/RadomirTinkov-Gilroy-SemiBoldItalic.woff2',
    },
  ],
  variable: '--font-gl',
});

export default {
  classNames: `${gilory.className}`,
  variables: `${gilory.variable}`,
  fonts: {
    gilory,
  },
};
