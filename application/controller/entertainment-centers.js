
const EntertainmentCenters =require('../models/entertainment-centers.js');
const ModelEntertainmentDate =require('../models/entertainment-centers-days.js');
const PlayList =require('../models/playlist')
//register new user
async function createEntertainmentCenters(req, res) {
    try{
        body=req.body;

        const  obEntertainmentCenters={
          name: body.name,
          privacy: body.privacy,
          user_published: req.user_id
      }
          let EntertainmentCenters= await EntertainmentCenters.createEntertainmentCenters(obEntertainmentCenters);
          res.json({
              error: false,
              message: 'surccess, EntertainmentCenters was cread',
              EntertainmentCenters
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }


    async function getAllEntertainmentCentersDay(req, res) {
        try{
            let language = req.params.language || 'es';

              let hourentertainmentCenters= await ModelEntertainmentDate.getAllEntertainmentCentersDay(language)
              res.json({
                  error: false,
                  schedules: hourentertainmentCenters
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }




    //register new user
    async function updateEntertainmentCenters(req, res) {
        try{
            let id = req.params.id;
            let body=req.body;

            let  obEntertainmentCenters;
            //if name of list exist
              if(body.name!=''){
                obEntertainmentCenters={
                    name: body.name
                    // privacy: body.privacy
                  }
                }

                 if((body.privacy=='public') || (body.privacy=='private') || (body.privacy=='friends')){
                  obEntertainmentCenters={   privacy: body.privacy}
                }else{

                }

         let EntertainmentCenters= await EntertainmentCenters.updateEntertainmentCenters(id,obEntertainmentCenters);
              res.json({
                  error: false,
                  message: 'surccess, EntertainmentCenters was updated',
                  EntertainmentCenters
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }

        async function disabledEntertainmentCenters(req, res) {
            try{
                let id = req.params.id;

             let EntertainmentCenters= await EntertainmentCenters.disabledEntertainmentCenters(id);
                  res.json({
                      error: false,
                      message: 'surccess, EntertainmentCenters was disabled',
                      EntertainmentCenters
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }




            //get all suers
                async function getAllEntertainmentCenters(req, res) {
                    try{
                        let user_id =req.user_id;
                         //var for pagination
                    let _since=req.query.since || 0;
                    let _limit= 10; //nomber of item
                    _since=Number(_since)

                          let playlist= await EntertainmentCenters.getAllEntertainmentCenters(user_id,_since,_limit);
                          res.json({
                              error: false,
                              message: 'surccess',
                            playlist
                          })
                    }catch(ex){
                        res.status(400).json({
                            error: ex

                        })
                    }
                    }



                    //get all suers
                        async function getAllEntertainmentCentersByUser(req, res) {
                            try{
                                let user_id =req.user_id;


                                  let playlist= await EntertainmentCenters.getAllEntertainmentCentersByUser(user_id);
                                  res.json({
                                      error: false,
                                      message: 'surccess',
                                    playlist
                                  })
                            }catch(ex){
                                res.status(400).json({
                                    error: ex

                                })
                            }
                            }


        async function getEntertainmentCentersById(req, res) {
            let id = req.params.id;

            try{
                  let EntertainmentCenters= await EntertainmentCenters.getEntertainmentCentersById(id);
                  res.json({
                      error: false,
                      message: 'surccess',
                      playList_count:await PlayList.getPlayListByAlbumCount(EntertainmentCenters._id),
                      EntertainmentCenters
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }

module.exports={
    createEntertainmentCenters,
    getAllEntertainmentCentersDay
}
