declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    black: string;
  };
  fontFamily: {
    sofiaSans: string;
    playfairDisplay: string;
  };
  padding: {
    container: number;
  };
  breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  containerWidth: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  zIndex: {
    header: number;
    counter: number;
    heroTitle: number;
    bottle: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: { black: '#000000' },
  fontFamily: { sofiaSans: 'Sofia Sans', playfairDisplay: 'Playfair Display' },
  // fontWeight: {  },
  // fontSize: {  },
  // borderRadius: {  },
  breakpoints: {
    mobile: 375,
    tablet: 1440,
    desktop: 1920,
  },
  containerWidth: {
    mobile: 327,
    tablet: 1080,
    desktop: 1440,
  },
  padding: {
    container: 16,
  },
  zIndex: {
    header: 10,
    counter: 10,
    heroTitle: 10,
    bottle: 100,
  },
  // shadows: {  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
