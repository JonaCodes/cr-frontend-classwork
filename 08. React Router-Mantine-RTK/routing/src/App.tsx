import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import BirthdayMonthPage from "./pages/BirthdayMonthPage";
import BirthdaysPage from "./pages/BirthdaysPage";
import HolidaysPage from "./pages/HolidaysPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="appShell">
      <TopNav />

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/birthdays" element={<BirthdaysPage />} />
          <Route path="/birthdays/:month" element={<BirthdayMonthPage />} />
          <Route path="/holidays" element={<HolidaysPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
