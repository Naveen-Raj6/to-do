import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>📝 My Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
