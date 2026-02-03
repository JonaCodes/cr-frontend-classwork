import { useState } from "react";
import "./App.css";

function App() {
  const vip = "Gilles Gade";
  const [showVIP, setShowVIP] = useState(false);

  const toggleShowVIP = () => {
    setShowVIP(!showVIP);
  };

  return (
    <div>
      <button onClick={toggleShowVIP}>Show VIP</button>
      {showVIP && <div>What a guy: {vip}</div>}
    </div>
  );
}

export default App;
