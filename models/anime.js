'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anime.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      seasons: DataTypes.INTEGER,
      totalEpisodes: DataTypes.INTEGER,
      rating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Anime',
      tableName: 'animes'
    }
  )
  return Anime
}
