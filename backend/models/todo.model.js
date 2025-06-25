import { getPool } from "../config/db.js";

export const getAllTodos = (cb) => {
    const pool = getPool();
    pool.query('SELECT * FROM todos', cb);
};

export const getTodoById = (id, cb) => {
    const pool = getPool();
    pool.query('SELECT * FROM todos WHERE id = ?', [id], cb);
}

export const createTodo = (task, cb) => {
    const pool = getPool();
    pool.query('INSERT INTO todos (task) VALUES (?)', [task], cb);
};

export const updateTodo = (id, task, completed, cb) => {
    const pool = getPool();
    pool.query('UPDATE todos SET task = ?, completed = ? WHERE id = ?', [task, completed, id], cb)
}

export const deleteTodo = (id, cb) => {
    const pool = getPool();
    pool.query('DELETE FROM todos WHERE id = ?', [id], cb);
}