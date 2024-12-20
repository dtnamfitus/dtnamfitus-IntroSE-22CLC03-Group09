const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Publisher = db.define(
  'Publisher',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'publishers',
    timestamps: true,
  }
);

Publisher.sync()
  .then(() => console.log('Publisher sync successfully'))
  .catch((error) => console.log(error));

module.exports = Publisher;
