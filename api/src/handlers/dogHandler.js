const { createDog } = require("../controllers/dogControllers")


const getDogHandler = async(req, res) => {
    const { name } = req.query
    if(name !== undefined) res.send(`Llamar a la funcion que busca por nombre`) 
    else res.send('quiero enviar todos los usuarios')
}

const getBreedIdHandler = (req, res) => {
    const {id} = req.params;
    res.send(`Envia el detalle de la raza ${id}`)
}

const createDogHandler = async (req, res) => {
    try {
        const { name, origin, breed_group, image, life_span, height, weight } = req.body;
        const newDog = await createDog(name, origin, breed_group, image, life_span, height, weight);
        res.status(201).json(newDog)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {getDogHandler, getBreedIdHandler, createDogHandler}