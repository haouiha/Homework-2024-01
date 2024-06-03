import { Router } from 'express';
import { getTodos, getTodo, addTodo, modifyTodo, removeTodo } from '../controllers/todoController';
import { todoValidate } from '../validators/todoValidator';

const router: Router = Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', todoValidate, addTodo);
router.put('/:id', todoValidate, modifyTodo);
router.delete('/:id', removeTodo);

export default router;
