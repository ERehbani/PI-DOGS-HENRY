const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    Imagenes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // image: {
    //   type: DataTypes.STRING,
    //   // allowNull: false
    // },
    weightMin: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    weightMax:{
      type: DataTypes.STRING,
      // allowNull: false
    },
    averageWeight: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // createdInBd: {                  // sirve para hacer una distincion entre los que estan en base de datos y los que estan en la api
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true
    // }

  },{
    timestamps: false
  });
};
