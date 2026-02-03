import type { IPerson } from "./sharedTypes";

type PersonProps = {
  person: IPerson;
};

export default function Person({ person }: PersonProps) {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      {/* <PersonFavoriteFoods favoriteFoods={person.favoriteFoods} /> */}
    </div>
  );
}
