const { Router } = require('express')
const {getDogHandler, getBreedIdHandler, createDogHandler} = require('../handlers/dogHandler')

const dogsRouter = Router()

dogsRouter.get('/', getDogHandler)
dogsRouter.get('/:id', getBreedIdHandler)
dogsRouter.post('/', createDogHandler)


module.exports = dogsRouter