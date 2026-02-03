export default function PersonAdder({
  addPerson,
  setNewPersonName,
}: {
  addPerson: () => void;
  setNewPersonName: (newPersonName: string) => void;
}) {
  return (
    <>
      <input
        type="text"
        onChange={(event) => setNewPersonName(event.target.value)}
      />
      <button onClick={addPerson}>Add Person</button>
    </>
  );
}
