// models/Case.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const client = sequelize.define("client", {
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  client_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  client_city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// client.sync();

module.exports = client;
