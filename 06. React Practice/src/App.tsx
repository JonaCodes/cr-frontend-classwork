import { useState } from "react";
import "./App.css";
import Ex1 from "./ex-1/Ex1";
import Ex2 from "./ex-2/Ex2";
import Ex3 from "./ex-3/Ex3";
import Ex4 from "./ex-4/Ex4";
import Ex5 from "./ex-5/Ex5";
import Ex6 from "./ex-6/Ex6";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          Ex 1
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          Ex 2
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => setActiveTab(3)}
        >
          Ex 3
        </button>
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => setActiveTab(4)}
        >
          Ex 4
        </button>
        <button
          className={activeTab === 5 ? "active" : ""}
          onClick={() => setActiveTab(5)}
        >
          Ex 5
        </button>
        <button
          className={activeTab === 6 ? "active" : ""}
          onClick={() => setActiveTab(6)}
        >
          Ex 6
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 1 && <Ex1 />}
        {activeTab === 2 && <Ex2 />}
        {activeTab === 3 && <Ex3 />}
        {activeTab === 4 && <Ex4 />}
        {activeTab === 5 && <Ex5 />}
        {activeTab === 6 && <Ex6 />}
      </div>
    </div>
  );
}

export default App;
