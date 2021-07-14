import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    html {font-size: 16px }
    body {
        margin: 0;
        padding: 0;
        color: white;
        font-family: "Open Sans";
        Background: #25282A;
        font-size: 1.2vw;
        min-height: 100vh;
        @media (max-width: 480px) {
          font-size: 11px;
        }
      }
    input {
       &:focus {
        border: 2px solid #10B9DF !important;
        outline: 2px auto #10B9DF;
        outline-style: inherit;
     }
        &:hover{
          border: 2px solid #10B9DF !important;
          },
    }
   
`;
export default GlobalStyle;
