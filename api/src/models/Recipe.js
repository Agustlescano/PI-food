const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Details: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    Puntuacion: {
     type: DataTypes.FLOAT
    },
    HealthScore:{
      type: DataTypes.FLOAT
    },
   Steps:{
      type: DataTypes.TEXT
    }
  });
};
