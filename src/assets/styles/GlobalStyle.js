import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&display=swap');
        font-family: 'Source Sans Pro', sans-serif; 
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;
