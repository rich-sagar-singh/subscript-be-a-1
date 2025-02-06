const todoService = require("../services/todo.service")

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body
        const user = req.user
        const result = await todoService.addTodo(title, description, user.user)
        return res.json({ result }).status(201)
    } catch (error) {
        console.log("error>>", error)
        return res.status(500)
    }
}

module.exports = {
    createTodo
}