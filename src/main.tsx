import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import GlobalFont from "style/font.ts";
import GlobalStyle from "style/global.ts";
import { ThemeProvider } from "styled-components";
import theme from "style/theme.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalFont />
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
