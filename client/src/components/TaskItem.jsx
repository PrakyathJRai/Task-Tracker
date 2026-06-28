import {
  FaEdit,
  FaTrash
} from "react-icons/fa";

function TaskItem({
  task,
  onDelete,
  onEdit,
}) {
  return (
    <div className="task-card">

      <div className="task-top">

        <h3>{task.title}</h3>

        <span className={task.status.replace(/\s/g, "")}>
          {task.status}
        </span>

      </div>

      <p>{task.description}</p>

      <div className="actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          <FaEdit />
        </button>

        <button
          className="delete-btn"
          onClick={() => {
  if (window.confirm("Are you sure you want to delete this task?")) {
    onDelete(task._id);
  }
}}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default TaskItem;