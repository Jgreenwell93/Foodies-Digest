const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {};

Recipe.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        recipe_id: {
          type: DataTypes.INTEGER,
          allow_null: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            }
        }
    },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'recipe',
    freezeTableName: true,
  } 
  
);

module.exports = Recipe;