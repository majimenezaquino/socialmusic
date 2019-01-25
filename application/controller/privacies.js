
const ModelPrivacies= require('../models/privacies');
const {PATH_FILES}=require('../config/index')

async function getAllPrivacies(req, res) {
    try{


          let privacies= await ModelPrivacies.getAllPrivacies();

          res.json({
              error: false,
              message: 'surccess',
              privacies
          })
    }catch(ex){
        res.status(400).json({
            error: true,
            message: 'error url not allower'

        })
    }
    }



module.exports={
getAllPrivacies
}
