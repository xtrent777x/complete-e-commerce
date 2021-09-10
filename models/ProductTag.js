const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // id - integer - doesnt allow null - set primary - uses auto increment - 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product id - integer -refrence product model - 
    product_id: {
      type: DataTypes.INTEGER,
      references: { model: 'product', key: 'id' }
    },
    //tag id - integer - refrence tog id
    tag_id: {
      type: DataTypes.INTEGER,
      references: { model: 'tag', key: 'id' }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
