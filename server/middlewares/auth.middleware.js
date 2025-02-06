const jwt = require('jsonwebtoken');
require("dotenv").config()
const authorized = (req, res, next) => {
  try {
    const token = req.headers['authorization']
    var decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next()
  } catch (error) {
    console.log(error)
    res.status(401)
  }
}


module.exports = {
    authorized
}