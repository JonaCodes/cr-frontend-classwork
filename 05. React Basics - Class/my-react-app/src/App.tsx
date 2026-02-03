import { useState } from "react";
import "./App.css";
import type { IPerson } from "./components/sharedTypes";
import People from "./components/People";
import PersonAdder from "./components/PersonAdder";

export default function App() {
  const [people, setPeople] = useState<IPerson[]>([
    { name: "Arthur", age: 14, favoriteFoods: ["Pizza", "Burger"] },
    { name: "Nilli", age: 14, favoriteFoods: ["Pasta", "Sushi"] },
  ]);

  const [newPersonName, setNewPersonName] = useState("");
  const addPerson = () => {
    setPeople([...people, { name: newPersonName, age: 14, favoriteFoods: [] }]);
  };

  return (
    <div className="main-container">
      <People people={people} />
      <PersonAdder addPerson={addPerson} setNewPersonName={setNewPersonName} />
    </div>
  );
}
