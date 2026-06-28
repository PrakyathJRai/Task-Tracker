import { FaTasks, FaHome, FaPlus, FaChartBar } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>
        <FaTasks />
        Task Tracker
      </h2>

      <ul>
        <li>
          <FaHome />
          Dashboard
        </li>

        <li>
          <FaTasks />
          All Tasks
        </li>

        <li>
          <FaPlus />
          Add Task
        </li>

        <li>
          <FaChartBar />
          Statistics
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;