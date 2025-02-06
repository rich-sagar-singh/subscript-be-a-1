const app = require('./server-config.js');
const organizationRoutes = require("./routes/organization.routes.js")
const userRoutes = require("./routes/user.routes.js")
const todoRoutes = require("./routes/todo.routes.js")


require("./database/connection.js")

const port = process.env.PORT || 5000;

app.use(organizationRoutes)
app.use(userRoutes)
app.use(todoRoutes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;