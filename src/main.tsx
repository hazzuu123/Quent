import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import theme from "@/style/theme.ts";
import GlobalFont from "@/style/font.ts";
import GlobalStyle from "@/style/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
