
const modelTypeAccounts =require('../models/type-accounts.js')

//register new user
async function createTypeAccounts(req, res) {
    try{
      const  body=req.body;


        let typeaccountObject={
            name: body.name,
            limit_upload: body.limit_upload,
            days_upload: body.limit_month
      }

        let typeaccount= await modelTypeAccounts.createTypeAccounts(typeaccountObject);
          res.json({
              error: false,
              message: 'Success, the typeaccount  was created.',
              typeaccount
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }






    //get playlist by albums
    async function getTypeAccounts(req, res) {
        try{
              let typeaccounts= await modelTypeAccounts.getTypeAccounts();
              res.json({
                  error: false,
                  message: 'surccess',
                  typeaccounts
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }




        //get playlist by albums
        async function updateTypeAccounts(req, res) {
            try{
                let user_id =req.user_id || 0;
                let typeaccountObject={
                    name: body.name,
                    limit_upload: body.limit_upload,
                    month: body.month
              }

                  let SongDedicates= await modelTypeAccounts.updateTypeAccounts(user_id,typeaccountObject);
                  res.json({
                      error: false,
                      message: 'surccess',
                      SongDedicates
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }







module.exports={
    createTypeAccounts,
    getTypeAccounts,
    updateTypeAccounts

}
