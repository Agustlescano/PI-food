const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
     type: DataTypes.ENUM('0','1','2','3','4','5','6','7','8','9','10')
    },
    HealthScore:{
      type: DataTypes.FLOAT
    },
   Steps:{
      type: DataTypes.JSON
    }
  });
};
