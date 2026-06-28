import { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

function TaskForm({ onSubmit, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("Pending");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    onSubmit({
      title,
      description,
      status,
    });

    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <h2>
        <FaPlusCircle />
        {editingTask ? " Update Task" : " Add New Task"}
      </h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button>
        {editingTask
          ? "Update Task"
          : "Add Task"}
      </button>

    </form>
  );
}

export default TaskForm;