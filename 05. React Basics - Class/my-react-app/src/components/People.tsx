import type { IPerson } from "./sharedTypes";
import Person from "./Person";

export default function People({ people }: { people: IPerson[] }) {
  return (
    <div>
      {people.map((person, index) => (
        <Person person={person} key={index} />
      ))}
    </div>
  );
}
