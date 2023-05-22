require('dotenv').config();
const axios = require('axios');
const { Image } = require ('./../db');       



const getApiImage = async () => {
    
    try {
        const coma = ',';
        let i = 0
        let apiArray = [];
        let tempArray = [];
        
        while (i < 2) {
            let apiData = await axios(`https://api.thedogapi.com/v1/breeds?limit=100&page=${i}`)//?apy_key=${api_key}`);
         // [   [ {}{}{} ],[ {}{}{} ]    ]
            apiArray.push(apiData);
            
            i++;
        }
        
        if(!apiArray && !apiArray.isArray()) throw Error ("Hay un Error en la Peticion Image");

        (await Promise.all(apiArray)).map(res=> 
            res.data.map(data=>{
                //(!data.name)? tempArray.push('')
                //:tempArray.push(data.name.split(coma));
                tempArray.push({
                    reference_image_id:data.reference_image_id,
                    image:data.image.url,  
                });
            }) 
        )
        
        tempArray.forEach((dog =>{

            Image.findOrCreate({
                where: { 
                id:dog.reference_image_id,
                image:dog.image,     
             },
              })
        }));
        
        return tempArray;

    } catch (error) {
        console.log(error)
        return {error: error.message}
    }
}


module.exports = getApiImage;