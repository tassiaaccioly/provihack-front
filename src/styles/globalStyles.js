import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, 
    *:after, *:before,
    html, 
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", "Roboto", Helvetica, Arial, sans-serif;
        text-decoration: none;
        font-size: 10px;
    }
    a {
        color: ${({ theme }) => theme.FixColor};
        font-weight: 700;
    }
    html,
    body {
        background: ${({ theme }) => theme.body};
        transition: 1s;
    }

`;
