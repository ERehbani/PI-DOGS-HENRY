const { Router } = require('express')
const  getApiImage  = require('../controllers/getApiImage')


const imageRouter = Router()

imageRouter.get('/image', getApiImage)


module.exports = imageRouter