
const modelGenre =require('../models/genres')


async function createGenre(req, res) {
    try{
        body=req.body;
         
        const  inputGener={
          name: body.name,
          description: body.description,
      }
          let Genre= await modelGenre.createGenre(inputGener);
          res.json({
              error: false,
              message: 'surccess, Genre was cread',
              Genres: Genre
          })
    }catch(ex){
        res.status(400).json({
            error: ex
            
        })
    }
    }




    //register new Genre
    async function updateGenre(req, res) {
        try{
           let  body=req.body;
            let id=req.params.id;
             console.log(id)
            const  inputGener={
              name: body.name,
              description: body.description,
          }
    
        let genre= await modelGenre.updateGenre(id,inputGener);
           return  res.json({
                  error: false,
                  message: 'surccess, Genre was cread',
               //   genre
              })
        }catch(ex){
            res.status(400).json({
                error: ex
                
            })
        }
        }




        
    //register disable
async function disabledGenre(req, res) {
    try{
      
        let id=req.params.id;
      
    let genre= await modelGenre.disabledGenre(id);
       return  res.json({
              error: false,
              message: 'surccess, Genre was disabled',
           //   genre
          })
    }catch(ex){
        res.status(400).json({
            error: ex
            
        })
    }
    }


    
//get all suers
async function getAllGenres(req, res) {
    //var for pagination 
    let _since=req.query.since || 0;
    let _limit= 10; //nomber of item
    _since=Number(_since)
    
    

    try{
          let genre= await modelGenre.getAllGenres(_since,_limit);
          res.json({
              error: false,
              message: 'surccess',
              Genres: genre,
              
          })
    }catch(ex){
        res.status(400).json({
            error: true,
            message: ex
            
        })
    }
    }


    async function getAllGenresAvoidStatus(req, res) {
        //var for pagination 
        let _since=req.query.since || 0;
        let _limit= 10; //nomber of item
        _since=Number(_since)
        
        
    
        try{
              let genre= await modelGenre.getAllGenresAvoidStatus(_since,_limit);
              res.json({
                  error: false,
                  message: 'surccess',
                  genres: genre,
                  
              })
        }catch(ex){
            res.status(400).json({
                error: true,
                message: ex
                
            })
        }
        }


    async function getGenreById(req, res) {
        let id = req.params.id;
        try{
              let genre= await modelGenre.getGenreById(id);
              res.json({
                  error: false,
                  message: 'surccess',
                  genre
              })
        }catch(ex){
            res.status(400).json({
                error: ex
                
            })
        }
        }

module.exports={
createGenre,
getAllGenres,
getGenreById,
updateGenre,
disabledGenre,
getAllGenresAvoidStatus

}