export default function Satisfaction({ value }: { value: number }) {
  let emoji = "";
  if (value <= 1) emoji = "😭";
  else if (value <= 2) emoji = "😞";
  else if (value <= 3) emoji = "🙁";
  else if (value <= 4) emoji = "😐";
  else if (value <= 5) emoji = "🙂";
  else if (value <= 6) emoji = "😊";
  else if (value <= 7) emoji = "😄";
  else if (value <= 8) emoji = "😁";
  else if (value <= 9) emoji = "😆";
  else if (value <= 10) emoji = "😍";

  return <div style={{ fontSize: "32px" }}>{emoji}</div>;
}
