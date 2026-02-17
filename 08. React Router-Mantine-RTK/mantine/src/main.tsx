import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// This is very important! It will inject the styles for Mantine into your app.
// Without this, none of the Mantine components will look right.
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* You'll need to wrap your app withthe MantineProvider */}
    <App />
  </StrictMode>,
);
