import React from "react";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const handleUpdate = () => {
    const newTask = prompt("Update task:", todo.task);
    if (newTask === null) return; // Cancelled
    if (newTask.trim() === "") {
      alert("Task cannot be empty.");
      return;
    }
    const newCompleted = window.confirm(
      "Mark as completed? (OK = Done, Cancel = Not Done)"
    );
    onUpdate(newTask, newCompleted);
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "8px" }}
    >
      <p>
        <strong>{todo.task}</strong> -{" "}
        {todo.completed ? "✅ Done" : "❌ Not Done"}
      </p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default TodoItem;
