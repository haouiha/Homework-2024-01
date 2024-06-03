"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.modifyTodo = exports.addTodo = exports.getTodo = exports.getTodos = void 0;
const todoModel_1 = require("../models/todoModel");
const getTodos = (req, res) => {
    const todos = (0, todoModel_1.getAllTodos)();
    res.json(todos);
};
exports.getTodos = getTodos;
const getTodo = (req, res) => {
    const todo = (0, todoModel_1.getTodoById)(req.params.id);
    if (todo) {
        res.json(todo);
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
};
exports.getTodo = getTodo;
const addTodo = (req, res) => {
    const { title } = req.body;
    const newTodo = (0, todoModel_1.createTodo)(title);
    res.status(201).json(newTodo);
};
exports.addTodo = addTodo;
const modifyTodo = (req, res) => {
    const updatedTodo = (0, todoModel_1.updateTodo)(req.params.id, req.body);
    if (updatedTodo) {
        res.json(updatedTodo);
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
};
exports.modifyTodo = modifyTodo;
const removeTodo = (req, res) => {
    const success = (0, todoModel_1.deleteTodo)(req.params.id);
    if (success) {
        res.json({ message: 'Todo deleted' });
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
};
exports.removeTodo = removeTodo;
