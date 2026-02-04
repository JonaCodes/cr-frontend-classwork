export default function KpiTagline() {
  const pctChange = 0.1;
  const sign = pctChange > 0 ? "+" : "";
  const colorStyle = pctChange > 0 ? "#0ee00eb7" : "#ff0000eb";

  return (
    <h4 className="kpi-tagline" style={{ color: colorStyle }}>
      {sign}
      {pctChange.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}{" "}
      since last month
    </h4>
  );
}
