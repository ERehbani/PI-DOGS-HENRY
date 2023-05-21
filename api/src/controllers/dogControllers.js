const { default: axios } = require('axios')
const { Dog, Temperaments } = require('../db')
const { API_KEY } = process.env

// const createDog = async(name, origin, breed_group, image, life_span, height, weight) =>
//     await Dog.create({name, origin, breed_group, image, life_span, height, weight})         // PROMESA

const createDog = async(name, origin, breed_group, temperament, image, life_span, height, weightMin, weightMax, averageWeight) =>{
    const newDog = await Dog.create({
        name:name,
        origin:origin,
        life_span:life_span,
        height:height,
        weightMax:weightMax,
        weightMin:weightMin,
        averageWeight:averageWeight,
        image:image,
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


const getBreedById = async(id, source) => {
    const breed = 
        source === "api" ?
            (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data
            : await Dog.findByPk(id)

    return breed
    }

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
        return {
          id: inst.id,
          weightMin: weightMin,
          weightMax: weightMax,
          averageWeight: averageWeight,
          height: inst.height,
          name: inst.name,
          life_span: inst.life_span,
          image: inst.image.url,
          temperament: inst.temperament,
        };
      });
      return fromApi;
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

module.exports = { createDog, getBreedById, getAllDogs, searchDogByName }