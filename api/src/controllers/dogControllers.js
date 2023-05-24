const { default: axios } = require('axios')
const { Dog, Temperaments, Image } = require('../db')
const { API_KEY } = process.env
const uuid = require('uuid');


// const createDog = async(name, origin, breed_group, image, life_span, height, weight) =>
//     await Dog.create({name, origin, breed_group, image, life_span, height, weight})         // PROMESA

const createDog = async(name, origin, breed_group, temperament, image, life_span, height, weightMin, weightMax) =>{
  
  const averageWeight = (parseFloat(weightMax) / 2 + parseFloat(weightMin) / 2);


    const newDog = await Dog.create({
        name:name,
        origin:origin,
        life_span:life_span,
        height:height,
        weightMax:weightMax,
        averageWeight: averageWeight,
        weightMin:weightMin,
        Imagenes:image,
        breed_group:breed_group
    });
    newDog.addTemperaments(await Temperaments.findAll({
        where: {
            id: temperament
        }
    }))

    return newDog
    // await Dog.create({name, origin, breed_group, image, life_span, height, weight})
    }     // PROMESA


const cleanArray= (arr) => arr.map((elem) => {
    return {
        id: elem.id,
        name: elem.name,
        breed_group: elem.breed_group,
        life_span: elem.life_span,
        temperament: elem.temperament,
        weight: elem.weight.metric,
        height: elem.height.metric,
        image: elem.image.url,
        createdInDb: false
    }
})

const getAllDogs = async() => {      //buscar en bdd y api
    //buscar en la bdd
    let apiData = await axios(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );

      let fromApi = await apiData.data.map((inst) => {
        
        let weightMin = parseInt(inst.weight.metric.slice(0, 2).trim());
        let weightMax = parseInt(inst.weight.metric.slice(4).trim());
        let averageWeight = weightMax + weightMin;
    
        if (weightMin && weightMax) {
          averageWeight = averageWeight / 2;
    
        } else if (weightMin && !weightMax) {
          weightMax = weightMin;
          averageWeight = averageWeight / 2;
    
        } else if (!weightMin && weightMax) {
          weightMin = weightMax;
          averageWeight = averageWeight / 2;
        } else {
          if (inst.name === "Smooth Fox Terrier") {
            weightMin = 6;
            weightMax = 9;
            averageWeight = ((weightMax) + (weightMin)) / 2;
          } else {
            weightMin = 20;
            weightMax = 30;
            averageWeight = ((weightMax) + (weightMin)) / 2;
          }
        }
         //Desarrollo las alturas en Metrica
        let minHeight = parseInt(inst.height.metric.slice(0,2).trim());
        let maxHeight = parseInt(inst.height.metric.slice(4).trim());
        
        return {
          id: inst.id,
          weightMin: weightMin,
          weightMax: weightMax,
          averageWeight: averageWeight,
          maxHeight: maxHeight,
          minHeight: minHeight,
          name: inst.name,
          life_span: inst.life_span,
          image: inst.image.url,
          temperament: inst.temperament,
        };
      });

      let pushDog = await Dog.findAll();
      const combinedArray = [...fromApi, ...pushDog];
      const flatArray = combinedArray.flat();

      console.log(flatArray);

      return flatArray; 
    }

    // const getBreedById = async(id, source) => {
    //   const breed = 
    //       source === "api" ?
    //           (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data
    //           : await Dog.findByPk(id)
    //           console.log(breed)

    //           return breed
    //   }
    const getDogsById = async (id) => {
      try {
          // let id = id.parseInt()
          //Primero busco en la DB segun ID uuid
          if(uuid.validate(id)){
              let dogDB = await Dog.findOne({
                  where: {id:id,
                  }})
              if(dogDB) return dogDB;
          }
  
          //Corroboro que sea un numero!  luego que este entre los permitidos
          // if(isNaN(id))  throw Error (`El ID ${id} debe ser numerico`)
  
          const {data} = await axios(`https://api.thedogapi.com/v1/breeds/${id}?${API_KEY}`);
  
          //Corroboro que no me retorne un objeto vacio
          if(!Object.keys(data).length) throw Error (`El ${id} no es valido`)
  
  
  
              //Desarrollo las alturas en Metrica
              let minHeight = parseInt(data.height.metric.slice(0,2).trim());
              let maxHeight = parseInt(data.height.metric.slice(4).trim());
              //Desarollo los pesos en Metrica
              let minWeight = parseInt(data.weight.metric.slice(0,2).trim());
              let maxWeight = parseInt(data.weight.metric.slice(4).trim());
  
              //Si data.ref viene vacio no entro a la DB
              let imagen= '';
              if(data.reference_image_id){
              imagen = await Image?.findOne({
                  where: {
                    id:data.reference_image_id
                  }
                })}
  
                //Reviso respuesta la DB y la API
                let newImagen = imagen ? imagen.dataValues.image : data.image;
  //SI no exite le adhiero una imagen Provisoria
  
          //Manejo la info de data, genero OBJ  ---
                let averageWeight = minWeight + maxWeight / 2
              const dogDetail = {
                    id: data.id,
                    name: data.name,
                    bred_for: data.bred_for,
                    breed_group: data.breed_group,
                    origin: data.origin,
                    life_span:data.life_span,
                    minHeight,
                    maxHeight,
                    minWeight,
                    maxWeight,
                    averageWeight,
                    image: newImagen,
                    temperament:data.temperament.split(','),
                }
                console.log(dogDetail)
          return dogDetail;
  
      } catch (error) {
          return {error: error.message}
      }
  }

const searchDogByName = async(name) => {
    const databaseDogs = await Dog.findAll({
        where: {
            name: name
        }
    })
    const apiDogsRaw = (
        await axios.get("https://api.thedogapi.com/v1/breeds")
        ).data
    const apiDogs = cleanArray(apiDogsRaw)
    const filteredApi = apiDogs.filter((dog) => dog.name === name)

    return [...filteredApi, ...databaseDogs]
}
// getBreedById
module.exports = { createDog,  getAllDogs, searchDogByName, getDogsById }