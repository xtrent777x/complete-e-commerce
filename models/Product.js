// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns (id - integer - doesnt allow null- set primary - use auto)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //(product name) - string - doesnt allow null -decimal -validate null -
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Price -decimal -validate null -
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: { isNumeric: true}
    },
    //stocks (integer - doesnt allow null - set a default value 10 - validates value numeric)
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: { isNumeric: true}
    },
    // catagory id - integer - refrence catagor model id
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: 'category', key: 'id'}
    }
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
