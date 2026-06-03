import DashboardCard from "./DashboardCard";
import { metrics } from "../data/demoMetrics";

export default function MetricsGrid() {
  return (
    <section className="metrics-grid">
      {metrics.map((metric) => (
        <DashboardCard
          key={metric.label}
          label={metric.label}
          value={metric.value}
          change={metric.change}
        />
      ))}
    </section>
  );
}