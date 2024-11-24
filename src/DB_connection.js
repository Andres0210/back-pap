const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const ReviewModel = require("./models/Review");

const sequelize = new Sequelize(
  `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    dialect: "mysql",
    logging: false,
    alter: true,
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
