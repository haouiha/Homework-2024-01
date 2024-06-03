import { v4 as uuidv4 } from 'uuid';

export interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

let todos: Todo[] = [];

export const getAllTodos = (): Todo[] => {
	return todos;
};

export const getTodoById = (id: string): Todo | undefined => {
	return todos.find((todo) => todo.id === id);
};

export const createTodo = (title: string): Todo => {
	const newTodo: Todo = { id: uuidv4(), title, completed: false };
	todos.push(newTodo);
	return newTodo;
};

export const updateTodo = (id: string, updatedFields: Partial<Todo>): Todo | null => {
	const todo = todos.find((todo) => todo.id === id);
	if (todo) {
		Object.assign(todo, updatedFields);
		return todo;
	}
	return null;
};

export const deleteTodo = (id: string): boolean => {
	const index = todos.findIndex((todo) => todo.id === id);
	if (index !== -1) {
		todos.splice(index, 1);
		return true;
	}
	return false;
};
