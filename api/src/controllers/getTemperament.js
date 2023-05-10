const { default: axios } = require("axios")
const Temperament = require('../db')

const getTemperament = async () => {
    const dataApi = await axios('https://api.thedogapi.com/v1/breeds')
    let allTemps = dataApi.data.map((el) => (el.temperament ? el.temperament : "No existe temperamento" )).map((el) => (el?.split(", "))) // mapeo la data de la api y si encuentra datos, los separa con una coma

    let temps = [...new Set(allTemps.flat())];  // elimina strings repetidos y los agrega a un array

    temps.forEach((el) => {
        if(el) {                        //se crea donde el nombre sea igual al elemento
            Temperament.findOrCreate({
                where: {
                    name: el
                }
            })
        }
    })
    temps = await Temperament.findAll({
        attributes: { exclude: ["createdAt", "updateAt", "deletedAt"]}
    })
    return temps
}

module.exports = getTemperament