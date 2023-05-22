const { Router } = require('express')
const {getDogHandler, getBreedIdHandler, createDogHandler, getDog} = require('../handlers/dogHandler')


const dogsRouter = Router()

dogsRouter.get('/', getDogHandler)
// dogsRouter.get('/:id', getBreedIdHandler)
dogsRouter.get('/:id', getBreedIdHandler)
dogsRouter.get('/name', getDog)

dogsRouter.post('/', createDogHandler)


module.exports = dogsRouter