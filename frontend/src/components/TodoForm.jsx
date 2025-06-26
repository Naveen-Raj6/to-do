import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice.js";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
