const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const ReviewModel = require("./models/Review");

const sequelize = new Sequelize(
  `mysql://root:bwxPTjpfIWzzzpJrKYankmVtkmmypGAS@junction.proxy.rlwy.net:47466/railway`,
  
  {
    dialect: "mysql",
    logging: false,
    // alter: true,
    dialectOptions: {
      timezone: "Z",
    },
    define: {
      timestamps: true,
    },
  }
);

const { Review } = sequelize.models;

ReviewModel(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
