declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
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
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  // colors: {  },
  // fontFamily: {  },
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
  // shadows: {  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
