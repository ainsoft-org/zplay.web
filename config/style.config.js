import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
    background-color: #171717;
    }

    h1,h2,h3,h4,h5,h6 {
    font-family: 'Sora', sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }
`;

const theme = {
  colors: {
    primary: '#DA0037',
    black: '#171717',
    white: '#EDEDED',
    secondary: '#444444',
  },
};

export { GlobalStyle, theme };
