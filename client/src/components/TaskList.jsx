import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onDelete,
  onEdit,
}) {

  if (tasks.length === 0) {
    return (
      <div className="empty">

        No Tasks Found

      </div>
    );
  }

  return (

    <div className="task-grid">

      {tasks.map((task) => (

        <TaskItem

          key={task._id}

          task={task}

          onDelete={onDelete}

          onEdit={onEdit}

        />

      ))}

    </div>

  );

}

export default TaskList;