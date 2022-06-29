const router = require('express').Router();

const controller = require('../controllers/todoController');

router.post("/", controller.addTodos)

module.exports = router;