import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0; 
  }
`;

export default GlobalStyle;
