const express = require("express")
const userController = require("../database/controllers/user.controller")
const router = express.Router();

router.post('/users/login', (req,res) => userController.login(req,res))

module.exports = router
