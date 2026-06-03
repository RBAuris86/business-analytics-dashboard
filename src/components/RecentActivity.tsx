import { recentActivity } from "../data/demoMetrics";

export default function RecentActivity() {
  return (
    <section className="activity-panel">
      <h2>Recent Activity</h2>

      <div className="activity-list">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div>
              <strong>{activity.item}</strong>
              <p>{activity.date}</p>
            </div>
            <span>{activity.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}