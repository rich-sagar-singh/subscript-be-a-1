const organizationService = require("../services/organization.service")
const userService = require("../services/user.service")


const createOrg = async (req, res) => {
    const { orgName, userName, email, password } = req.body
        orgName, userName, email, password
    
    try {
        const orgCreateRes = await organizationService.createOrg(orgName);
        await userService.signup(userName, email, password, orgCreateRes)
        return res.json({
            success: true
        })
    } catch (error) {
        console.log("Error in create org flow: ", error)
        return res.json({ error: true })
    }
}

module.exports = {
    createOrg
}