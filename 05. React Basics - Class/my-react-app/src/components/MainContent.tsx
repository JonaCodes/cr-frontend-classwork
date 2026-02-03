export default function MainContent() {
  const people = ["Aliza", "John", "John"];
  return people.map((person, index) => (
    <div key={index} className="person">
      {person}
    </div>
  ));
}
