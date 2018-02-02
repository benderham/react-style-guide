import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1,
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
  // See below for the full list of options.
});

export default typography;
