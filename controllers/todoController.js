const { Todos } = require('../models/todo')
const {v4: uuid} = require("uuid")

//add todos
 exports.addTodos =
// async (req, res) => {
//     const newTodo = new Todos(req.body)
//     try {
//         const savedTodo = await newTodo.save()
//         res.status(200).json(savedTodo);
//     }catch (err) {
//         res.status(500).json(err)
//     }
// }

    async (req, res) => {
    try {
        // const {title, desc} = await req.body;
        const todos = await req.body;
        // const newTodo = {
        //     id: uuid(),
        //     title,
        //     desc
        // }
        todos.id = uuid()
        // Todos.push(todos);
        res.status(201).json({
            message: "Todos Created",
            todos
        })
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}