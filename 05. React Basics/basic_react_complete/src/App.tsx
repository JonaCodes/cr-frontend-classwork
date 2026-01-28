import { useState } from "react";
import RunnerUp from "./components/RunnerUp";
import "./App.css";

function App() {
  const favoriteStudent = "Oriyah";
  const runnerUps = [
    "Nillli",
    "Salit Hadad",
    "Oren Tree",
    "Joe Abercrombie",
    "King Arthur",
  ];
  const [showRunnerUps, setShowRunnerUps] = useState(false);

  const toggleRunnerUps = () => {
    console.log("toggleRunnerUps", showRunnerUps);
    setShowRunnerUps(!showRunnerUps);
  };

  return (
    <div>
      <h1>Hello, {favoriteStudent}</h1>
      <button onClick={toggleRunnerUps}>Show runner ups</button>
      {showRunnerUps
        ? runnerUps.map((runnerUp) => (
            <RunnerUp key={runnerUp} name={runnerUp} />
          ))
        : null}
    </div>
  );
}

export default App;
