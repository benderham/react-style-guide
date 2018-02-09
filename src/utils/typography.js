import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400', '700', '900'],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      // lineHeight: 1,
      // padding: 0,
      // margin: 0,
    },
  }),
});

export default typography;
