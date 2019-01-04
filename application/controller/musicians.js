
const modelusician=require('../models/musicians')



async function createMusician(req, res) {
    try{
      let body =req.body;
        const obMusicians ={
          name: body.name,
          description: body.description,
          icon: body.icon,
        }

     const musician = await modelusician.createMusician(obMusicians)
     res.json({
        error: false,
        message: 'surccess',
        musician

    })

    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }


    async function getAllMusicians(req, res) {
        try{

         const musicians = await modelusician.getAllMusicians();
         res.json({
            error: false,
            message: 'surccess',
            musicians

        })

        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }


module.exports={
  createMusician,
  getAllMusicians
}
