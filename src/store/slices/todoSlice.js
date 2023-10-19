import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from "uuid";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('TODO_STATE_AVALIO_RECRUITMENT')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('TODO_STATE_AVALIO_RECRUITMENT', serializedState)
    } catch (error) {
        throw Error(error)
    }
}

const initialState = loadState() || { todo: [] }

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({
                id: uuid(),
                text: action.payload,
                completed: false,
            });
            saveState(state);
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
            saveState(state);
        },
        toggleTodo: (state, action) => {
            state.todo = state.todo.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
            saveState(state);
        },
    },
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export const selectTodos = (state) => state.todos.todos
export default todoSlice.reducer