
const modelCities =require('../models/cities')



async function getAllcities(req, res) {
    try{
    let country_code =req.params.code || undefined;
     let cities = await modelCities.getAllCities(country_code);
  return   res.json({
        error: false,
        message: 'surccess',
        cities

    })

  }catch(err){
      return  res.status(400).json({
            error: {
              error: true,
              message: err
            }

        })
    }
    }


    async function getCityById(req, res) {
        try{
         let id =req.params.id || 0;
         const cities = await modelCities.getCityById(id);
         res.json({
            error: false,
            message: 'surccess',
            cities

        })

        }catch(ex){
            res.status(400).json({
                error: true,
                message: ex

            })
        }
        }




module.exports={
    getAllcities,
    getCityById
}
