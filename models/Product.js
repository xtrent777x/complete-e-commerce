// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns (id - integer - doesnt allow null- set primary - use auto)
    //(product name) - string - doesnt allow null -decimal -validate null -
    //stocks (integer - doesnt allow null - set a default value 10 - validates value numeric)
    // catagory id - integer - refrence catagor model id
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
