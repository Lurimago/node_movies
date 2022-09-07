const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  username: "postgres",
  password: "turmanyay123L",
  database: "relations-example",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

module.exports = { db, DataTypes };
