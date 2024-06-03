import { Request, Response } from 'express';
import { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../models/todoModel';

export const getTodos = (req: Request, res: Response): void => {
	const todos = getAllTodos();
	res.json(todos);
};

export const getTodo = (req: Request, res: Response): void => {
	const todo = getTodoById(req.params.id);
	if (todo) {
		res.json(todo);
	} else {
		res.status(404).json({ message: 'Todo not found' });
	}
};

export const addTodo = (req: Request, res: Response): void => {
	const { title } = req.body;
	const newTodo = createTodo(title);
	res.status(201).json(newTodo);
};

export const modifyTodo = (req: Request, res: Response): void => {
	const updatedTodo = updateTodo(req.params.id, req.body);
	if (updatedTodo) {
		res.json(updatedTodo);
	} else {
		res.status(404).json({ message: 'Todo not found' });
	}
};

export const removeTodo = (req: Request, res: Response): void => {
	const success = deleteTodo(req.params.id);
	if (success) {
		res.json({ message: 'Todo deleted' });
	} else {
		res.status(404).json({ message: 'Todo not found' });
	}
};
