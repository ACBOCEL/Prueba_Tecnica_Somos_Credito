const { DataTypes } = require("sequelize");
const sequelize = require("../database"); 

const Sucursal = sequelize.define('Sucursal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_suc: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: 'sucursales',
  timestamps: false 
});
module.exports = Sucursal;