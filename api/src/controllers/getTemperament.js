const axios = require("axios")
const  { Temperaments }  = require('../db')
const { API_KEY } = process.env

const getTemperament = async () => {
    console.log('232323')
    // const dataApi = await axios('https://api.thedogapi.com/v1/breeds')
    const apiArray = []
    let i = 0
    const tempArray = []
    let coma = ', '
    try {
        while (i < 2) {
            let apiData = await axios(`https://api.thedogapi.com/v1/breeds?limit=100&page=${i})//?apy_key=${API_KEY}`);
            // [   [ {}{}{} ],[ {}{}{} ]    ]
            apiArray.push(apiData);
            i++;
        }
        (await Promise.all(apiArray)).map(res=> 
            res.data.map(data=>{
                (!data.temperament) ? tempArray.push('')
                : tempArray.push(data.temperament.split(coma));
            }) 
            )
        //Flat() devuelve 1 solo Array (Array Con subArrays)
        //SET() Set  permite almacenar valores únicos/no repetidos de cualquier tipo
        const filteredTemperaments = [...new Set(tempArray.flat())];
            // console.log(filteredTemperaments)
        filteredTemperaments.forEach((temperament =>{
            if(temperament) {
            Temperaments.findOrCreate({
                where: { name: temperament.trim() },
            })}
        }));

        // const idTemperaments = filteredTemperaments.map((string, index) => ({ id: index + 1, name: string }));
        return filteredTemperaments;

    } catch (error) {

        return {error: error.message}
    }
}


module.exports = getTemperament;