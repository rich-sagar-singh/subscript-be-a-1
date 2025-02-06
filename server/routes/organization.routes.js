const express = require("express")
const organizationController = require("../database/controllers/organization.controller")
const router = express.Router();

router.post('/organizations', (req,res) => organizationController.createOrg(req,res))

module.exports = router
