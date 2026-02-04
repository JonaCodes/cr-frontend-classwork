export default function RaveBox({
  selectedBox,
  boxNumber,
  color,
}: {
  selectedBox: number | null;
  boxNumber: number;
  color: string;
}) {
  return (
    <div
      className={`box ${selectedBox === boxNumber ? "on" : ""}`}
      style={{ background: color }}
    ></div>
  );
}
