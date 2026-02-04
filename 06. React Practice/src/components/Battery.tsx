import "./battery.css";

type Props = {
  value: number; // 0..100
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function getColorClass(v: number) {
  if (v <= 20) return "battery--red";
  if (v <= 60) return "battery--orange";
  return "battery--green";
}

export default function Battery({
  value,
  showLabel = true,
  size = "md",
}: Props) {
  const v = clamp(Math.round(value), 0, 100);
  const colorClass = getColorClass(v);

  return (
    <div
      className={`battery ${colorClass} battery--${size}`}
      aria-label={`Battery ${v}%`}
    >
      <div className="battery__body">
        <div className="battery__fill" style={{ width: `${v}%` }} />
      </div>

      {showLabel && <div className="battery__label">{v}%</div>}
    </div>
  );
}
