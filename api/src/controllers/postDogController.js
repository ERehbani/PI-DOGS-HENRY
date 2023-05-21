// const { Dog , Temperaments} = require ('../db')
// //const {HTTML_BREADS,api_key} = process.env;
// //const axios = require('axios');


// const postDogs = async (dogInfo) => {
//     try {
//         const {name,bred_for,breed_group,origin,life_span,minHeight,maxHeight,weightMin,weightMax,image,temperamentId1,temperamentId2,temperamentId3,temperamentId4} = dogInfo;
//         if(!name||!bred_for||!breed_group||!origin||!life_span||!minHeight||!maxHeight||!weightMin||!weightMax||!image||!temperamentId1||!temperamentId2||!temperamentId3 || !temperamentId4) 
//         throw Error ('Por favor ingrese todos los datos');


//         const newDog = await Dog.create({
//             name:name,
//             bred_for:bred_for,
//             breed_group:breed_group,
//             origin:origin,
//             life_span:life_span,
//             minHeight:minHeight,
//             maxHeight:maxHeight,
//             weightMin:weightMin,
//             weightMax:weightMax,
//             image:image,
//         });

//         //Verifico que los Temperamentos(id) ingresados sean numericos
//         let tempId = [temperamentId1,temperamentId2,temperamentId3,temperamentId4];
//         tempId.forEach(num=> parseInt(num));

//         const aux = [];
//         //Genero 4 recorridos para que se realcionen Dog/Temp
//         let j = 0;
//         while(j<tempId.length) { 
//             newDog.addTemperaments(await Temperaments.findAll({
//             where: {
//               id:tempId[j],
//             },
//           }))

//           j++;
//         }

//         return newDog;

//     } catch (error) {

//         return {error: error.message}
//     }
// }

// module.exports = postDogs;