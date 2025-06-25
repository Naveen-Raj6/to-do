import {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} from "../models/todo.model";

export const fetchTodos = (req, res) => {
    getAllTodos((err, todos) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(todos);
    });
}

export const fetchTodo = (req, res) => {
    const id = req.params.id;
    getTodoById(id, (err, todo) => {
        if (err) return res.status(500).json({ error: err.message });
        if (todo.length === 0) {
            return res.status(404).json({ error: 'todo not found' });
        }
        res.status(200).json(todo[0]);
    })
}

export const addTodo = (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).json({ error: 'Task is required' });

    createTodo(task, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Todo created successfully', id: result.insertId });
    })
}

export const modifyTodo = (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    updateTodo(id, task, completed, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Todo updated successfully" })
    })
}

export const removeTodo = (req, res) => {
    const { id } = req.params;
    deleteTodo(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Todo deleted successfully" })
    })
}