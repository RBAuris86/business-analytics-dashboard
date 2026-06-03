import MetricsGrid from "./components/MetricsGrid";
import RecentActivity from "./components/RecentActivity";
import "./styles/globals.css";

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">AURIS Technologies Demo</p>
        <h1>Business Analytics Dashboard</h1>
        <p>
          A clean dashboard concept for tracking revenue, customers, projects,
          and operational activity using demo business data.
        </p>
      </section>

      <MetricsGrid />
      <RecentActivity />
    </main>
  );
}