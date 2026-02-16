import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // Start by wrapping the App with BrowserRouter
  // Then make sure we're rendering the right page based off the current route in the URL
  // Allow the user to press the links in the TopNav component to route to the different pages
  // Then do the individual birthday month pages
  // Then handle wrong months, like `/birthdays/joolie`
  // Then allow the user to "go back"
  // Then handle all wrong routes like `/schubert`
  <StrictMode>
    <App />
  </StrictMode>,
);
