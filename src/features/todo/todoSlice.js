import { createSlice } from '@reduxjs/toolkit';
import todosState from '../../utils/TodosState.js';
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: todosState,
	reducers: {
		createTodo: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(todoText) {
				return {
					payload: { id: uuidv4(), todoText, status: 'not started' },
				};
			},
		},
		editTodo(state, action) {
			const { id, todoText } = action.payload;

			return state.map((todo) => {
				if (todo.id === id) {
					return {
						id,
						todoText,
						status: todo.status,
					};
				} else {
					return todo;
				}
			});
		},
		deleteTodo(state, action) {
			return state.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { createTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
