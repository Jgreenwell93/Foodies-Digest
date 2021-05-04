const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserRecipe extends Model {}

UserRecipe.init(
  {
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'recipe',
      key: 'id',
    },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userRecipe',
    freezeTableName: true,
  }
);

module.exports = UserRecipe;
