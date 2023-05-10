

const getDogHandler = async(req, res) => {
    const { name } = req.query
    if(name !== undefined) res.send(`Llamar a la funcion que busca por nombre`) 
    else res.send('quiero enviar todos los usuarios')
}

const getBreedIdHandler = (req, res) => {
    const {id} = req.params;
    res.send(`Envia eal detalle de la raza ${id}`)
}

const createDogHandler = (req, res) => {
    const { name, origin, breed_group, image } = req.body;
    res.send(`Estoy por crear un usuario con esots datos:
    name: ${name},
    origin: ${origin},
    breed_group: ${breed_group},
    image: ${image}
    `)

}

module.exports = {getDogHandler, getBreedIdHandler, createDogHandler}