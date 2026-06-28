import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaSpinner,
  FaChartLine,
} from "react-icons/fa";

function StatsCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <div className="stats">
      <div className="stat purple">
        <FaTasks />
        <div>
          <h4>Total Tasks</h4>
          <h2>{total}</h2>
        </div>
      </div>

      <div className="stat yellow">
        <FaClock />
        <div>
          <h4>Pending</h4>
          <h2>{pending}</h2>
        </div>
      </div>

      <div className="stat blue">
        <FaSpinner />
        <div>
          <h4>In Progress</h4>
          <h2>{progress}</h2>
        </div>
      </div>

      <div className="stat green">
        <FaCheckCircle />
        <div>
          <h4>Completed</h4>
          <h2>{completed}</h2>
        </div>
      </div>

      <div className="stat pink">
        <FaChartLine />
        <div>
          <h4>Completion</h4>
          <h2>{percentage}%</h2>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;