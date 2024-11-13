import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
  }


  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
