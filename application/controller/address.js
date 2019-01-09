
const modelAddress =require('../models/address')

async function createAddress(req, res) {
    try{
     const body=req.body;

   const  inputAddress={
          country: body.country,
          city: body.city,
          user: body.user,
          street: body.street,
          house_number: body.house_number,
          postcode: body.postcode || '' 
      }
        let address= await modelAddress.createAddress(inputAddress);
          res.json({
              error: false,
              message: 'surccess, address was cread',
              address
          })
    }catch(ex){
        res.status(400).json({
            error: true,
            message: ex

        })
    }
    }



    async function getAddressByUser(req, res) {
        try{
        let user_id= req.params.user || 0;
            let address= await modelAddress.getAddressByUser(user_id);
              res.json({
                  error: false,
                  message: 'surccess, address was cread',
                  address
              })
        }catch(ex){
            res.status(400).json({
                error: true,
                message: ex

            })
        }
        }




module.exports={
    createAddress,
    getAddressByUser
}
