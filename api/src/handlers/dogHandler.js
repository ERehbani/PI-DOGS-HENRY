const { createDog, getBreedById, searchDogByName, getAllDogs } = require("../controllers/dogControllers")
const Dog = require('../models/Dog')

const getDogHandler = async(req, res) => {
    const { name } = req.query

    const results = name ? await searchDogByName(name) : await getAllDogs()

    res.status(200).json(results)
}

const getBreedIdHandler = async(req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api"
    // isNaN (412-k312h7f3-423l4i-234)
    // else /23
    try {
        const breed = await getBreedById(id, source)
        res.status(200).json(breed)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createDogHandler = async (req, res) => {
    try {
        const { id, name, origin, breed_group, image, life_span, height, weight } = req.body;
        const newDog = await createDog( id, name, origin, breed_group, image, life_span, height, weight);
        res.status(201).json(newDog)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}



module.exports = {getDogHandler, getBreedIdHandler, createDogHandler}