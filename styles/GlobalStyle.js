import { createGlobalStyle } from "styled-components";
import variables from "@/styles/variables";
import fonts from "@/styles/fonts";

const GlobalStyle = createGlobalStyle`
    ${variables};
    ${fonts};

    html {
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behaviour: smooth; 
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    html, body{
        width: 100%;
    }
    body {
        position: relative;
        color: var(--white);
        margin: 0;
        padding: 0;
        height: 100%;
        min-height: 150vh;
        background-color: var(--dark-purple);
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        @media (max-width: 320px) {
            word-break: break-all;
        }
    }

    :root {

    }

`;

export default GlobalStyle;