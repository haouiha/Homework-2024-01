"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
const todoValidator_1 = require("../validators/todoValidator");
const router = (0, express_1.Router)();
router.get('/', todoController_1.getTodos);
router.get('/:id', todoController_1.getTodo);
router.post('/', todoValidator_1.todoValidate, todoController_1.addTodo);
router.put('/:id', todoValidator_1.todoValidate, todoController_1.modifyTodo);
router.delete('/:id', todoController_1.removeTodo);
exports.default = router;
