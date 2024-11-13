import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      accentColor: string;
      background: string;
      textColor: string;
      error: string;
    };
  }
}
