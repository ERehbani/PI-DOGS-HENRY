const getTemperament = require('../controllers/getTemperament')


  const getAllTempHandlers = async (req, res) => {
    try {
      let result = await getTemperament();
      await res.status(200).json(result);
    } 
    catch (error) {
      res.status(404).send(error);
    }
  };
  
  module.exports =  getAllTempHandlers ;