type DashboardCardProps = {
  label: string;
  value: string;
  change: string;
};

export default function DashboardCard({ label, value, change }: DashboardCardProps) {
  return (
    <div className="dashboard-card">
      <p className="card-label">{label}</p>
      <h2>{value}</h2>
      <span>{change}</span>
    </div>
  );
}