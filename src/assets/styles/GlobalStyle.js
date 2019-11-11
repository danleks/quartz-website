import { createGlobalStyle } from 'styled-components';
import 'typeface-nunito-sans';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
