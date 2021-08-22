'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Giver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Giver.init({
    givername: DataTypes.STRING,
    address: DataTypes.STRING,
    gifts: DataTypes.STRING,
    notesent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Giver',
  });
  return Giver;
};