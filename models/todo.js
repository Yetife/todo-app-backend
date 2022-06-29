const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
        _id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,

        },
        desc: {
            type: String,
            max: 500
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("Todos", TodoSchema)