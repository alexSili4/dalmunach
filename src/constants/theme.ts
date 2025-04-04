declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    black: string;
    white: string;
    body: string;
    primary: string;
    error: string;
    red: string;
    blue: string;
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
    counter: number;
    heroTitle: number;
    bottle: number;
    saxophonist: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    body: '#e5d7b8',
    primary: '#222222',
    error: '#b75048',
    red: '#e63c00',
    blue: '#234d73',
  },
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
    counter: 10,
    heroTitle: 10,
    saxophonist: 10,
    bottle: 100,
  },
  // shadows: {  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
