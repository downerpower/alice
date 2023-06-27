import { createGlobalStyle } from "styled-components";
import HelveticaRegular from "../fonts/Helvetica-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HelveticaRegular';
    src: url(${HelveticaRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    }

  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    font-size: 16px;
    font-family:  'HelveticaRegular', sans-serif;
    background-color: ${({ theme }) => theme.color.gray};
  }
`;