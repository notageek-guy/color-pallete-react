import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import theme from "./theme/theme";
import { AppProvider } from "./context/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
