import KpiHeader from "./KpiHeader";
import KpiTagline from "./KpiTagline";
import KpiValue from "./KpiValue";

export default function Ex1() {
  return (
    <div className="kpi-card-container">
      <KpiHeader />
      <KpiValue />
      <KpiTagline />
    </div>
  );
}
