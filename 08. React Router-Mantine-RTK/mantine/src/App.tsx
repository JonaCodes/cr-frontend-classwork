import { AppShell } from "@mantine/core";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

function App() {
  return (
    <AppShell header={{ height: 100 }} padding="md">
      <AppHeader />
      <AppContent />
    </AppShell>
  );
}

export default App;
