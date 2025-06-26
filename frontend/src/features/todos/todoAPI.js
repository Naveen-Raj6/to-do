import axios from 'axios';

const BASE_URL = 'http://localhost:4040/todos';

export const fetchTodosAPI = async () => axios.get(BASE_URL);
export const fetchTodoAPI = async (id) => axios.get(`${BASE_URL}/${id}`);
export const addTodoAPI = async (task) => axios.post(BASE_URL, { task });
export const modifyTodoAPI = async (id, task, completed) => axios.put(`${BASE_URL}/${id}`, { task, completed });
export const removeTodoAPI = async (id) => axios.delete(`${BASE_URL}/${id}`);