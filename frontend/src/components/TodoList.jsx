import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  deleteTodo as deleteTodoAction,
  modifyTodo,
} from "../features/todos/todoSlice.js";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const { items: todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const updateTodo = (id, task, completed) => {
    console.log("Dispatching modifyTodo:", { id, task, completed });
    dispatch(modifyTodo({ id, task, completed }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos found</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onUpdate={(newTask, newCompleted) =>
              updateTodo(todo.id, newTask, newCompleted)
            }
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
