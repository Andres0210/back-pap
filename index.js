const server = require("./src/app");
const { PORT } = require("./src/config");
const { sequelize } = require("./src/DB_connection");

sequelize.sync({ alter: true }).then(async () => {
  console.log("connected database, master");
  server.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
});
