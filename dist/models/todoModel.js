"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
const uuid_1 = require("uuid");
let todos = [];
const getAllTodos = () => {
    return todos;
};
exports.getAllTodos = getAllTodos;
const getTodoById = (id) => {
    return todos.find((todo) => todo.id === id);
};
exports.getTodoById = getTodoById;
const createTodo = (title) => {
    const newTodo = { id: (0, uuid_1.v4)(), title, completed: false };
    todos.push(newTodo);
    return newTodo;
};
exports.createTodo = createTodo;
const updateTodo = (id, updatedFields) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        Object.assign(todo, updatedFields);
        return todo;
    }
    return null;
};
exports.updateTodo = updateTodo;
const deleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteTodo = deleteTodo;
