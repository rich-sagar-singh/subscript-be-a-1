const userService = require("../services/user.service")


const login = async (req, res) => {
    const { email, password} = req.body
    
    try {
       const result = await userService.login(email, password)
        return res.json({
            success: true,
            token: result
        })
    } catch (error) {
        console.log("Error in create org flow: ", error)
        return res.json({ error: true })
    }
}

module.exports = {
    login
}