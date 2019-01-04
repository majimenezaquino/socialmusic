
const Albumes =require('../models/albumes')
const PlayList =require('../models/playlist')

//register new user
async function createAlbumes(req, res) {
    try{
        body=req.body;

        const  obAlbumes={
          name: body.name,
          privacy: body.privacy,
          user_published: req.user_id
      }
          let albumes= await Albumes.createAlbumes(obAlbumes);
          res.json({
              error: false,
              message: 'surccess, Albumes was cread',
              albumes
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }




    //register new user
    async function updateAlbumes(req, res) {
        try{
            let id = req.params.id;
            let body=req.body;

            let  obAlbumes;
            //if name of list exist
              if(body.name!=''){
                obAlbumes={
                    name: body.name
                    // privacy: body.privacy
                  }
                }

                 if((body.privacy=='public') || (body.privacy=='private') || (body.privacy=='friends')){
                  obAlbumes={   privacy: body.privacy}
                }else{

                }

         let albumes= await Albumes.updateAlbumes(id,obAlbumes);
              res.json({
                  error: false,
                  message: 'surccess, Albumes was updated',
                  albumes
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }

        async function disabledAlbumes(req, res) {
            try{
                let id = req.query.id;

             let albumes= await Albumes.disabledAlbumes(id);
                  res.json({
                      error: false,
                      message: 'surccess, Albumes was disabled',
                      albumes
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }




//get all suers
    async function getAllAlbumesByUser(req, res) {
        try{
            let user_id =req.user_id;
             //var for pagination
        let _since=req.query.since || 0;
        let _limit= 10; //nomber of item
        _since=Number(_since)

              let albumes= await Albumes.getAllAlbumesByUser(user_id,_since,_limit);
              res.json({
                  error: false,
                  message: 'surccess',
                //  count: await PlayList.getPlayListByAlbumCount(id),
                albumes
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }


        async function getAlbumesById(req, res) {
            let id = req.params.id;

            try{
                  let albumes= await Albumes.getAlbumesById(id);
                  res.json({
                      error: false,
                      message: 'surccess',
                      playList_count:await PlayList.getPlayListByAlbumCount(albumes._id),
                      albumes
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }

module.exports={
    createAlbumes,
    updateAlbumes,
    disabledAlbumes,
    getAllAlbumesByUser,
    getAlbumesById

}
