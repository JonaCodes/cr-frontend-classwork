import Battery from "../components/Battery";
import Satisfaction from "./Satisfaction";
import "./ex2.css";

export default function Ex2() {
  const people = [
    { name: "Nilli", satisfaction: 8.2, mlProfficiency: 71 },
    { name: "Arthur", satisfaction: 9.2, mlProfficiency: 81 },
    { name: "Eliza", satisfaction: 0.4, mlProfficiency: 21 },
    { name: "Joe", satisfaction: 6.8, mlProfficiency: 81 },
    { name: "Dan", satisfaction: 1.2, mlProfficiency: 91 },
  ];

  return (
    <div className="people-container">
      {people.map((person) => (
        <div key={person.name} className="person-container">
          <p>{person.name}</p>
          <Satisfaction value={person.satisfaction} />
          <Battery value={person.mlProfficiency} showLabel={false} size="md" />
        </div>
      ))}
    </div>
  );
}
