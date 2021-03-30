import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
    margin: 0;
    min-height: 100vh;
    color: white;
    overflow: hidden;
  }

  html {
    @media (orientation: portrait) {
      font-size: .5rem;
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
