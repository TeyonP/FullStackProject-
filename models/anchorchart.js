'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anchorChart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  anchorChart.init({
    subject: DataTypes.STRING,
    grade: DataTypes.STRING,
    topic: DataTypes.STRING,
    image: DataTypes.BLOB,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'anchorChart',
  });
  return anchorChart;
};