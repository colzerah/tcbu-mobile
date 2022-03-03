import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blue: string;
      indigo: string;
      purple: string;
      pink: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      teal: string;
      cyan: string;
      white: string;
      gray: string;
      grayDark: string;
      primary: string;
      secondary: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
      light: string;
      dark: string;
      black: string;
    };
    fonts: {
      regular: string;
      bold: string;
      medium: string;
      thin: string;
    };
  }
}
