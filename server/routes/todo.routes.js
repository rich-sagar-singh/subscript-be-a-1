const express = require("express")
const todoController = require("../database/controllers/todo.controller");
const { authorized } = require("../middlewares/auth.middleware");
const router = express.Router();

router.use((req, res, next) => authorized(req, res, next))
router.post('/todo/', (req, res) => todoController.createTodo(req, res))

module.exports = router
