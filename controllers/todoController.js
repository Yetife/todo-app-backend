const { Todos } = require('../models/todo')
const {v4: uuid} = require("uuid")

//add todos
 exports.addTodos = async (req, res) => {
    try {
        const todos = await req.body;
        todos.id = uuid()
        res.status(201).json({
            message: "Todos Created",
            todos
        })
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

//get all todos
exports.getTodos = async (req, res)=> {
    try {
        const todos = await Todos;
        res.status(200).json({
            message: "All todos",
            todos: todos
        })
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateTodo = async (req, res) => {
    try {
        let id = req.params.id;
        const todos = await Todos.find((flight) => flight.id === id);
        const todo = await req.body;
        res.status(200).json({
            message: "flight updated",
           todo: todos
        })
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        let id = req.params.id;
        const todo = await Todos.find((todo) => todo.id === id);
        Todos.splice(Todos.indexOf((todo), 1))
        res.status(200).json({
            message: "Todo deleted",
            todo
        })
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}