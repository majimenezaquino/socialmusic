const SchemaMusicPlayed =require('./schemas/song-played')




async function creatPlayed(_played) {
    let music_played= await SchemaMusicPlayed.create(_played);
    return music_played;
}

async function updatePlayed(id,_played) {
    let music_played= await SchemaMusicPlayed.findByIdAndUpdate(id,_played,{new: true});
    return music_played;
}


module.exports={
    creatPlayed,
    updatePlayed

}
