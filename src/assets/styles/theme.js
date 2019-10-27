const theme = {
  color: {
    primary: 'hsla(296, 31%, 26%, 0.92)',
    lightDark: 'hsla(300, 1%, 19%, 0.8)',
    black: 'hsla(0, 0%, 5%, 1)',
    lightGrey: 'hsla(0, 0%, 97%, 1)',
    midGrey: 'hsla(0, 8%,90%,1)',
    darkGrey: 'hsla(0,0%,72%, 1)',
    white: 'hsla(0, 0%, 100%, 1)',
  },

  fontSize: {
    mobile: {
      xs: '1.2rem',
      s: '1.6rem',
      m: '2.2rem',
      l: '4.5rem',
    },

    tablet: {
      s: '1.6rem',
      m: '2.5rem',
      l: '9rem',
    },

    desktop: {
      s: '2rem',
      m: '2.5rem',
      l: '11rem',
    },
  },

  fontWeight: {
    light: '300',
    regular: '400',
    bold: '600',
  },

  mq: {
    small: '@media(max-width: 320px)',
    tablet: '@media(min-width: 768px)',
    preDesktop: '@media(min-width: 900px)',
    desktop: '@media(min-width: 1024px)',
    huge: '@media(min-width: 1440px)',
  },
};

export default theme;
