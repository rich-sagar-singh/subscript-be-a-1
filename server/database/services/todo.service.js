const todoRepository = require("../repositories/todo.repository")


const addTodo = async (title, description, user, assigned_to = null) => {
    if (!title?.length || !description?.length) {
        throw new Error("Faulty Payload")
    }
    const { org_id, id } = user;
    const result = await todoRepository.create(title, description, org_id, id, assigned_to);
    return result

}

module.exports = {
    addTodo
}