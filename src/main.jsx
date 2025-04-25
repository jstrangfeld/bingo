import "@mantine/core/styles.css";
import "./index.css";

import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { mantineTheme } from "src/theme";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={mantineTheme} forceColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
);
