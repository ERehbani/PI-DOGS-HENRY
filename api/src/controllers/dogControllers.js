const { Dog } = require('../db')


const createDog = async(name, origin, breed_group, image, life_span, height, weight) =>
    await Dog.create({name, origin, breed_group, image, life_span, height, weight})         // PROMESA





module.exports = { createDog }