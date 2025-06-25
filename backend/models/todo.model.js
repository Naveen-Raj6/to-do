import { getPool } from "../config/db";


const pool = getPool();
export const getAllTodos = (cb) => {
    // const pool = getPool();
    pool.query('SELECT * FROM todos', cb);
};

export const getTodoById = (id, cb) => {
    // const pool = getPool();
    pool.query('SELECT * FROM todos WHERE id = ?', [id], cb);
}

export const createTodo = (task, cb) => {
    pool.query('INSERT INTO todos (task) VALUES (?)', [task], cb);
};

export const updateTodo = (id, task, completed, cb) => {
    pool.query('UPDATE todos SET task = ?, completed = ? WHERE id = ?', [task, completed, id], cb)
}

export const deleteTodo = (id, cb) => {
    pool.query('DELETE FROM todos WHERE id = ?', [id], cb);
}