import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "Pretendard";
        font-size: ${theme.fontSize.B2};
        font-weight: 400;
    }
`;

export default GlobalStyle;
