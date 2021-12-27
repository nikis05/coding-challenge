import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        font-family: sans-serif
    }

    body {
        display:flex;
        align-items:center;
        justify-content:center;
        height: 100vh;
    }

    input, button {
        outline: none;
        font-family: sans-serif;
    }
`;
