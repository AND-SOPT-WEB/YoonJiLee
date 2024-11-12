import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
