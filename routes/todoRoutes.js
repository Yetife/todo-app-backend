const router = require('express').Router();

const controller = require('../controllers/todoController');

router.post("/", controller.addTodos)

router.get("/", controller.getTodos)

router.put("/:id", controller.updateTodo)

router.delete("/:id", controller.deleteTodo)

module.exports = router;