import { useEffect, useState } from "react";
import API from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (task) => {
    try {
      if (editingTask) {
        await API.put(`/${editingTask._id}`, task);
        toast.success("Task Updated Successfully");
        setEditingTask(null);
      } else {
        await API.post("/", task);
        toast.success("Task Added Successfully");
      }

      fetchTasks();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/${id}`);
      toast.success("Task Deleted");
      fetchTasks();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  let filteredTasks = tasks.filter((task) => {
    const statusMatch =
      filter === "All" || task.status === filter;

    const searchMatch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });

  if (sort === "Newest") {
    filteredTasks.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );
  }

  if (sort === "Oldest") {
    filteredTasks.sort(
      (a, b) =>
        new Date(a.createdAt) -
        new Date(b.createdAt)
    );
  }

  if (sort === "A-Z") {
    filteredTasks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
  <div className="layout">
    <Sidebar />

    <div className="main">
      <Header
        search={search}
        setSearch={setSearch}
      />

      <div className="content">

        {/* Statistics Cards */}
        <StatsCards tasks={tasks} />

        {/* Task Form */}
        <TaskForm
          onSubmit={handleSubmit}
          editingTask={editingTask}
        />

        {/* Toolbar */}
        <div className="toolbar">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>A-Z</option>
          </select>
        </div>

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onEdit={setEditingTask}
        />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="colored"
        />

      </div>
    </div>
  </div>
);
}

export default App;