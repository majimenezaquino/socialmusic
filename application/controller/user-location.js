
const ModelUserLocation =require('../models/user-location')

//register new user
async function createLocation(req, res) {
    try{
        //check if user and playlist exist

      const  body=req.body;
              const _data_save={
                coords: body.coords || {},
                user_location: req.user_id
              }
          let location = await ModelUserLocation.createLocation(_data_save);
          res.json({
              error: false,
              message: 'surccess, loaction was cread',
              location
          });

    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }



module.exports={
createLocation

}
