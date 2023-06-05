import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    ul, ol{
        list-style:none;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    :root {
        --color-color-primary: #fd377e;
        --color-color-primary-2: #e34981;
        --color-color-secondary: #03b898;
        --color-grey-4: #212529;
        --color-grey-3: #868E96;
        --color-grey-2: #E9ECEF;
        --color-grey-1: #f8f9fa;
        font-family: "Nunito";
    }
`