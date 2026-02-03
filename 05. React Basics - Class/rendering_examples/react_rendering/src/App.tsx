// import { useState } from "react";
// import RunnerUp from "./components/RunnerUp";
// import "./App.css";

// function App() {
//   const favoriteStudent = "Oriyah";
//   const runnerUps = ["Nilli", "Salit", "Oren", "Joe", "Arthur"];
//   const [showRunnerUps, setShowRunnerUps] = useState(false);

//   const toggleRunnerUps = () => {
//     console.log("toggleRunnerUps", showRunnerUps);
//     setShowRunnerUps(!showRunnerUps);
//   };

//   return (
//     <div>
//       <h1>Hello, {favoriteStudent}</h1>
//       <button onClick={toggleRunnerUps}>Show runner ups</button>

//       {showRunnerUps
//         ? runnerUps.map((runnerUp) => (
//             <RunnerUp key={runnerUp} name={runnerUp} />
//           ))
//         : null}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

export default function App() {
  const [on, setOn] = useState(false);
  const color = on ? "tomato" : "steelblue";

  function toggle() {
    debugger; // step: this just schedules state change
    setOn((v) => !v);
  }

  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <button
        onClick={toggle}
        style={{ padding: "10px 14px", borderRadius: 10 }}
      >
        Toggle
      </button>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <div
          style={{ width: 80, height: 80, borderRadius: 12, background: color }}
        />
        <div
          style={{ width: 80, height: 80, borderRadius: 12, background: color }}
        />
        <div
          style={{ width: 80, height: 80, borderRadius: 12, background: color }}
        />
      </div>
    </div>
  );
}
