import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodosAPI, addTodoAPI, modifyTodoAPI, removeTodoAPI, fetchTodoAPI } from "./todoAPI.js";


export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await fetchTodosAPI();
    return response.data;
})

export const fetchTodo = createAsyncThunk('todos/fetchTodo', async (id) => {
    const response = await fetchTodoAPI(id);
    return response.data;
})

export const addTodo = createAsyncThunk("todos/addTodo", async (task) => {
    const response = await addTodoAPI(task);
    return { id: removeTodoAPI, task, completed: false };
})

export const modifyTodo = createAsyncThunk("todos/modifyTodo", async ({ id, task, completed }) => {
    await modifyTodoAPI(id, task, completed);
    return { id, task, completed };
})

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
    await removeTodoAPI(id);
    return id;
})




const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Add Todo
            .addCase(addTodo.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })

            // Update Todo
            .addCase(modifyTodo.fulfilled, (state, action) => {
                const index = state.items.findIndex(todo => todo.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })

            // Delete Todo
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.items = state.items.filter(todo => todo.id !== action.payload);
            });
    },

})

// export { fetchTodos, addTodo, modifyTodo, fetchTodo, deleteTodo };
export default todoSlice.reducer;