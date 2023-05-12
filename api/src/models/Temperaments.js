const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperaments', {
    //   id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncremet: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
  );
}

// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('temperaments', {
//     id:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement:true
//       },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         primaryKey:true,
//         allowNull:false,
//     },
//   },{timestamps: false});
// };