const { default: axios } = require('axios')
const { Dog } = require('../db')

const createDog = async(name, origin, breed_group, image, life_span, height, weight) =>{
    await Dog.create({name, origin, breed_group, image, life_span, height, weight})      }   // PROMESA


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
    const databaseDogs = await Dog.findAll()
    const apiDogsRaw = (
        await axios.get("https://api.thedogapi.com/v1/breeds")
        ).data
    const apiDogs = cleanArray(apiDogsRaw)

    return [...databaseDogs, ...apiDogs]
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