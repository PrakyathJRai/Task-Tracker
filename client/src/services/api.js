import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-k9xs.onrender.com/api/tasks",
});

export default API;