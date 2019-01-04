const Genres =require('./schemas/genres.js')



async function createGenre(genre) {
    let Genre= await Genres.create(genre);
    return genre;
}

async function getAllGenres(_since=0, _limit=10) {
    let genres= await Genres.find({status: 'active'})
    .skip(_since)
    .limit(_limit);
    return genres;
}

async function getAllGenres(_since=0, _limit=10) {
    let genres= await Genres.find({status: 'active'})
    .skip(_since)
    .limit(_limit);
    return genres;
}

//get all user not firter status
async function getAllGenresAvoidStatus(_since=0, _limit=10) {
    let genres= await Genres.find()
    .skip(_since)
    .limit(_limit);
    return genres;
}

async function getGenreById(id) {
    let genre= await Genres.findById(id)
    return genre;
}


async function updateGenre(id,_genre) {
    console.log(id,_genre)
    const genre= await Genres.findByIdAndUpdate(id,_genre);
    return genre;
}


async function disabledGenre(id) {
    //disabled genre
    let genre= await Genres.findByIdAndUpdate(id ,{status: 'disabled'})
    return genre;
}



module.exports={
    createGenre,
    getAllGenres,
    getGenreById,
    updateGenre,
    disabledGenre,
    getAllGenresAvoidStatus
}