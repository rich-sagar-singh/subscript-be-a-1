const userRepository = require("../repositories/user.repository")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require("dotenv").config()


const signup = async (name, email, password, org_id) => {
    if (!name?.length || !email?.length || !password?.length || !(typeof org_id === "number")) {
        throw new Error("Faulty Payload")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await userRepository.create(name, email, hashedPassword, "admin", org_id)
    return result;
}

const login = async (email, password) => {
    if (!email?.length || !password?.length) {
        throw new Error("Wrong credentials")
    }
    const existingUser = await userRepository.get({ email })
    const hashedPassword = existingUser.password
    const isPasswordRight = await bcrypt.compare(password, hashedPassword)
    if (isPasswordRight) {
        delete existingUser.password
        const token = jwt.sign({ user: existingUser }, process.env.JWT_SECRET,{ algorithm: 'HS256' })
        return token
    } else { throw new Error("wrong password") }
}

module.exports = {
    signup, login
}